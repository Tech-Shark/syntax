use std::collections::HashMap;

use super::super::util::{generate_random_string, get_current_time, SOMETHING_WENT_WRONG};
use crate::{
    schema::{
        notifications::notification_for_single_user::{
            Error, IndividualNotificationForSingleUser, NotificationForSingleUser,
            NotificationForSingleUserInput, NotificationForSingleUserResponse,
            NotificationForSingleUserResponseOk, ID_GENERATION_FAILED, INVALID_NOTIFICATION_ID,
        },
        user::NO_USER_FOUND,
    },
    storage::thread_local::NOTIFICATION_FOR_SINGLE_USER_MAP,
};

#[ic_cdk::query]
async fn get_all_notification_for_single_user() -> NotificationForSingleUserResponse {
    let principal = ic_cdk::api::caller().to_text();

    match NOTIFICATION_FOR_SINGLE_USER_MAP.with(|map| map.borrow().get(&principal)) {
        Some(data) => NotificationForSingleUserResponse::Ok(
            NotificationForSingleUserResponseOk::NotificationForSingleUser(data),
        ),
        None => NotificationForSingleUserResponse::Ok(
            NotificationForSingleUserResponseOk::NotificationForSingleUser(
                NotificationForSingleUser {
                    has_read: true,
                    notifications: vec![],
                },
            ),
        ),
    }
}

#[ic_cdk::update]
async fn add_new_notification_for_single_user(
    payload: NotificationForSingleUserInput,
) -> NotificationForSingleUserResponse {
    let principal = ic_cdk::api::caller().to_text();
    let id = generate_random_string().await;
    let mut new_payload_hashmap = HashMap::<String, IndividualNotificationForSingleUser>::new();

    // Return error if no ID could be generated
    if id.is_none() {
        return NotificationForSingleUserResponse::Err({
            Error {
                message: ID_GENERATION_FAILED.to_string(),
            }
        });
    }

    let notification_data = IndividualNotificationForSingleUser {
        id: id.clone().unwrap(),
        title: payload.title,
        body: payload.body,
        has_read: false,
        category: payload.category,
        date_created: get_current_time().to_string(),
    };

    let existing_data =
        NOTIFICATION_FOR_SINGLE_USER_MAP.with(|map| map.borrow_mut().get(&principal));
    new_payload_hashmap.insert(id.unwrap(), notification_data);

    // Create new notification structure if it's the user's first
    if existing_data.is_none() {
        let notification_payload = NotificationForSingleUser {
            has_read: false,
            notifications: vec![new_payload_hashmap],
        };

        NOTIFICATION_FOR_SINGLE_USER_MAP
            .with(|map| map.borrow_mut().insert(principal, notification_payload));
    } else {
        let mut new_notification_payload = existing_data.unwrap().notifications.clone();
        new_notification_payload.push(new_payload_hashmap);

        let notification_payload = NotificationForSingleUser {
            has_read: false,
            notifications: new_notification_payload,
        };

        NOTIFICATION_FOR_SINGLE_USER_MAP
            .with(|map| map.borrow_mut().insert(principal, notification_payload));
    }

    NotificationForSingleUserResponse::Ok(NotificationForSingleUserResponseOk::Message(
        "Notification created successfully!".to_string(),
    ))
}

// This function is not supposed to be exposed to the candid. It should be used internally.
#[cfg(feature = "internal")]
#[ic_cdk::update]
async fn update_a_notification_for_single_user(
    principal: String,
    payload: IndividualNotificationForSingleUser,
) -> NotificationForSingleUserResponse {
    let mut new_payload_hashmap = HashMap::<String, IndividualNotificationForSingleUser>::new();

    let notification_data = IndividualNotificationForSingleUser {
        id: payload.id.clone(),
        title: payload.title,
        body: payload.body,
        has_read: payload.has_read,
        category: payload.category,
        date_created: payload.date_created,
    };

    let existing_data =
        NOTIFICATION_FOR_SINGLE_USER_MAP.with(|map| map.borrow_mut().get(&principal));
    new_payload_hashmap.insert(payload.id, notification_data);

    // Create new notification structure if it's the user's first
    if existing_data.is_none() {
        let notification_payload = NotificationForSingleUser {
            has_read: false,
            notifications: vec![new_payload_hashmap],
        };

        NOTIFICATION_FOR_SINGLE_USER_MAP
            .with(|map| map.borrow_mut().insert(principal, notification_payload));
    } else {
        let mut new_notification_payload = existing_data.unwrap().notifications.clone();
        new_notification_payload.push(new_payload_hashmap);

        let notification_payload = NotificationForSingleUser {
            has_read: false,
            notifications: new_notification_payload,
        };

        NOTIFICATION_FOR_SINGLE_USER_MAP
            .with(|map| map.borrow_mut().insert(principal, notification_payload));
    }

    NotificationForSingleUserResponse::Ok(NotificationForSingleUserResponseOk::Message(
        "Notification updated successfully!".to_string(),
    ))
}

#[ic_cdk::update]
async fn mark_notification_as_read(
    notification_id: String,
) -> NotificationForSingleUserResponse<IndividualNotificationForSingleUser> {
    let principal = ic_cdk::api::caller().to_text();

    // Get all notifications of a single user
    match NOTIFICATION_FOR_SINGLE_USER_MAP.with(|map| map.borrow_mut().get(&principal)) {
        Some(mut notification_data) => {
            // Get the specific notification matching the notification_id
            let specific_user_notification = notification_data
                .notifications
                .iter()
                .filter(|data| data.contains_key(&notification_id))
                .next();

            let unread_notifications_size = notification_data
                .notifications
                .iter()
                .map(|data| data.values().next())
                .filter(|data| data.is_some() && !data.unwrap().has_read)
                .collect::<Vec<_>>()
                .len();

            // Return error if nothing was found matching the ID or the hashmap is empty (which isn't supposed to happen btw)
            if specific_user_notification.is_none()
                || specific_user_notification.unwrap().is_empty()
            {
                NotificationForSingleUserResponse::Err(Error {
                    message: INVALID_NOTIFICATION_ID.to_string(),
                })
            } else {
                // Update the storage
                if let Some(selected_notification) =
                    specific_user_notification.unwrap().get(&notification_id)
                {
                    let new_single_notification_payload = IndividualNotificationForSingleUser {
                        has_read: true,
                        ..selected_notification.clone()
                    };

                    let index_of_target_notification =
                        notification_data.notifications.iter().position(|data| {
                            data.clone().into_keys().collect::<Vec<_>>()[0] == notification_id
                        });

                    if index_of_target_notification.is_none() {
                        ic_cdk::api::print(
                            "An error has occured while updating notifications.\
                        The index for replacement does not exist \
                        Check service/notifications/notification_for_single_user.rs",
                        );
                        NotificationForSingleUserResponse::Err(Error {
                            message: SOMETHING_WENT_WRONG.to_string(),
                        })
                    } else {
                        let mut new_payload_hashmap =
                            HashMap::<String, IndividualNotificationForSingleUser>::new();
                        new_payload_hashmap
                            .insert(notification_id, new_single_notification_payload.clone());
                        notification_data.notifications[index_of_target_notification.unwrap()] =
                            new_payload_hashmap;

                        let new_full_notification = NotificationForSingleUser {
                            has_read: if unread_notifications_size > 1 {
                                false
                            } else {
                                true
                            },
                            notifications: notification_data.notifications,
                        };

                        NOTIFICATION_FOR_SINGLE_USER_MAP
                            .with(|map| map.borrow_mut().insert(principal, new_full_notification));

                        NotificationForSingleUserResponse::Ok(
                            NotificationForSingleUserResponseOk::NotificationForSingleUser(
                                new_single_notification_payload,
                            ),
                        )
                    }
                } else {
                    NotificationForSingleUserResponse::Err(Error {
                        message: INVALID_NOTIFICATION_ID.to_string(),
                    })
                }
            }
        }

        None => NotificationForSingleUserResponse::Err(Error {
            message: NO_USER_FOUND.to_string(),
        }),
    }
}
