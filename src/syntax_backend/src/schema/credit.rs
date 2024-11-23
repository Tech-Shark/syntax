use candid::{CandidType, Decode, Encode};
use ic_stable_structures::storable::{Bound, Storable};
use serde::{Deserialize, Serialize};
use std::borrow::Cow;

const MAX_VALUE_SIZE: u32 = 1000000;
pub const NO_CREDIT_PLAN_FOUND: &str = "No credit plan was found!";

#[derive(Serialize, Deserialize, CandidType, Debug, Clone)]
pub struct Credit {
    pub name: Option<String>,
    pub value: Option<u16>,
}

impl Storable for Credit {
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
pub enum CreditResponse {
    Ok(Credit),
    Err(Error),
}
