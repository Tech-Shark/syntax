use crate::{
    schema::{
        admin::Admin,
        credit::Credit,
        cv::CVAnalysisMap,
        grammar::GrammarAnalysisMap,
        notifications::{
            notification_for_everybody::NotificationForEverybody,
            notification_for_single_user::NotificationForSingleUser,
            notification_for_tier::NotificationForTier,
        },
        setting::Setting,
        user::User,
    },
    ADMIN_MEMORY_ID, CREDIT_MEMORY_ID, CV_MEMORY_ID, GM_MEMORY_ID,
    NOTIFICATION_FOR_EVERYBODY_MEMORY_ID, NOTIFICATION_FOR_FREEMIUM_MEMORY_ID,
    NOTIFICATION_FOR_PREMIUM_MEMORY_ID, NOTIFICATION_FOR_SINGLE_USER_MEMORY_ID, SETTING_MEMORY_ID,
    USER_MEMORY_ID,
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

    pub static USER_MAP: RefCell<StableBTreeMap<String, User, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(USER_MEMORY_ID)))
    ));

    pub static ADMIN_MAP: RefCell<StableBTreeMap<String, Admin, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(ADMIN_MEMORY_ID)))
    ));

    pub static CV_STORAGE_MAP: RefCell<StableBTreeMap<String, CVAnalysisMap, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(CV_MEMORY_ID)))
    ));

    pub static GRAMMAR_MAP: RefCell<StableBTreeMap<String, GrammarAnalysisMap, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(GM_MEMORY_ID)))
    ));

    pub static CREDIT_MAP: RefCell<StableBTreeMap<String, Credit, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(CREDIT_MEMORY_ID)))
    ));

    pub static SETTING_MAP: RefCell<StableBTreeMap<String, Setting, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(SETTING_MEMORY_ID)))
    ));

     pub static NOTIFICATION_FOR_SINGLE_USER_MAP: RefCell<StableBTreeMap<String, NotificationForSingleUser, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(NOTIFICATION_FOR_SINGLE_USER_MEMORY_ID)))
    ));

     pub static NOTIFICATION_FOR_EVERYBODY_MAP: RefCell<StableBTreeMap<String, NotificationForEverybody, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(NOTIFICATION_FOR_EVERYBODY_MEMORY_ID)))
    ));

     pub static NOTIFICATION_FOR_PREMIUM_MAP: RefCell<StableBTreeMap<String, NotificationForTier, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(NOTIFICATION_FOR_PREMIUM_MEMORY_ID)))
    ));

     pub static NOTIFICATION_FOR_FREEMIUM_MAP: RefCell<StableBTreeMap<String, NotificationForTier, Memory>> =
    RefCell::new(StableBTreeMap::init(
        MEMORY_MANAGER.with(|m| m.borrow().get(MemoryId::new(NOTIFICATION_FOR_FREEMIUM_MEMORY_ID)))
    ));


}
