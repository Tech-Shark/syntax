use candid::{CandidType, Decode, Deserialize, Encode, Principal};
use ic_stable_structures::storable::{Bound, Storable};
use std::borrow::Cow;

const MAX_VALUE_SIZE: u32 = 1000;

#[derive(CandidType, Deserialize, Debug, Clone)]
pub struct UserInput {
    pub name: String,
    pub job_title: String,
    pub experience_years: u32,
    pub skills: Vec<String>,
    pub current_role: String,
    pub job_description: String,
    pub cv_text: String,
}

impl Storable for UserInput {
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
pub struct AnalysisResult {
    pub cv_analysis: String,
    pub error_highlights: Vec<String>,
    pub suggestions: Vec<String>,
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
    pub identity: Principal,
    pub request: UserInput,
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
pub struct CVAnalysisList {
    pub analyses: Vec<CVAnalysis>,
}

// Implement Storable for CVAnalysisList
impl Storable for CVAnalysisList {
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
    pub request: UserInput,
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

