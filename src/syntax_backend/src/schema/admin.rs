use candid::{CandidType, Decode, Encode};
use ic_stable_structures::storable::{Bound, Storable};
use serde::{Deserialize, Serialize};
use std::borrow::Cow;

const MAX_VALUE_SIZE: u32 = 1000000;
pub const NO_ADMIN_FOUND: &str = "No admin with this ID was found!";
pub const ID_GENERATION_FAILED: &str = "There was an error while generating the ID for this admin!";

#[derive(Serialize, Deserialize, CandidType, Debug, Clone)]
pub enum AdminPlan {
    READ,
    WRITE,
}

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct Admin {
    pub id: String,
    pub other: AdminInput,
}

#[derive(CandidType, Serialize, Deserialize, Debug, Clone, Default)]
pub struct AdminInput {
    pub plan: Option<AdminPlan>,
    pub bio: Option<String>,
}

impl Storable for Admin {
    fn to_bytes(&self) -> Cow<[u8]> {
        match Encode!(self) {
            Ok(bytes) => Cow::Owned(bytes),
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to encode Admin: {} \nSelf is: {:#?}",
                    err, &self
                ));
                panic!("Encoding Admin failed");
            }
        }
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        match Decode!(bytes.as_ref(), Self) {
            Ok(user) => user,
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to decode Admin: {} \nBytes is: {:#?}",
                    err, &bytes
                ));
                panic!("Decoding Admin failed");
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
pub enum AdminResponse {
    Ok(Admin),
    Err(Error),
}
