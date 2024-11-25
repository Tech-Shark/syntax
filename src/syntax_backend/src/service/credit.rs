use crate::{
    schema::{
        admin::INVALID_AUTH,
        credit::{Credit, CreditResponse, CreditResponseOk, Error, NO_CREDIT_PLAN_FOUND},
        setting::SETTING_KEY,
    },
    storage::thread_local::{CREDIT_MAP, SETTING_MAP},
};

use super::util::load_default_setting;

#[ic_cdk::query]
async fn get_all_credit_plan() -> Vec<Credit> {
    let res: Vec<Credit> = CREDIT_MAP.with(|map| {
        map.borrow()
            .iter()
            .map(|(_, value)| value)
            .collect::<Vec<Credit>>()
    });

    res
}

#[ic_cdk::update]
async fn add_single_credit_plan(plan: String, credit: u16, pwd: String) -> CreditResponse {
    match SETTING_MAP.with(|map| map.borrow().get(&SETTING_KEY.to_string())) {
        None => CreditResponse::Err(Error {
            message: load_default_setting(),
        }),

        Some(config) => {
            if config.password.value != pwd {
                CreditResponse::Err(Error {
                    message: INVALID_AUTH.to_string(),
                })
            } else {
                let updated_data = Credit {
                    name: Some(plan.clone()),
                    value: Some(credit),
                };

                CREDIT_MAP.with(|map| map.borrow_mut().insert(plan, updated_data.clone()));

                CreditResponse::Ok(CreditResponseOk::Credit(updated_data))
            }
        }
    }
}

#[ic_cdk::update]
async fn update_single_credit_plan(plan: String, credit: u16, pwd: String) -> CreditResponse {
    match SETTING_MAP.with(|map| map.borrow().get(&SETTING_KEY.to_string())) {
        None => CreditResponse::Err(Error {
            message: load_default_setting(),
        }),

        Some(config) => {
            if config.password.value != pwd {
                CreditResponse::Err(Error {
                    message: INVALID_AUTH.to_string(),
                })
            } else {
                match CREDIT_MAP.with(|map| map.borrow().get(&plan)) {
                    None => CreditResponse::Err(Error {
                        message: NO_CREDIT_PLAN_FOUND.to_string(),
                    }),

                    Some(data) => {
                        let updated_data = Credit {
                            value: Some(credit),
                            ..data
                        };

                        CREDIT_MAP.with(|map| map.borrow_mut().insert(plan, updated_data.clone()));

                        CreditResponse::Ok(CreditResponseOk::Credit(updated_data))
                    }
                }
            }
        }
    }
}

#[ic_cdk::update]
async fn delete_single_credit_plan(plan: String, pwd: String) -> CreditResponse {
    match SETTING_MAP.with(|map| map.borrow().get(&SETTING_KEY.to_string())) {
        None => CreditResponse::Err(Error {
            message: load_default_setting(),
        }),

        Some(config) => {
            if config.password.value != pwd {
                CreditResponse::Err(Error {
                    message: INVALID_AUTH.to_string(),
                })
            } else {
                match CREDIT_MAP.with(|map| map.borrow_mut().remove(&plan)) {
                    None => CreditResponse::Err(Error {
                        message: NO_CREDIT_PLAN_FOUND.to_string(),
                    }),

                    Some(data) => CreditResponse::Ok(CreditResponseOk::Credit(data)),
                }
            }
        }
    }
}
