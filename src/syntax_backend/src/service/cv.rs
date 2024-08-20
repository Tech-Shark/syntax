use std::str::FromStr;
use crate::schema::cv::{AnalysisResult, CVAnalysisResponse, CVResponse, Error, CVUserInput};
use crate::service::ai;
use crate::storage;

#[ic_cdk::update]
async fn analyze_cv(principal: String, request: CVUserInput) -> CVResponse {

    let json_value = serde_json::to_value(request.clone());
    let json_value = match json_value {
        Ok(json_value) => json_value,
        Err(e) => {
            return CVResponse::Err(
                Error{
                    message: format!("error validating request: {e}"),
                }
            )
        }
    };
    let response = ai::call_ai_service(json_value, "cv-analysis").await;


    let result = serde_json::from_str(&response);
    let result: AnalysisResult = match result {
        Ok(result) => result,
        Err(e) => {
            return CVResponse::Err(
                Error{
                    message: format!("error validating result, string response {response}: {e}"),
                }
            )
        }
    };
    let idx = storage::cv::add_cv_analysis(principal, request.clone(), result.clone());
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
fn get_cv_analysis(principal: String, idx: String) -> CVResponse {
    let result = storage::cv::fetch_cv_analysis(principal, idx);
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
fn get_all_cv_analysis_for_identity(principal: String) -> Vec<CVAnalysisResponse> {
    storage::cv::fetch_all_cv_analysis_for_identity(principal)
}

#[ic_cdk::update]
fn delete_cv_analysis(principal: String, idx: String) -> String {
    storage::cv::remove_cv_analysis(principal, idx)
}

#[ic_cdk::update]
fn update_cv_analysis(principal: String, idx: String, user_input: CVUserInput, result: AnalysisResult) -> String {
    storage::cv::put_cv_analysis(principal, idx, user_input, result)
}

