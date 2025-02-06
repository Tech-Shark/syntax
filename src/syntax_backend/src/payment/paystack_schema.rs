use candid::{CandidType, Decode, Encode};
use ic_stable_structures::storable::{Bound, Storable};
use serde::{Deserialize, Serialize};
use std::borrow::Cow;

const MAX_VALUE_SIZE: u32 = 1000000;

#[derive(Serialize, Deserialize, CandidType, Debug, Clone)]
pub struct Paystack {
    pub name: Option<String>,
    pub value: Option<u64>,
}

#[derive(CandidType, Deserialize)]
pub struct PaystackInitialiseResponseData {
    pub authorization_url: String,
    pub access_code: String,
    pub reference: String,
}

#[derive(CandidType, Deserialize)]
pub struct PaystackInitialiseResponse {
    pub status: bool,
    pub message: String,
    pub data: PaystackInitialiseResponseData,
}

impl Storable for Paystack {
    fn to_bytes(&self) -> Cow<[u8]> {
        match Encode!(self) {
            Ok(bytes) => Cow::Owned(bytes),
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to encode Paystack: {} \nSelf is: {:#?}",
                    err, &self
                ));
                panic!("Encoding Paystack failed");
            }
        }
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        match Decode!(bytes.as_ref(), Self) {
            Ok(user) => user,
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to decode Paystack: {} \nBytes is: {:#?}",
                    err, &bytes
                ));
                panic!("Decoding Paystack failed");
            }
        }
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: MAX_VALUE_SIZE,
        is_fixed_size: false,
    };
}

#[derive(CandidType, Deserialize)]
pub struct Error {
    pub message: String,
}

#[derive(CandidType, Deserialize)]
pub enum PaystackResponseOk {
    Message(String),
    Paystack(Paystack),
    PaystackInitialiseResponse(PaystackInitialiseResponse),
}

#[derive(CandidType, Deserialize)]
pub enum PaystackResponse {
    Ok(PaystackResponseOk),
    Err(Error),
}
