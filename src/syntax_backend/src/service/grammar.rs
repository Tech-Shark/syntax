use std::str::FromStr;

use crate::schema::grammar::{Error, GrammarAnalysisResponse,
                             GrammarCheckResult, GrammarResponse, GrammarUserInput};
use crate::service::ai;
use crate::storage;

#[ic_cdk::update]
async fn analyze_grammar(principal: String, request: GrammarUserInput) -> GrammarResponse {
    let json_value = serde_json::to_value(request.clone());
    let json_value = match json_value {
        Ok(json_value) => json_value,
        Err(e) => {
            return GrammarResponse::Err(
                Error {
                    message: format!("error validating request: {e}"),
                }
            )
        }
    };
    let response = ai::call_ai_service(json_value, "grammar-analysis").await;
    let result = serde_json::from_str(&response);
    let result: GrammarCheckResult = match result {
        Ok(result) => result,
        Err(e) => {
            return GrammarResponse::Err(
                Error {
                    message: format!("error validating result, string response {response}: {e}"),
                }
            )
        }
    };

    let idx = storage::grammar::add_grammar_analysis(principal, request.clone(), result.clone());
    if idx.is_none() {
        GrammarResponse::Err(
            Error{
                message: "error storing analysis".to_string(),
            }
        )
    }else {
        GrammarResponse::Ok(GrammarAnalysisResponse{
            idx: idx.unwrap(),
            request,
            result,
        })
    }
}

#[ic_cdk::query]
fn get_grammar_analysis(principal: String, idx: String) -> GrammarResponse {
    let result = storage::grammar::fetch_grammar_analysis(principal, idx);
    if let Some(res) = result {
        GrammarResponse::Ok(res)
    }else {
        GrammarResponse::Err(
            Error{
                message: "analysis not found".to_string(),
            }
        )
    }
}

#[ic_cdk::query]
fn get_all_grammar_analysis_for_identity(principal: String) -> Vec<GrammarAnalysisResponse> {
    storage::grammar::fetch_all_grammar_analysis_for_identity(principal)
}

#[ic_cdk::update]
fn delete_grammar_analysis(principal: String, idx: String) -> String {
    storage::grammar::remove_grammar_analysis(principal, idx)
}

#[ic_cdk::update]
fn update_grammar_analysis(principal: String, idx: String, user_input: GrammarUserInput,
                           result: GrammarCheckResult) -> String {
    storage::grammar::put_grammar_analysis(principal, idx, user_input, result)
}

