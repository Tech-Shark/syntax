use crate::{
    schema::{
        admin::Admin, credit::Credit, cv::CVAnalysisMap, grammar::GrammarAnalysisMap,
        setting::Setting, user::User,
    },
    CV_MEMORY_ID, GM_MEMORY_ID,
};
use ic_stable_structures::{
    memory_manager::{MemoryId, MemoryManager, VirtualMemory},
    DefaultMemoryImpl, StableBTreeMap,
};
use std::cell::RefCell;

type Memory = VirtualMemory<DefaultMemoryImpl>;

thread_local! {
    static MEMORY_MANAGER: RefCell<MemoryManager<DefaultMemoryImpl>> =
    RefCell::new(MemoryManager::init(DefaultMemoryImpl::default()));

    pub static USER_MAP: RefCell<StableBTreeMap<String, User, DefaultMemoryImpl>> =
    RefCell::new(StableBTreeMap::init(DefaultMemoryImpl::default()));

    pub static ADMIN_MAP: RefCell<StableBTreeMap<String, Admin, DefaultMemoryImpl>> =
    RefCell::new(StableBTreeMap::init(DefaultMemoryImpl::default()));

    pub static CV_STORAGE_MAP: RefCell<StableBTreeMap<String, CVAnalysisMap, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(CV_MEMORY_ID)))
    ));

    pub static GRAMMAR_MAP: RefCell<StableBTreeMap<String, GrammarAnalysisMap, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(GM_MEMORY_ID)))
    ));

    pub static CREDIT_MAP: RefCell<StableBTreeMap<String, Credit, DefaultMemoryImpl>> =
    RefCell::new(StableBTreeMap::init(DefaultMemoryImpl::default()));

    pub static SETTING_MAP: RefCell<StableBTreeMap<String, Setting, DefaultMemoryImpl>> =
    RefCell::new(StableBTreeMap::init(DefaultMemoryImpl::default()));
}
