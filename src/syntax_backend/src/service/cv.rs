use super::util::{has_used_up_trials, subtract_credit_from_user};
use crate::schema::credit::INSUFFICIENT_CREDIT;
use crate::schema::cv::{AnalysisResult, CVAnalysisResponse, CVResponse, CVUserInput, Error};
use crate::schema::user::{FREE_PLAN, NO_USER_FOUND};
use crate::service::ai;
use crate::storage::thread_local::{CV_STORAGE_MAP, USER_MAP};
use crate::QUOTA_ERROR;
use crate::{storage, MONTHLY_TRIAL_ERROR};

#[ic_cdk::update]
async fn analyze_cv(request: CVUserInput) -> CVResponse<String> {
    let principal = ic_cdk::api::caller().to_text();
    let mut user_current_plan = FREE_PLAN.to_string();
    let json_value = serde_json::to_value(request.clone());

    let json_value = match json_value {
        Ok(json_value) => json_value,
        Err(e) => {
            return CVResponse::Err(Error {
                message: format!("error validating request: {e}"),
            });
        }
    };

    // Check if the user has enough credits
    let user_has_credit = Some("PROCEED".to_string());
    // {

    //     match USER_MAP.with(|map| map.borrow().get(&principal)) {
    //         Some(data) => {
    //             user_current_plan = data.other.plan;

    //             if data.amount_of_credits == 0 {
    //                 Some(INSUFFICIENT_CREDIT.to_string())
    //             } else {
    //                 // Proceed
    //                 Some("PROCEED".to_string())
    //             }
    //         }

    //         None => None,
    //     }
    // };

    // No user found
    if user_has_credit.is_none() {
        return CVResponse::Err(Error {
            message: NO_USER_FOUND.to_string(),
        });
    }

    // Throw insufficient credit if the user isn't on free plan
    if (user_has_credit.unwrap() == INSUFFICIENT_CREDIT)
        && (user_current_plan != FREE_PLAN.to_string())
    {
        return CVResponse::Err(Error {
            message: INSUFFICIENT_CREDIT.to_string(),
        });
    }

    // Check if the monthly limit has been exhausted for free users
    if user_current_plan == FREE_PLAN.to_string() {
        let cv_storage_map_response = CV_STORAGE_MAP.with(|map| {
            return None;

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

        // Throw error response if any from above
        if let Some(map_unwrap) = cv_storage_map_response {
            return CVResponse::Err(Error {
                message: map_unwrap,
            });
        }
    }

    // Make the AI call
    let response = ai::call_ai_service(json_value, "cv-analysis").await;
    // let result = serde_json::from_str(&response);

    // let result: AnalysisResult = match result {
    //     Ok(result) => result,
    //     Err(e) => {
    //         return CVResponse::Err(Error {
    //             message: format!("error validating result, string response {response}: {e}"),
    //         })
    //     }
    // };

    // let idx =
    //     storage::cv::add_cv_analysis(principal.clone(), request.clone(), result.clone()).await;

    // if idx.is_none() {
    //     CVResponse::Err(Error {
    //         message: "error storing analysis".to_string(),
    //     })
    // } else {
    //     let val = idx.unwrap();

    //     if val.to_string() == QUOTA_ERROR.to_string() {
    //         return CVResponse::Err(Error {
    //             message: "Quota Error: number of trails exceeded.".to_string(),
    //         });
    //     }

    //     if let Some(response) = subtract_credit_from_user(&principal) {
    //         return CVResponse::Err(Error { message: response });
    //     }

    //     CVResponse::Ok(CVAnalysisResponse {
    //         idx: val,
    //         request,
    //         result,
    //     })
    // }

    CVResponse::Ok(response)
}

#[ic_cdk::query]
fn get_cv_analysis(idx: String) -> CVResponse {
    let principal = ic_cdk::api::caller().to_text();
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
fn get_all_cv_analysis_for_identity() -> Vec<CVAnalysisResponse> {
    let principal = ic_cdk::api::caller().to_text();
    storage::cv::fetch_all_cv_analysis_for_identity(principal)
}

#[ic_cdk::query]
fn get_single_cv_analysis_for_identity(cv_id: String) -> Vec<CVAnalysisResponse> {
    let principal = ic_cdk::api::caller().to_text();
    storage::cv::fetch_single_cv_analysis_for_identity(principal, cv_id)
}

#[ic_cdk::update]
fn delete_cv_analysis(idx: String) -> String {
    let principal = ic_cdk::api::caller().to_text();
    storage::cv::remove_cv_analysis(principal, idx)
}

#[ic_cdk::update]
fn update_cv_analysis(idx: String, user_input: CVUserInput, result: AnalysisResult) -> String {
    let principal = ic_cdk::api::caller().to_text();
    storage::cv::put_cv_analysis(principal, idx, user_input, result)
}
