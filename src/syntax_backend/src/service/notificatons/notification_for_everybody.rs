use super::super::util::{generate_random_string, get_current_time};
use crate::{
    schema::{
        notifications::notification_for_everybody::{
            Error, NotificationForEverybody, NotificationForEverybodyInput,
            NotificationForEverybodyResponse, NotificationForEverybodyResponseOk,
            ID_GENERATION_FAILED,
        },
        user::NO_USER_FOUND,
    },
    storage::thread_local::{NOTIFICATION_FOR_EVERYBODY_MAP, USER_MAP},
};

#[ic_cdk::query]
async fn get_all_notification_for_everybody(
    principal: String,
) -> NotificationForEverybodyResponse<Vec<NotificationForEverybody>> {
    let user = USER_MAP.with(|map| map.borrow().get(&principal));

    if user.is_none() {
        return NotificationForEverybodyResponse::Err(Error {
            message: NO_USER_FOUND.to_string(),
        });
    }

    let query = NOTIFICATION_FOR_EVERYBODY_MAP.with(|map| {
        map.borrow()
            .iter()
            .map(|(_, value)| value)
            .collect::<Vec<NotificationForEverybody>>()
    });

    ic_cdk::api::print(format!("{:#?}", query.clone()));

    NotificationForEverybodyResponse::Ok(
        NotificationForEverybodyResponseOk::NotificationForEverybody(query),
    )
}
#[ic_cdk::update]
async fn add_new_notification_for_everybody(
    payload: NotificationForEverybodyInput,
) -> NotificationForEverybodyResponse {
    let id = generate_random_string().await;

    // Return error if no ID could be generated
    if id.clone().is_none() {
        return NotificationForEverybodyResponse::Err({
            Error {
                message: ID_GENERATION_FAILED.to_string(),
            }
        });
    }

    let notification_data = NotificationForEverybody {
        id: id.clone().unwrap(),
        title: payload.title,
        body: payload.body,
        category: payload.category,
        date_created: get_current_time().to_string(),
    };

    NOTIFICATION_FOR_EVERYBODY_MAP
        .with(|map| map.borrow_mut().insert(id.unwrap(), notification_data));

    NotificationForEverybodyResponse::Ok(NotificationForEverybodyResponseOk::Message(
        "Notification has been sent to everyone successfully!".to_string(),
    ))
}
