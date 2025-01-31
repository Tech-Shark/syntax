use candid::{CandidType, Decode, Encode};
use ic_stable_structures::storable::{Bound, Storable};
use serde::{Deserialize, Serialize};
use std::borrow::Cow;

const MAX_VALUE_SIZE: u32 = 1000000;
pub const SETTING_KEY: &str = "Settings";

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct Setting {
    pub max_freemium_users: u64,
    pub password: String,
    pub paystack_secret: Option<String>,
}

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct SettingInput {
    pub max_freemium_users: Option<u64>,
    pub password: Option<String>,
    pub paystack_secret: Option<String>,
}

impl Default for Setting {
    fn default() -> Self {
        Self {
            max_freemium_users: 100,
            password: "12345".to_string(),
            paystack_secret: None,
        }
    }
}

impl Storable for Setting {
    fn to_bytes(&self) -> Cow<[u8]> {
        match Encode!(self) {
            Ok(bytes) => Cow::Owned(bytes),
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to encode Setting: {} \nSelf is: {:#?}",
                    err, &self
                ));
                panic!("Encoding Setting failed");
            }
        }
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        match Decode!(bytes.as_ref(), Self) {
            Ok(user) => user,
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to decode Setting: {} \nBytes is: {:#?}",
                    err, &bytes
                ));
                panic!("Decoding Setting failed");
            }
        }
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: MAX_VALUE_SIZE,
        is_fixed_size: false,
    };
}

#[derive(CandidType, Deserialize)]
pub enum SettingResponseOk {
    Message(String),
    Setting(Setting),
}

#[derive(CandidType, Deserialize)]
pub struct Error {
    pub message: String,
}

#[derive(CandidType, Deserialize)]
pub enum SettingResponse {
    Ok(SettingResponseOk),
    Err(Error),
}
