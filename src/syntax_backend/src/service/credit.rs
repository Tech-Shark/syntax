use crate::schema::credit::{Credit, CreditResponse, Error, NO_CREDIT_PLAN_FOUND};
use ic_stable_structures::{DefaultMemoryImpl, StableBTreeMap};
use std::cell::RefCell;

thread_local! {
    static CREDIT_MAP: RefCell<StableBTreeMap<String, Credit, DefaultMemoryImpl>> = RefCell::new(
        StableBTreeMap::init(DefaultMemoryImpl::default())
    );
}

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
async fn add_single_credit_plan(plan: String, credit: u16) -> CreditResponse {
    let updated_data = Credit {
        name: Some(plan.clone()),
        value: Some(credit),
    };

    CREDIT_MAP.with(|map| map.borrow_mut().insert(plan, updated_data.clone()));

    CreditResponse::Ok(updated_data)
}

#[ic_cdk::update]
async fn update_single_credit_plan(plan: String, credit: u16) -> CreditResponse {
    match CREDIT_MAP.with(|map| map.borrow().get(&plan)) {
        None => CreditResponse::Err(Error {
            message: NO_CREDIT_PLAN_FOUND.to_string(),
        }),

        Some(data) => {
            let updated_data = Credit {
                value: Some(credit),
                ..data
            };

            match CREDIT_MAP.with(|map| map.borrow_mut().insert(plan, updated_data.clone())) {
                None => CreditResponse::Err(Error {
                    message: NO_CREDIT_PLAN_FOUND.to_string(),
                }),

                Some(_) => CreditResponse::Ok(updated_data),
            }
        }
    }
}

#[ic_cdk::update]
async fn delete_single_credit_plan(plan: String) -> CreditResponse {
    match CREDIT_MAP.with(|map| map.borrow_mut().remove(&plan)) {
        None => CreditResponse::Err(Error {
            message: NO_CREDIT_PLAN_FOUND.to_string(),
        }),

        Some(data) => CreditResponse::Ok(data),
    }
}
