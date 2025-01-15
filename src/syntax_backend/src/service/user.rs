use super::util::{map_biodata_for_add_new_user, map_biodata_for_update_user, plan_is_valid};
use crate::{
    schema::{
        credit::INVALID_CREDIT_PLAN,
        setting::SETTING_KEY,
        user::{Error, User, UserInput, UserResponse, FREE_PLAN, NO_USER_FOUND},
    },
    storage::thread_local::{ADMIN_MAP, CREDIT_MAP, SETTING_MAP, USER_MAP},
};

#[ic_cdk::query]
async fn get_all_user_profile() -> Vec<User> {
    let res: Vec<User> = USER_MAP.with(|map| {
        map.borrow()
            .iter()
            .map(|(_, value)| value)
            .collect::<Vec<User>>()
    });

    res
}

#[ic_cdk::query]
async fn get_single_user() -> UserResponse {
    let principal = ic_cdk::api::caller().to_text();

    match USER_MAP.with(|map| map.borrow().get(&principal)) {
        Some(data) => UserResponse::Ok(data),
        None => UserResponse::Err(Error {
            message: NO_USER_FOUND.to_string(),
        }),
    }
}

#[ic_cdk::update]
async fn add_new_user(profile: UserInput) -> UserResponse {
    let principal = ic_cdk::api::caller().to_text();
    let input_tier = profile.clone().plan;
    let valid_tier = plan_is_valid(&input_tier);

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

    if !valid_tier {
        return UserResponse::Err(Error {
            message: INVALID_CREDIT_PLAN.to_string(),
        });
    }

    if let Some(_user) = USER_MAP.with(|map| map.borrow().get(&principal)) {
        return UserResponse::Err(Error {
            message: "You already have a registered profile!".to_string(),
        });
    }

    // Check if there's still slot for FREEMIUM
    if (total_users >= setting.max_freemium_users.value) && (input_tier == FREE_PLAN) {
        return UserResponse::Err(Error {
            message: "Maximum number of users on the free plan has been exhausted!".to_string(),
        });
    }

    let user_profile = User {
        id: principal.clone(),
        cv_last_checked: None,
        amount_of_credits: 0,
        other: UserInput {
            bio: map_biodata_for_add_new_user(profile.clone()),
            plan: input_tier,
        },
    };

    USER_MAP.with(|map| map.borrow_mut().insert(principal, user_profile.clone()));

    UserResponse::Ok(user_profile)
}

#[ic_cdk::update]
async fn update_user(profile: UserInput) -> UserResponse {
    let principal = ic_cdk::api::caller().to_text();
    let input_tier = profile.clone().plan;
    let valid_tier = plan_is_valid(&input_tier);

    if !valid_tier {
        return UserResponse::Err(Error {
            message: INVALID_CREDIT_PLAN.to_string(),
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

#[ic_cdk::update]
async fn add_credits_to_user() -> UserResponse {
    let principal = ic_cdk::api::caller().to_text();

    match USER_MAP.with(|map| map.borrow().get(&principal)) {
        Some(data) => {
            // Get Credits
            match CREDIT_MAP.with(|map| map.borrow().get(&data.other.plan)) {
                None => UserResponse::Err(Error {
                    message: INVALID_CREDIT_PLAN.to_string(),
                }),

                Some(plan) => {
                    let updated_data = User {
                        amount_of_credits: data.amount_of_credits + plan.value.unwrap_or(0),
                        ..data
                    };

                    match USER_MAP
                        .with(|map| map.borrow_mut().insert(principal, updated_data.clone()))
                    {
                        None => UserResponse::Err(Error {
                            message: NO_USER_FOUND.to_string(),
                        }),
                        Some(_) => UserResponse::Ok(updated_data),
                    }
                }
            }
        }
        None => UserResponse::Err(Error {
            message: NO_USER_FOUND.to_string(),
        }),
    }
}

#[ic_cdk::query]
async fn get_users_by_tier(tier: String) -> Vec<User> {
    let valid_tier = if plan_is_valid(&tier) {
        tier
    } else {
        FREE_PLAN.to_string()
    };

    let res: Vec<User> = USER_MAP.with(|map| {
        map.borrow()
            .iter()
            .map(|(_, value)| value)
            .filter(|user| user.other.plan == valid_tier)
            .collect::<Vec<User>>()
    });

    res
}

#[ic_cdk::query]
async fn get_user_role() -> UserResponse<String> {
    let principal = ic_cdk::api::caller().to_text();

    let user = USER_MAP
        .with(|map| {
            map.borrow()
                .iter()
                .map(|(_, value)| value.id)
                .collect::<Vec<String>>()
        })
        .contains(&principal);

    let admin = ADMIN_MAP
        .with(|map| {
            map.borrow()
                .iter()
                .map(|(_, value)| value.id)
                .collect::<Vec<String>>()
        })
        .contains(&principal);

    if user {
        UserResponse::Ok("USER".to_string())
    } else if admin {
        UserResponse::Ok("ADMIN".to_string())
    } else {
        UserResponse::Err(Error {
            message: NO_USER_FOUND.to_string(),
        })
    }
}
