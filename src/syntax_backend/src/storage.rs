use candid::{CandidType, Decode, Deserialize, Encode, Principal};
use ic_stable_structures::memory_manager::{MemoryId, MemoryManager, VirtualMemory};
use ic_stable_structures::{
    storable::Bound, DefaultMemoryImpl, StableBTreeMap, Storable,
};
use std::{borrow::Cow, cell::RefCell};
use std::convert::identity;
use std::ffi::c_void;
use ic_cdk::caller;
use uuid::Uuid;
use crate::schema::{AnalysisResult, CVAnalysis, CVAnalysisList, CVAnalysisResponse, UserInput};

type Memory = VirtualMemory<DefaultMemoryImpl>;

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
        RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    static MAP: RefCell<StableBTreeMap<Principal, CVAnalysisList, Memory>> = RefCell::new(
        StableBTreeMap::init(
            MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(1))),
        )
    );
}

#[ic_cdk_macros::update]
pub fn add_cv_analysis(user_input: UserInput, result: AnalysisResult) -> Option<String> {
    let identity = caller();
    let idx = {
        MAP.with(|map| {
            let mut map = map.borrow_mut();
            let res = map.get(&identity);
            if let Some(mut analyses) = res {
                let new_idx: String = Uuid::new_v3(&Uuid::NAMESPACE_DNS, b"rust-lang. org").to_string();
                analyses.analyses.push(CVAnalysis {
                    idx: new_idx.to_string(),
                    identity,
                    request: user_input,
                    result,
                });
                map.insert(identity, analyses);
                Some(new_idx)
            }else {
                let new_idx: String = Uuid::new_v3(&Uuid::NAMESPACE_DNS, b"rust-lang. org").to_string();
                let mut cva_list = CVAnalysisList{
                    analyses: vec![],
                };
                cva_list.analyses.push(CVAnalysis {
                    idx: new_idx.to_string(),
                    identity,
                    request: user_input,
                    result,
                });
                map.insert(identity, cva_list);
                Some(new_idx)
            }
        })
    };
    idx
}

#[ic_cdk_macros::query]
pub fn fetch_cv_analysis(idx: String) -> Option<CVAnalysisResponse> {
    let identity = caller();
    MAP.with(|map| {
        map.borrow().get(&identity).and_then(|analyses| {
            let a = analyses.analyses.iter().find(|a| a.idx == idx).cloned();
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
pub fn fetch_all_cv_analysis_for_identity() -> Vec<CVAnalysisResponse> {
    let identity = caller();
    MAP.with(|map| {
        let cv_analysis_list = map.borrow().get(&identity);
        // Convert to Vec<CVAnalysisResponse> if found, otherwise return an empty Vec
        cv_analysis_list
            .map(|list| {
                list.analyses.iter().map(|cv_analysis| CVAnalysisResponse {
                    idx: cv_analysis.idx.to_string(),
                    result: cv_analysis.clone().result,
                    request: cv_analysis.clone().request,
                }).collect()
            })
            .unwrap_or_else(Vec::new)  // Return an empty Vec if no CVAnalysisList is found
    })
}

#[ic_cdk_macros::update]
pub fn remove_cv_analysis(idx: String) -> String {
    let identity = caller();
    MAP.with(|map| {
        let mut map = map.borrow_mut();
        if let Some(mut cv_analysis_list) = map.get(&identity) {
            if let Some(pos) = cv_analysis_list.analyses.iter().position(|a| a.idx == idx) {
                cv_analysis_list.analyses.remove(pos);
                if cv_analysis_list.analyses.is_empty() {
                    map.remove(&identity);
                } else {
                    map.insert(identity, cv_analysis_list.clone());
                }
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
pub fn update_cv_analysis(idx: String, user_input: UserInput, result: AnalysisResult) -> Result<(), String> {
    let identity = caller();
    MAP.with(|map| {
        let mut map = map.borrow_mut();
        if let Some(mut cv_analysis_list) = map.get(&identity) {
            if let Some(cv_analysis) = cv_analysis_list.analyses.iter_mut().find(|a| a.idx == idx) {
                cv_analysis.request = user_input;
                cv_analysis.result = result;
                Ok(())
            } else {
                Err("CVAnalysis not found".to_string())
            }
        } else {
            Err("Identity not found".to_string())
        }
    })
}