use candid::{CandidType, Decode, Encode};
use ic_stable_structures::storable::{Bound, Storable};
use serde::{Deserialize, Serialize};
use std::borrow::Cow;

const MAX_VALUE_SIZE: u32 = 1000000;
pub const ID_GENERATION_FAILED: &str =
    "There was an error while generating the ID for this notification!";
pub const INVALID_NOTIFICATION_ID: &str = "No notification with this ID was found!";

#[derive(Serialize, Deserialize, CandidType, Debug, Clone)]
pub struct NotificationForEverybody {
    pub id: String,
    pub title: String,
    pub body: String,
    pub date_created: String,
    pub category: Option<String>,
}

impl Storable for NotificationForEverybody {
    fn to_bytes(&self) -> Cow<[u8]> {
        match Encode!(self) {
            Ok(bytes) => Cow::Owned(bytes),
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to encode NotificationForEverybody: {} \nSelf is: {:#?}",
                    err, &self
                ));
                panic!("Encoding NotificationForEverybody failed");
            }
        }
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        match Decode!(bytes.as_ref(), Self) {
            Ok(user) => user,
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to decode NotificationForEverybody: {} \nBytes is: {:#?}",
                    err, &bytes
                ));
                panic!("Decoding NotificationForEverybody failed");
            }
        }
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: MAX_VALUE_SIZE,
        is_fixed_size: false,
    };
}

#[derive(Serialize, Deserialize, CandidType, Debug, Clone)]
pub struct NotificationForEverybodyInput {
    pub title: String,
    pub body: String,
    pub category: Option<String>,
}

#[derive(CandidType, Deserialize)]
pub struct Error {
    pub message: String,
}

#[derive(CandidType, Deserialize)]
pub enum NotificationForEverybodyResponseOk<T = NotificationForEverybody> {
    Message(String),
    NotificationForEverybody(T),
}

#[derive(CandidType, Deserialize)]
pub enum NotificationForEverybodyResponse<T = NotificationForEverybody> {
    Ok(NotificationForEverybodyResponseOk<T>),
    Err(Error),
}
