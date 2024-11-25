use super::util::{
    generate_random_string, map_biodata_for_add_new_user, map_biodata_for_update_user,
};
use crate::{
    schema::{
        credit::NO_CREDIT_PLAN_FOUND,
        setting::SETTING_KEY,
        user::{
            Error, User, UserInput, UserResponse, FREE_PLAN, ID_GENERATION_FAILED, NO_USER_FOUND,
        },
    },
    storage::thread_local::{CREDIT_MAP, SETTING_MAP, USER_MAP},
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
    let input_tier = profile.clone().plan;

    let total_users = USER_MAP.with(|map| {
        map.borrow()
            .iter()
            .filter(|(_, user)| user.other.plan == FREE_PLAN)
            .collect::<Vec<(String, User)>>()
            .len() as u64
    });

    let setting = SETTING_MAP.with(|map| {
        map.borrow()
            .get(&SETTING_KEY.to_string())
            .unwrap_or_default()
    });

    let valid_tier = CREDIT_MAP
        .with(|map| {
            map.borrow()
                .iter()
                .map(|(_, value)| value.name.unwrap())
                .collect::<Vec<String>>()
        })
        .contains(&input_tier);

    if !valid_tier {
        return UserResponse::Err(Error {
            message: NO_CREDIT_PLAN_FOUND.to_string(),
        });
    }

    if (total_users >= setting.max_freemium_users.value) && (input_tier == FREE_PLAN) {
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
        cv_last_checked: None,
        amount_of_credits: 0,
        other: UserInput {
            bio: map_biodata_for_add_new_user(profile.clone()),
            plan: FREE_PLAN.to_string(),
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
    let input_tier = profile.clone().plan;

    let valid_tier = CREDIT_MAP
        .with(|map| {
            map.borrow()
                .iter()
                .map(|(_, value)| value.name.unwrap())
                .collect::<Vec<String>>()
        })
        .contains(&input_tier);

    if !valid_tier {
        return UserResponse::Err(Error {
            message: NO_CREDIT_PLAN_FOUND.to_string(),
        });
    }

    match USER_MAP.with(|map| map.borrow().get(&principal)) {
        Some(data) => {
            let updated_data = User {
                other: UserInput {
                    plan: input_tier,
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
