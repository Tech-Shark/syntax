use super::util::{generate_random_string, load_default_setting_on_admin};
use crate::{
    schema::{
        admin::{
            Admin, AdminAuthResponse, AdminInput, AdminPlan, AdminResponse, Error,
            ID_GENERATION_FAILED, INVALID_AUTH, NO_ADMIN_FOUND,
        },
        setting::SETTING_KEY,
    },
    storage::thread_local::{
        ADMIN_MAP, CREDIT_MAP, CV_STORAGE_MAP, GRAMMAR_MAP, SETTING_MAP, USER_MAP,
    },
};

#[ic_cdk::query]
async fn get_all_admin_profile() -> Vec<Admin> {
    let res: Vec<Admin> = ADMIN_MAP.with(|map| {
        map.borrow()
            .iter()
            .map(|(_, value)| value)
            .collect::<Vec<Admin>>()
    });

    if res.len() < 1 {
        vec![]
    } else {
        res
    }
}

#[ic_cdk::query]
async fn get_single_admin(principal: String) -> AdminResponse {
    match ADMIN_MAP.with(|map| map.borrow().get(&principal)) {
        Some(data) => AdminResponse::Ok(data),
        None => AdminResponse::Err(Error {
            message: NO_ADMIN_FOUND.to_string(),
        }),
    }
}

#[ic_cdk::update]
async fn add_new_admin(_profile: AdminInput) -> AdminResponse {
    let admin_id: Option<String> = generate_random_string().await;

    if admin_id.is_none() {
        return AdminResponse::Err(Error {
            message: ID_GENERATION_FAILED.to_string(),
        });
    }

    let admin_profile = Admin {
        id: admin_id.clone().unwrap(),
        other: AdminInput {
            bio: None,
            plan: Some(AdminPlan::READ),
        },
    };

    ADMIN_MAP.with(|map| {
        map.borrow_mut()
            .insert(admin_id.unwrap(), admin_profile.clone())
    });

    AdminResponse::Ok(admin_profile)
}

#[ic_cdk::update]
async fn update_admin(principal: String, profile: AdminInput) -> AdminResponse {
    match ADMIN_MAP.with(|map| map.borrow().get(&principal)) {
        Some(data) => {
            let updated_data = Admin {
                other: AdminInput {
                    plan: profile.plan.or_else(|| Some(AdminPlan::READ)),
                    bio: profile.bio,
                },
                ..data
            };

            match ADMIN_MAP.with(|map| map.borrow_mut().insert(principal, updated_data.clone())) {
                None => AdminResponse::Err(Error {
                    message: NO_ADMIN_FOUND.to_string(),
                }),
                Some(_) => AdminResponse::Ok(updated_data),
            }
        }
        None => AdminResponse::Err(Error {
            message: NO_ADMIN_FOUND.to_string(),
        }),
    }
}

/* -------------------------------------------------------------------------- */
/*                                      -                                     */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                               Clear Data Map                               */
/* -------------------------------------------------------------------------- */
/* -------------------------------------------------------------------------- */
/*                                      -                                     */
/* -------------------------------------------------------------------------- */

#[ic_cdk::update]
async fn remove_all_user(pwd: String) -> AdminAuthResponse {
    match SETTING_MAP.with(|map| map.borrow().get(&SETTING_KEY.to_string())) {
        None => load_default_setting_on_admin(),

        Some(data) => {
            if data.password.value != pwd {
                AdminAuthResponse::Err(Error {
                    message: INVALID_AUTH.to_string(),
                })
            } else {
                USER_MAP.with(|map| map.borrow_mut().clear_new());

                AdminAuthResponse::Ok("User map has been cleared!".to_string())
            }
        }
    }
}

#[ic_cdk::update]
async fn remove_all_credit(pwd: String) -> AdminAuthResponse {
    match SETTING_MAP.with(|map| map.borrow().get(&SETTING_KEY.to_string())) {
        None => load_default_setting_on_admin(),

        Some(data) => {
            if data.password.value != pwd {
                AdminAuthResponse::Err(Error {
                    message: INVALID_AUTH.to_string(),
                })
            } else {
                CREDIT_MAP.with(|map| map.borrow_mut().clear_new());

                AdminAuthResponse::Ok("Credit map has been cleared!".to_string())
            }
        }
    }
}

#[ic_cdk::update]
async fn remove_all_cv_analysis(pwd: String) -> AdminAuthResponse {
    match SETTING_MAP.with(|map| map.borrow().get(&SETTING_KEY.to_string())) {
        None => load_default_setting_on_admin(),

        Some(data) => {
            if data.password.value != pwd {
                AdminAuthResponse::Err(Error {
                    message: INVALID_AUTH.to_string(),
                })
            } else {
                CV_STORAGE_MAP.with(|map| map.borrow_mut().clear_new());

                AdminAuthResponse::Ok("CV Analysis map has been cleared!".to_string())
            }
        }
    }
}

#[ic_cdk::update]
async fn remove_all_grammar(pwd: String) -> AdminAuthResponse {
    match SETTING_MAP.with(|map| map.borrow().get(&SETTING_KEY.to_string())) {
        None => load_default_setting_on_admin(),

        Some(data) => {
            if data.password.value != pwd {
                AdminAuthResponse::Err(Error {
                    message: INVALID_AUTH.to_string(),
                })
            } else {
                GRAMMAR_MAP.with(|map| map.borrow_mut().clear_new());

                AdminAuthResponse::Ok("Grammar map has been cleared!".to_string())
            }
        }
    }
}
