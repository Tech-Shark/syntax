use crate::service::util::get_current_time;
use candid::{CandidType, Decode, Encode};
use ic_stable_structures::storable::{Bound, Storable};
use serde::{Deserialize, Serialize};
use std::borrow::Cow;

const MAX_VALUE_SIZE: u32 = 1000000;
pub const SETTING_KEY: &str = "Settings";

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct Setting {
    pub max_freemium_users: SettingValue<u64>,
    pub password: SettingValue<String>,
}

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct SettingValue<T> {
    pub value: T,
    pub modified_by: Option<String>,
    pub modified_at: Option<String>,
}

impl Default for Setting {
    fn default() -> Self {
        let time = get_current_time().to_string();
        Self {
            max_freemium_users: SettingValue {
                value: 100,
                modified_at: Some(time.clone()),
                modified_by: Some("Config created by default at runtime".to_string()),
            },
            password: SettingValue {
                value: "12345".to_string(),
                modified_at: Some(time.clone()),
                modified_by: Some("Config created by default at runtime".to_string()),
            },
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
pub struct Error {
    pub message: String,
}

#[derive(CandidType, Deserialize)]
pub enum SettingResponse {
    Ok(Setting),
    Err(Error),
}
