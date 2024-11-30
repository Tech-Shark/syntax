use candid::{CandidType, Decode, Encode};
use ic_stable_structures::storable::{Bound, Storable};
use serde::{Deserialize, Serialize};
use std::borrow::Cow;

const MAX_VALUE_SIZE: u32 = 1000000;
pub const NO_CREDIT_PLAN_FOUND: &str = "No credit plan was found!";
pub const INSUFFICIENT_CREDIT: &str = "No enough credit to perform this operation!";
pub const INVALID_CREDIT_PLAN: &str = "Invalid credit plan!";

#[derive(Serialize, Deserialize, CandidType, Debug, Clone)]
pub struct Credit {
    pub name: Option<String>,
    pub value: Option<u64>,
}

impl Storable for Credit {
    fn to_bytes(&self) -> Cow<[u8]> {
        match Encode!(self) {
            Ok(bytes) => Cow::Owned(bytes),
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to encode Credit: {} \nSelf is: {:#?}",
                    err, &self
                ));
                panic!("Encoding Credit failed");
            }
        }
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        match Decode!(bytes.as_ref(), Self) {
            Ok(user) => user,
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to decode Credit: {} \nBytes is: {:#?}",
                    err, &bytes
                ));
                panic!("Decoding Credit failed");
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
pub enum CreditResponseOk {
    Message(String),
    Credit(Credit),
}

#[derive(CandidType, Deserialize)]
pub enum CreditResponse {
    Ok(CreditResponseOk),
    Err(Error),
}
