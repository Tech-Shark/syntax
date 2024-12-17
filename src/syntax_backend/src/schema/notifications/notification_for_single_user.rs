use candid::{CandidType, Decode, Encode};
use ic_stable_structures::storable::{Bound, Storable};
use serde::{Deserialize, Serialize};
use std::{borrow::Cow, collections::HashMap};

const MAX_VALUE_SIZE: u32 = 1000000;
pub const ID_GENERATION_FAILED: &str =
    "There was an error while generating the ID for this notification!";
pub const INVALID_NOTIFICATION_ID: &str = "No notification with this ID was found!";

#[derive(Serialize, Deserialize, CandidType, Debug, Clone)]
pub struct NotificationForSingleUser {
    pub has_read: bool,
    pub notifications: Vec<HashMap<String, IndividualNotificationForSingleUser>>,
}

impl Storable for NotificationForSingleUser {
    fn to_bytes(&self) -> Cow<[u8]> {
        match Encode!(self) {
            Ok(bytes) => Cow::Owned(bytes),
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to encode NotificationForSingleUser: {} \nSelf is: {:#?}",
                    err, &self
                ));
                panic!("Encoding NotificationForSingleUser failed");
            }
        }
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        match Decode!(bytes.as_ref(), Self) {
            Ok(user) => user,
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to decode NotificationForSingleUser: {} \nBytes is: {:#?}",
                    err, &bytes
                ));
                panic!("Decoding NotificationForSingleUser failed");
            }
        }
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: MAX_VALUE_SIZE,
        is_fixed_size: false,
    };
}

#[derive(Serialize, Deserialize, CandidType, Debug, Clone)]
pub struct IndividualNotificationForSingleUser {
    pub id: String,
    pub title: String,
    pub body: String,
    pub date_created: String,
    pub has_read: bool,
    pub category: Option<String>,
}

#[derive(Serialize, Deserialize, CandidType, Debug, Clone)]
pub struct NotificationForSingleUserInput {
    pub title: String,
    pub body: String,
    pub category: Option<String>,
}

#[derive(CandidType, Deserialize)]
pub struct Error {
    pub message: String,
}

#[derive(CandidType, Deserialize)]
pub enum NotificationForSingleUserResponseOk<T = NotificationForSingleUser> {
    Message(String),
    NotificationForSingleUser(T),
}

#[derive(CandidType, Deserialize)]
pub enum NotificationForSingleUserResponse<T = NotificationForSingleUser> {
    Ok(NotificationForSingleUserResponseOk<T>),
    Err(Error),
}
