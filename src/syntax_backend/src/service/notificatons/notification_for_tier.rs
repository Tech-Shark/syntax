use super::super::util::{generate_random_string, get_current_time};
use crate::{
    schema::{
        notifications::notification_for_tier::{
            Error, NotificationForTier, NotificationForTierInput, NotificationForTierResponse,
            NotificationForTierResponseOk, ID_GENERATION_FAILED,
        },
        user::{FREE_PLAN, NO_USER_FOUND},
    },
    storage::thread_local::{
        NOTIFICATION_FOR_FREEMIUM_MAP, NOTIFICATION_FOR_PREMIUM_MAP, USER_MAP,
    },
};

#[ic_cdk::query]
async fn get_all_notification_for_tier() -> NotificationForTierResponse<Vec<NotificationForTier>> {
    let principal = ic_cdk::api::caller().to_text();
    let user_current_plan = USER_MAP.with(|map| map.borrow().get(&principal));

    if user_current_plan.is_none() {
        return NotificationForTierResponse::Err(Error {
            message: NO_USER_FOUND.to_string(),
        });
    }

    if user_current_plan.unwrap().other.plan == FREE_PLAN {
        let query = NOTIFICATION_FOR_FREEMIUM_MAP.with(|map| {
            map.borrow()
                .iter()
                .map(|(_, value)| value)
                .collect::<Vec<NotificationForTier>>()
        });

        NotificationForTierResponse::Ok(NotificationForTierResponseOk::NotificationForTier(query))
    } else {
        let query = NOTIFICATION_FOR_PREMIUM_MAP.with(|map| {
            map.borrow()
                .iter()
                .map(|(_, value)| value)
                .collect::<Vec<NotificationForTier>>()
        });

        NotificationForTierResponse::Ok(NotificationForTierResponseOk::NotificationForTier(query))
    }
}
#[ic_cdk::update]
async fn add_new_notification_for_tier(
    payload: NotificationForTierInput,
) -> NotificationForTierResponse {
    let id = generate_random_string().await;
    let target_tier = if payload.for_freemium {
        "FREEMIUM"
    } else {
        "PREMIUM"
    };

    // Return error if no ID could be generated
    if id.is_none() {
        return NotificationForTierResponse::Err({
            Error {
                message: ID_GENERATION_FAILED.to_string(),
            }
        });
    }

    let notification_data = NotificationForTier {
        id: id.clone().unwrap(),
        title: payload.title,
        body: payload.body,
        category: payload.category,
        date_created: get_current_time().to_string(),
    };

    if payload.for_freemium {
        NOTIFICATION_FOR_FREEMIUM_MAP
            .with(|map| map.borrow_mut().insert(id.unwrap(), notification_data));
    } else {
        NOTIFICATION_FOR_PREMIUM_MAP
            .with(|map| map.borrow_mut().insert(id.unwrap(), notification_data));
    }

    NotificationForTierResponse::Ok(NotificationForTierResponseOk::Message(format!(
        "Notification has been sent to everyone in {target_tier} successfully!"
    )))
}
