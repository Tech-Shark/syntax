use serde::{Deserialize, Serialize};
use std::borrow::Cow;
use std::collections::HashMap;

use candid::{CandidType, Decode, Encode};
use ic_stable_structures::storable::{Bound, Storable};

const MAX_VALUE_SIZE: u32 = 1000000;

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct CVUserInput {
    pub job_description: String,
    pub cv_text: String,
    pub cv_template: String,
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

// #[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
// pub struct AnalysisResult {
//     pub skills: String,
//     pub work_experience: String,
//     pub professional_summary: String,
// }

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct WorkExperience {
    pub company_name: String,
    pub job_title: String,
    pub duration: String,
    pub duties: Vec<String>, // List of duties
}

impl Storable for WorkExperience {
    fn to_bytes(&self) -> Cow<[u8]> {
        Cow::Owned(Encode!(self).unwrap()) // Correct: Candid encoding
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        Decode!(bytes.as_ref(), Self).unwrap() // Correct: Candid decoding
    }

    const BOUND: Bound = Bound::Bounded {
        max_size: MAX_VALUE_SIZE, // Adjust according to your needs
        is_fixed_size: false,
    };
}

#[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
pub struct AnalysisResult {
    pub work_experience: Vec<WorkExperience>, // Expecting a list of work experiences
    pub skills: Vec<String>, // Expecting a list of skills instead of a single String
    pub professional_summary: String, // Unchanged
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


// #[derive(CandidType, Serialize, Deserialize, Debug, Clone)]
// pub struct CVEnhancer {
//     pub enhanced_cv: String,
//     pub enhanced_ats_score: String,
//     pub interview_prep: String,
// }

// impl Storable for CVEnhancer {
//     fn to_bytes(&self) -> Cow<[u8]> {
//         Cow::Owned(Encode!(self).unwrap())
//     }

//     fn from_bytes(bytes: Cow<[u8]>) -> Self {
//         Decode!(bytes.as_ref(), Self).unwrap()
//     }

//     const BOUND: Bound = Bound::Bounded {
//         max_size: MAX_VALUE_SIZE,
//         is_fixed_size: false,
//     };
// }

#[derive(CandidType, Deserialize, Debug, Clone)]
pub struct CVAnalysis {
    pub idx: String,
    pub identity: String,
    pub request: CVUserInput,
    pub result: AnalysisResult,
}

impl Storable for CVAnalysis {
    fn to_bytes(&self) -> Cow<[u8]> {
        match Encode!(self) {
            Ok(bytes) => Cow::Owned(bytes),
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to encode CVAnalysis: {} \nSelf is: {:#?}",
                    err, &self
                ));
                panic!("Encoding CVAnalysis failed");
            }
        }
    }

    fn from_bytes(bytes: Cow<[u8]>) -> Self {
        match Decode!(bytes.as_ref(), Self) {
            Ok(user) => user,
            Err(err) => {
                ic_cdk::api::print(format!(
                    "Failed to decode CVAnalysis: {} \nBytes is: {:#?}",
                    err, &bytes
                ));
                panic!("Decoding CVAnalysis failed");
            }
        }
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
    pub last_analysed: String,
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
