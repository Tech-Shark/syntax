use ic_cdk::api::management_canister::http_request::HttpMethod;
use serde::{Deserialize, Serialize};

use crate::{
    schema::{credit::Credit, user::User},
    service::util::get_setting,
    storage::thread_local::{CREDIT_MAP, USER_MAP},
};

use super::{
    paystack_request::interact_with_paystack,
    paystack_schema::{Error, PaystackResponse},
};

#[derive(Serialize, Deserialize, Debug)]
struct PaystackInitData {
    amount: u16,
    email: String,
    user: String,
    metadata: PaystackInitDataMetadata,
}

#[derive(Serialize, Deserialize, Debug)]
struct PaystackInitDataMetadata {
    customer_id: String,
    custom_fields: Vec<PaystackInitDataMetadataCustomField>,
}

#[derive(Serialize, Deserialize, Debug)]
struct PaystackInitDataMetadataCustomField {
    display_name: String,
    variable_name: String,
    value: String,
}

#[ic_cdk::update]
async fn initialise_payment(credit_plan: String) -> PaystackResponse {
    let principal = ic_cdk::api::caller().to_text();
    let endpoint = "/transaction/initialize";
    let request_method: HttpMethod = HttpMethod::POST;

    let user: Option<User> = USER_MAP.with(|map| map.borrow().get(&principal));
    let credit: Option<Credit> = CREDIT_MAP.with(|map| map.borrow().get(&credit_plan));

    // Throw error if no user was found
    if user.is_none() {
        return PaystackResponse::Err(Error {
            message: "This user hasn't registered!".to_string(),
        });
    }

    // Throw error if no valid credit plan was found
    if credit.is_none() {
        return PaystackResponse::Err(Error {
            message: "An invalid credit plan was selected!".to_string(),
        });
    }

    // Handle empty email
    let new_email = if user.clone().is_some() {
        if user.clone().unwrap().other.bio.is_some() {
            user.unwrap().other.bio.unwrap().email
        } else {
            None
        }
    } else {
        None
    };

    let data = PaystackInitData {
        amount: credit.clone().unwrap().price.unwrap_or(1000) * 100,
        user: "".to_string(),
        email: new_email.clone().unwrap_or("".to_string()),
        metadata: PaystackInitDataMetadata {
            customer_id: principal.to_string(),
            custom_fields: vec![
                PaystackInitDataMetadataCustomField {
                    display_name: "Cutomer ID".to_string(),
                    variable_name: "customer_id".to_string(),
                    value: principal.to_string(),
                },
                PaystackInitDataMetadataCustomField {
                    display_name: "Cutomer Email".to_string(),
                    variable_name: new_email.unwrap_or("".to_string()),
                    value: principal.to_string(),
                },
                PaystackInitDataMetadataCustomField {
                    display_name: "Credit".to_string(),
                    variable_name: credit.unwrap().value.unwrap().to_string(),
                    value: principal.to_string(),
                },
            ],
        },
    };

    let setting_data = get_setting();

    if setting_data.is_none() {
        return PaystackResponse::Err(Error {
            message: "No setting was found!".to_string(),
        });
    }

    if setting_data.clone().unwrap().paystack_secret.is_none() {
        return PaystackResponse::Err(Error {
            message: "No paystack token was found!".to_string(),
        });
    }

    let response = match serde_json::to_value(&data) {
        Err(_) => None,
        Ok(json_data) => Some(
            interact_with_paystack(
                json_data,
                endpoint,
                request_method,
                setting_data.unwrap().paystack_secret.unwrap(),
            )
            .await,
        ),
    };

    if response.is_none() {
        return PaystackResponse::Err(Error {
            message: "Something went wrong while initialising transaction!".to_string(),
        });
    }

    match serde_json::from_str(&response.unwrap()) {
        Err(_) => {
            return PaystackResponse::Err(Error {
                message: "Something went wrong while initialising transaction!".to_string(),
            });
        }
        Ok(json_response) => {
            return PaystackResponse::Ok(json_response);
        }
    }
}
