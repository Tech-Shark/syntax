use ic_cdk::post_upgrade;
use ic_cdk_macros::init;

use crate::schema::{
    credit::Credit,
    setting::{Setting, SETTING_KEY},
    user::FREE_PLAN,
};

use super::thread_local::{CREDIT_MAP, CV_STORAGE_MAP, GRAMMAR_MAP, SETTING_MAP, USER_MAP};

fn reset_credit() {
    let updated_data = Credit {
        name: Some(FREE_PLAN.to_string()),
        value: Some(0),
    };

    CREDIT_MAP.with(|map| map.borrow_mut().insert(FREE_PLAN.to_string(), updated_data));
}

fn clear_maps() {
    ic_cdk::api::print(format!("Clearing cv map...",));
    CV_STORAGE_MAP.with(|map| map.borrow_mut().clear_new());
    ic_cdk::api::print(format!("Cleared cv map",));

    ic_cdk::api::print(format!("Clearing user map...",));
    USER_MAP.with(|map| map.borrow_mut().clear_new());
    ic_cdk::api::print(format!("Cleared user map",));

    ic_cdk::api::print(format!("Clearing grammar map...",));
    GRAMMAR_MAP.with(|map| map.borrow_mut().clear_new());
    ic_cdk::api::print(format!("Cleared grammar map",));
}

#[init]
fn init() {
    ic_cdk::api::print(format!("Initializing canister..."));

    ic_cdk::api::print(format!("Adding {:#?} to list of credit plans", FREE_PLAN));
    reset_credit();
    ic_cdk::api::print(format!("Added {:#?} to list of credit plans", FREE_PLAN));

    clear_maps();

    SETTING_MAP.with(|map| {
        map.borrow_mut()
            .insert(SETTING_KEY.to_string(), Setting::default())
    });

    ic_cdk::api::print(format!("Finished initializing canister."));
}

#[post_upgrade]
fn post_upgrade() {
    ic_cdk::api::print(format!("Re initializing canister..."));

    ic_cdk::api::print(format!("Adding {:#?} to list of credit plans", FREE_PLAN));
    reset_credit();
    ic_cdk::api::print(format!("Added {:#?} to list of credit plans", FREE_PLAN));

    clear_maps();

    SETTING_MAP.with(|map| {
        map.borrow_mut()
            .insert(SETTING_KEY.to_string(), Setting::default())
    });

    ic_cdk::api::print(format!("Finished re initializing canister."));
}
