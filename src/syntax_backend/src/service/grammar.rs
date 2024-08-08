use std::str::FromStr;
use crate::schema::grammar::{GrammarCheckResult, GrammarAnalysisResponse,
                             GrammarUserInput, GrammarResponse, Error};
use crate::storage;

#[ic_cdk::update]
fn analyze_grammar(principal: String, request: GrammarUserInput) -> GrammarResponse {
    let grammar_analysis = format!("Grammar corrections: {}", request.text);

    let error_highlights = vec![
        "No grammatical errors found.".to_string(),
        "No spelling mistakes detected.".to_string(),];

    let suggestions = vec![
        "Consider making sentence more concise.".to_string(),
        "Make use of active speech.".to_string(),
    ];

    let result = GrammarCheckResult {
        text: grammar_analysis.to_string(),
        error_highlights,
        suggestions,
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

