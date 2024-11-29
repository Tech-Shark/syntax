use ic_cdk_macros::init;

use crate::schema::{credit::Credit, user::FREE_PLAN};

use super::thread_local::CREDIT_MAP;

#[init]
pub fn init() {
    ic_cdk::api::print(format!("Initializing canister..."));

    /* -------------------------------------------------------------------------- */
    /*                                      -                                     */
    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */
    /*                                 CREDIT PLAN                                */
    /* -------------------------------------------------------------------------- */
    /* -------------------------------------------------------------------------- */
    /*                                      -                                     */
    /* -------------------------------------------------------------------------- */

    ic_cdk::api::print(format!("Adding {} to list of credit plans", FREE_PLAN));
    let updated_data = Credit {
        name: Some(FREE_PLAN.to_string()),
        value: Some(0),
    };

    CREDIT_MAP.with(|map| map.borrow_mut().insert(FREE_PLAN.to_string(), updated_data));
    ic_cdk::api::print(format!("Added {:#?} to list of credit plans", FREE_PLAN));
}
