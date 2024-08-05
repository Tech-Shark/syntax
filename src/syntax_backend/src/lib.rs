use std::str::FromStr;

use candid::{CandidType, Deserialize};

use crate::schema::{AnalysisResult, CVAnalysisResponse, CVResponse, Error, UserInput};

pub mod storage;
pub mod schema;
pub mod ai;

#[ic_cdk::update]
fn analyze_cv(request: UserInput) -> CVResponse {
    // let identity = caller();

    let cv_analysis = format!("CV tailored for: {}", request.job_description);

    let error_highlights = vec![
        "No grammatical errors found.".to_string(),
        "No spelling mistakes detected.".to_string(),];

    let suggestions = vec![
        "Consider adding more details about your skills.".to_string(),
        "Tailor your CV to the specific job description.".to_string(),
    ];

    let result = AnalysisResult {
        cv_analysis,
        error_highlights,
        suggestions,
    };

    let idx = storage::add_cv_analysis(request.clone(), result.clone());
    if idx.is_none() {
        CVResponse::Err(
            Error{
                message: "error storing analysis".to_string(),
            }
        )
    }else {
        CVResponse::Ok(CVAnalysisResponse{
            idx: idx.unwrap(),
            request,
            result,
        })
    }
}

#[ic_cdk::query]
fn get_cv_analysis(idx: String) -> CVResponse {
    let result = storage::fetch_cv_analysis(idx);
    if let Some(res) = result {
        CVResponse::Ok(res)
    }else {
        CVResponse::Err(
            Error{
                message: "analysis not found".to_string(),
            }
        )
    }
}

#[ic_cdk::query]
fn get_all_cv_analysis_for_identity() -> Vec<CVAnalysisResponse> {
    storage::fetch_all_cv_analysis_for_identity()
}

#[ic_cdk::update]
fn delete_cv_analysis(idx: String) -> String {
    storage::remove_cv_analysis(idx)
}

#[ic_cdk::update]
fn put_cv_analysis(idx: String, user_input: UserInput, result: AnalysisResult) -> Result<(), String> {
    storage::update_cv_analysis(idx, user_input, result)
}

