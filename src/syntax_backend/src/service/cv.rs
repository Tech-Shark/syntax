use super::util::has_used_up_trials;
use crate::schema::cv::{AnalysisResult, CVAnalysisResponse, CVResponse, CVUserInput, Error};
use crate::service::ai;
use crate::storage::thread_local::CV_STORAGE_MAP;
use crate::QUOTA_ERROR;
use crate::{storage, MONTHLY_TRIAL_ERROR};

#[ic_cdk::update]
async fn analyze_cv(principal: String, request: CVUserInput) -> CVResponse {
    let json_value = serde_json::to_value(request.clone());
    let json_value = match json_value {
        Ok(json_value) => json_value,
        Err(e) => {
            return CVResponse::Err(Error {
                message: format!("error validating request: {e}"),
            })
        }
    };

    // Check if the monthly limit has been exhausted
    let cv_storage_map_response = CV_STORAGE_MAP.with(|map| {
        let map = map.borrow_mut();
        let res = map.get(&principal);

        if let Some(analyses) = res {
            if has_used_up_trials(analyses.clone().last_analysed) {
                Some(MONTHLY_TRIAL_ERROR.to_string())
            } else {
                None
            }
        } else {
            None
        }
    });

    if let Some(map_unwrap) = cv_storage_map_response {
        return CVResponse::Err(Error {
            message: map_unwrap,
        });
    }

    let response = ai::call_ai_service(json_value, "cv-analysis").await;

    let result = serde_json::from_str(&response);
    let result: AnalysisResult = match result {
        Ok(result) => result,
        Err(e) => {
            return CVResponse::Err(Error {
                message: format!("error validating result, string response {response}: {e}"),
            })
        }
    };
    let idx = storage::cv::add_cv_analysis(principal, request.clone(), result.clone()).await;
    if idx.is_none() {
        CVResponse::Err(Error {
            message: "error storing analysis".to_string(),
        })
    } else {
        let val = idx.unwrap();
        if val.to_string() == QUOTA_ERROR.to_string() {
            return CVResponse::Err(Error {
                message: "Quota Error: number of trails exceeded.".to_string(),
            });
        }

        CVResponse::Ok(CVAnalysisResponse {
            idx: val,
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
    } else {
        CVResponse::Err(Error {
            message: "analysis not found".to_string(),
        })
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
fn update_cv_analysis(
    principal: String,
    idx: String,
    user_input: CVUserInput,
    result: AnalysisResult,
) -> String {
    storage::cv::put_cv_analysis(principal, idx, user_input, result)
}
