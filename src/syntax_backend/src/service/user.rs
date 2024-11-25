use super::util::{
    generate_random_string, map_biodata_for_add_new_user, map_biodata_for_update_user,
};
use crate::{
    schema::{
        setting::SETTING_KEY,
        user::{
            Error, User, UserInput, UserPlan, UserResponse, ID_GENERATION_FAILED, NO_USER_FOUND,
        },
    },
    storage::thread_local::{SETTING_MAP, USER_MAP},
};

#[ic_cdk::query]
async fn get_all_user_profile() -> Vec<User> {
    let res: Vec<User> = USER_MAP.with(|map| {
        map.borrow()
            .iter()
            .map(|(_, value)| value)
            .collect::<Vec<User>>()
    });

    if res.len() < 1 {
        vec![]
    } else {
        res
    }
}

#[ic_cdk::query]
async fn get_single_user(principal: String) -> UserResponse {
    match USER_MAP.with(|map| map.borrow().get(&principal)) {
        Some(data) => UserResponse::Ok(data),
        None => UserResponse::Err(Error {
            message: NO_USER_FOUND.to_string(),
        }),
    }
}

#[ic_cdk::update]
async fn add_new_user(profile: UserInput) -> UserResponse {
    let total_users: u64 = USER_MAP.with(|map| map.borrow().len());
    let setting = SETTING_MAP.with(|map| {
        map.borrow()
            .get(&SETTING_KEY.to_string())
            .unwrap_or_default()
    });

    if total_users >= setting.max_freemium_users.value {
        return UserResponse::Err(Error {
            message: "Maximum number of users on the free plan has been exhausted!".to_string(),
        });
    }

    let user_id: Option<String> = generate_random_string().await;

    if user_id.is_none() {
        return UserResponse::Err(Error {
            message: ID_GENERATION_FAILED.to_string(),
        });
    }

    let user_profile = User {
        id: user_id.clone().unwrap(),
        plan: UserPlan::FREE,
        cv_last_checked: None,
        other: UserInput {
            bio: map_biodata_for_add_new_user(profile.clone()),
        },
    };

    USER_MAP.with(|map| {
        map.borrow_mut()
            .insert(user_id.unwrap(), user_profile.clone())
    });

    UserResponse::Ok(user_profile)
}

#[ic_cdk::update]
async fn update_user(principal: String, profile: UserInput) -> UserResponse {
    match USER_MAP.with(|map| map.borrow().get(&principal)) {
        Some(data) => {
            let updated_data = User {
                other: UserInput {
                    bio: map_biodata_for_update_user(profile, data.clone()),
                },
                ..data
            };

            match USER_MAP.with(|map| map.borrow_mut().insert(principal, updated_data.clone())) {
                None => UserResponse::Err(Error {
                    message: NO_USER_FOUND.to_string(),
                }),
                Some(_) => UserResponse::Ok(updated_data),
            }
        }
        None => UserResponse::Err(Error {
            message: NO_USER_FOUND.to_string(),
        }),
    }
}
