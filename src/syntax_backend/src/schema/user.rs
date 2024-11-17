use candid::{CandidType, Decode, Encode};
use ic_stable_structures::storable::{Bound, Storable};
use serde::{Deserialize, Serialize};
use std::borrow::Cow;

const MAX_VALUE_SIZE: u32 = 1000000;
pub const NO_USER_FOUND: &str = "No user with this ID was found!";
pub const ID_GENERATION_FAILED: &str = "There was an error while generating the ID for this user!";

#[derive(Serialize, Deserialize, CandidType, Debug, Clone)]
pub enum UserPlan {
    FREE,
    PREMIUM,
}

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct User {
    pub id: String,
    pub plan: UserPlan,
    pub cv_last_checked: Option<String>,
    pub other: UserInput,
}

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct UserInput {
    pub name: Option<String>,
    pub bio: Option<String>,
}

impl Storable for User {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
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
pub enum UserResponse {
    Ok(User),
    Err(Error),
}
