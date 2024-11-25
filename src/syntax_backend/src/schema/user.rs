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
    pub bio: Option<BioData>,
}

#[derive(CandidType, Serialize, Deserialize, Debug, Clone, Default)]
pub struct BioData {
    pub full_name: Option<String>,      // Full name of the individual
    pub date_of_birth: Option<String>,  // Date of birth in ISO format (e.g., "YYYY-MM-DD")
    pub contact_number: Option<String>, // Phone number
    pub email: Option<String>,          // Email address
    pub address: Option<String>,        // Residential address
    pub nationality: Option<String>,    // Nationality
    pub marital_status: Option<String>, // Marital status (e.g., Single, Married)
    pub linkedin: Option<String>,       // LinkedIn profile URL
    pub github: Option<String>,         // GitHub profile URL
    pub education: Option<String>,      // Education details
    pub summary: Option<String>,        // Short bio or summary
}

impl Storable for User {
    fn to_bytes(&self) -> Cow<[u8]> {
        match Encode!(self) {
            Ok(bytes) => Cow::Owned(bytes),
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to encode User: {} \nSelf is: {:#?}",
                    err, &self
                ));
                panic!("Encoding User failed");
            }
        }
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        match Decode!(bytes.as_ref(), Self) {
            Ok(user) => user,
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to decode User: {} \nBytes is: {:#?}",
                    err, &bytes
                ));
                panic!("Decoding User failed");
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
pub enum UserResponse {
    Ok(User),
    Err(Error),
}
