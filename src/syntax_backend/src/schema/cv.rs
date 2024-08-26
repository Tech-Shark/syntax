use std::borrow::Cow;
use std::collections::HashMap;
use serde::{Serialize, Deserialize};

use candid::{CandidType, Decode, Encode};
use ic_stable_structures::storable::{Bound, Storable};

const MAX_VALUE_SIZE: u32 = 1000000;

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct CVUserInput {
    pub job_title: String,
    pub job_description: String,
    pub cv_text: String,
}

impl Storable for CVUserInput {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: MAX_VALUE_SIZE, // Adjust according to your needs
        is_fixed_size: false,
    };
}

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct AnalysisResult {
    pub skills: String,
    pub work_experience: String,
    pub professional_summary: String,
}

impl Storable for AnalysisResult {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: MAX_VALUE_SIZE, // Adjust according to your needs
        is_fixed_size: false,
    };
}

#[derive(CandidType, Deserialize, Debug, Clone)]
pub struct CVAnalysis {
    pub idx: String,
    pub identity: String,
    pub request: CVUserInput,
    pub result: AnalysisResult,
}

impl Storable for CVAnalysis {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap())
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap()
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: MAX_VALUE_SIZE, // Adjust according to your needs
        is_fixed_size: false,
    };
}

// Wrapper struct for Vec<CVAnalysis>
#[derive(CandidType, Deserialize, Debug, Clone)]
pub struct CVAnalysisMap {
    pub analyses: HashMap<String, CVAnalysis>,
}

// Implement Storable for CVAnalysisList
impl Storable for CVAnalysisMap {
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
#[derive(CandidType, Deserialize, Debug, Clone)]
pub struct CVAnalysisResponse {
    pub idx: String,
    pub request: CVUserInput,
    pub result: AnalysisResult,
}

#[derive(CandidType, Deserialize)]
pub struct Error {
    pub message: String,
}

#[derive(CandidType, Deserialize)]
pub enum CVResponse {
    Ok(CVAnalysisResponse),
    Err(Error),
}

