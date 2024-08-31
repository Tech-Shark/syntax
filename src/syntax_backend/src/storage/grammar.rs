use candid::{CandidType, Decode, Deserialize, Encode, Principal};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{
    storable::Bound, DefaultMemoryImpl, StableBTreeMap, Storable,
};
use std::{borrow::Cow, cell::RefCell};
use std::collections::HashMap;
use std::convert::identity;
use std::ffi::c_void;
use ic_cdk::caller;
use crate::schema::grammar::{GrammarCheckResult, GrammarAnalysis, GrammarAnalysisMap,
                             GrammarAnalysisResponse, GrammarUserInput};
use crate::GM_MEMORY_ID;
type Memory = VirtualMemory<DefaultMemoryImpl>;
use crate::service::util;
use crate::QUOTA_ERROR;

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    static MAP: RefCell<StableBTreeMap<String, GrammarAnalysisMap, Memory>> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(GM_MEMORY_ID))),
        )
    );
}

#[ic_cdk_macros::update]
pub async fn add_grammar_analysis(identity: String, user_input: GrammarUserInput, result: GrammarCheckResult) -> Option<String> {
    let new_idx: Option<String> = util::generate_random_string().await;
    let idx = {
        MAP.with(|map| {
            let mut map = map.borrow_mut();
            let res = map.get(&identity);
            if let Some(mut analyses) = res {
                if analyses.analyses.len() >= 2 {
                    return Some(QUOTA_ERROR.to_string());
                }
                if let Some(id) = new_idx {
                    analyses.analyses.insert(id.to_string(), GrammarAnalysis {
                        idx: id.to_string(),
                        identity: identity.to_string(),
                        request: user_input,
                        result,
                    });
                    map.insert(identity, analyses);
                    Some(id)
                } else {
                    None
                }
            }else {
                if let Some(id) = new_idx {
                    let mut g_list = GrammarAnalysisMap {
                        analyses: HashMap::new(),
                    };
                    g_list.analyses.insert(id.to_string(), GrammarAnalysis {
                        idx: id.to_string(),
                        identity: identity.to_string(),
                        request: user_input,
                        result,
                    });
                    map.insert(identity, g_list);
                    Some(id)
                } else {
                    None
                }
            }
        })
    };
    idx
}

#[ic_cdk_macros::query]
pub fn fetch_grammar_analysis(identity: String, idx: String) -> Option<GrammarAnalysisResponse> {
    MAP.with(|map| {
        map.borrow().get(&identity).and_then(|analyses| {
            let a = analyses.analyses.get(&idx).cloned();
            if let Some(ac) = a {
                Some(
                    GrammarAnalysisResponse{
                        idx: ac.idx,
                        request: ac.request.clone(),
                        result: ac.result.clone(),
                    }
                )
            }else {
                None
            }
        })
    })
}

#[ic_cdk_macros::query]
pub fn fetch_all_grammar_analysis_for_identity(identity: String) -> Vec<GrammarAnalysisResponse> {
    MAP.with(|map| {
        let grammar_analysis_map = map.borrow().get(&identity);
        grammar_analysis_map
            .map(|list| {
                list.analyses.iter().map(|(key, grammar_analysis)| GrammarAnalysisResponse {
                    idx: grammar_analysis.idx.to_string(),
                    result: grammar_analysis.clone().result,
                    request: grammar_analysis.clone().request,
                }).collect()
            })
            .unwrap_or_else(Vec::new)
    })
}

#[ic_cdk_macros::update]
pub fn remove_grammar_analysis(identity: String, idx: String) -> String {
    MAP.with(|map| {
        let mut map = map.borrow_mut();
        if let Some(mut grammar_analysis_map) = map.get(&identity) {
            if grammar_analysis_map.analyses.contains_key(&idx) {
                grammar_analysis_map.analyses.remove(&idx);
                "success".to_string()
            } else {
                "GrammarAnalysis not found".to_string()
            }
        } else {
            "Identity not found".to_string()
        }
    })
}

#[ic_cdk_macros::update]
pub fn put_grammar_analysis(identity: String, idx: String, user_input: GrammarUserInput, result: GrammarCheckResult) -> String {
    MAP.with(|map| {
        let mut map = map.borrow_mut();
        if let Some(mut cv_analysis_map) = map.get(&identity) {
            if cv_analysis_map.analyses.contains_key(&idx) {
                cv_analysis_map.analyses.insert(
                    idx.to_string(),
                    GrammarAnalysis{
                        idx,
                        identity: identity.to_string(),
                        request: user_input,
                        result,
                    }
                );
                "success".to_string()
            } else {
                "GrammarAnalysis not found".to_string()
            }
        } else {
            "Identity not found".to_string()
        }
    })
}