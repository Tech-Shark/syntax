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
use crate::schema::cv::{AnalysisResult, CVAnalysis, CVAnalysisMap, CVAnalysisResponse, CVUserInput};
use crate::CV_MEMORY_ID;
use crate::service::util;
use crate::QUOTA_ERROR;

type Memory = VirtualMemory<DefaultMemoryImpl>;

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    static MAP: RefCell<StableBTreeMap<String, CVAnalysisMap, Memory>> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(CV_MEMORY_ID))),
        )
    );
}

#[ic_cdk_macros::update]
pub async fn add_cv_analysis(identity: String, user_input: CVUserInput, result: AnalysisResult) -> Option<String> {
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
                    analyses.analyses.insert(id.to_string(), CVAnalysis {
                        idx: id.to_string(),
                        identity: identity.to_string(),
                        request: user_input,
                        result,
                    });
                    map.insert(identity, analyses);
                    Some(id)
                }else {
                    None
                }
            }else {
                if let Some(id) = new_idx {
                    let mut cva_list = CVAnalysisMap {
                        analyses: HashMap::new(),
                    };
                    cva_list.analyses.insert(id.to_string(), CVAnalysis {
                        idx: id.to_string(),
                        identity: identity.to_string(),
                        request: user_input,
                        result,
                    });
                    map.insert(identity, cva_list);
                    Some(id)
                }else {
                    None
                }
            }
        })
    };
    idx
}

#[ic_cdk_macros::query]
pub fn fetch_cv_analysis(identity: String, idx: String) -> Option<CVAnalysisResponse> {
    MAP.with(|map| {
        map.borrow().get(&identity).and_then(|analyses| {
            let a = analyses.analyses.get(&idx).cloned();
            if let Some(ac) = a {
                Some(
                    CVAnalysisResponse{
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
pub fn fetch_all_cv_analysis_for_identity(identity: String) -> Vec<CVAnalysisResponse> {
    MAP.with(|map| {
        let cv_analysis_map = map.borrow().get(&identity);
        cv_analysis_map
            .map(|list| {
                list.analyses.iter().map(|(key, cv_analysis)| CVAnalysisResponse {
                    idx: cv_analysis.idx.to_string(),
                    result: cv_analysis.clone().result,
                    request: cv_analysis.clone().request,
                }).collect()
            })
            .unwrap_or_else(Vec::new)  // Return an empty Vec if no CVAnalysisList is found
    })
}

#[ic_cdk_macros::update]
pub fn remove_cv_analysis(identity: String, idx: String) -> String {
    MAP.with(|map| {
        let mut map = map.borrow_mut();
        if let Some(mut cv_analysis_map) = map.get(&identity) {
            if cv_analysis_map.analyses.contains_key(&idx) {
                cv_analysis_map.analyses.remove(&idx);
                "success".to_string()
            } else {
                "CVAnalysis not found".to_string()
            }
        } else {
            "Identity not found".to_string()
        }
    })
}

#[ic_cdk_macros::update]
pub fn put_cv_analysis(identity: String, idx: String, user_input: CVUserInput, result: AnalysisResult) -> String {
    MAP.with(|map| {
        let mut map = map.borrow_mut();
        if let Some(mut cv_analysis_map) = map.get(&identity) {
            if cv_analysis_map.analyses.contains_key(&idx) {
                cv_analysis_map.analyses.insert(
                    idx.to_string(),
                    CVAnalysis{
                        idx,
                        identity: identity.to_string(),
                        request: user_input,
                        result,
                    }
                );
                "success".to_string()
            } else {
                "CVAnalysis not found".to_string()
            }
        } else {
            "Identity not found".to_string()
        }
    })
}