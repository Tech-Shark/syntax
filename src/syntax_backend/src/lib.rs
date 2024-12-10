pub mod schema;
pub mod service;
pub mod storage;

pub const CV_MEMORY_ID: u8 = 5;
pub const GM_MEMORY_ID: u8 = 9;
pub const USER_MEMORY_ID: u8 = 13;
pub const ADMIN_MEMORY_ID: u8 = 17;
pub const CREDIT_MEMORY_ID: u8 = 21;
pub const SETTING_MEMORY_ID: u8 = 25;
pub const NOTIFICATION_FOR_SINGLE_USER_MEMORY_ID: u8 = 29;
pub const NOTIFICATION_FOR_EVERYBODY_MEMORY_ID: u8 = 33;
pub const NOTIFICATION_FOR_PREMIUM_MEMORY_ID: u8 = 37;
pub const NOTIFICATION_FOR_FREEMIUM_MEMORY_ID: u8 = 41;
pub const QUOTA_ERROR: &str = "quota error";
pub const MONTHLY_TRIAL_ERROR: &str = "You have exhausted your limit for the month!";
