use candid::{CandidType, Decode, Encode};
use serde::{Serialize, Deserialize};
use ic_stable_structures::storable::{Bound, Storable};
use std::borrow::Cow;
use std::collections::HashMap;

const MAX_VALUE_SIZE: u32 = 1000;

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct GrammarUserInput {
    pub text: String,
}

impl Storable for GrammarUserInput {
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
pub struct GrammarCheckResult {
    pub grammatical_errors: String,
    pub syntactic_errors: String,
    pub general_suggestions: String,
    pub rewrite: String,
}

impl Storable for GrammarCheckResult {
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
pub struct GrammarAnalysis {
    pub idx: String,
    pub identity: String,
    pub request: GrammarUserInput,
    pub result: GrammarCheckResult,
}

impl Storable for GrammarAnalysis {
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
pub struct GrammarAnalysisMap {
    pub analyses: HashMap<String, GrammarAnalysis>,
}

// Implement Storable for CVAnalysisList
impl Storable for GrammarAnalysisMap {
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
pub struct GrammarAnalysisResponse {
    pub idx: String,
    pub request: GrammarUserInput,
    pub result: GrammarCheckResult,
}

#[derive(CandidType, Deserialize)]
pub struct Error {
    pub message: String,
}

#[derive(CandidType, Deserialize)]
pub enum GrammarResponse {
    Ok(GrammarAnalysisResponse),
    Err(Error),
}

