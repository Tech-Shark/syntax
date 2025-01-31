// All these imports are relevant to the export_candid macro
use crate::schema::admin::Admin;
use crate::schema::admin::AdminInput;
use crate::schema::admin::AdminResponse;
use crate::schema::credit::Credit;
use crate::schema::credit::CreditResponse;
use crate::schema::cv::AnalysisResult;
use crate::schema::cv::CVAnalysisResponse;
use crate::schema::cv::CVResponse;
use crate::schema::cv::CVUserInput;
use crate::schema::grammar::GrammarAnalysisResponse;
use crate::schema::grammar::GrammarCheckResult;
use crate::schema::grammar::GrammarResponse;
use crate::schema::grammar::GrammarUserInput;
use crate::schema::notifications::notification_for_everybody::NotificationForEverybody;
use crate::schema::notifications::notification_for_everybody::NotificationForEverybodyInput;
use crate::schema::notifications::notification_for_everybody::NotificationForEverybodyResponse;
use crate::schema::notifications::notification_for_single_user::IndividualNotificationForSingleUser;
use crate::schema::notifications::notification_for_single_user::NotificationForSingleUserInput;
use crate::schema::notifications::notification_for_single_user::NotificationForSingleUserResponse;
use crate::schema::notifications::notification_for_tier::NotificationForTier;
use crate::schema::notifications::notification_for_tier::NotificationForTierInput;
use crate::schema::notifications::notification_for_tier::NotificationForTierResponse;
use crate::schema::user::User;
use crate::schema::user::UserInput;
use crate::schema::user::UserResponse;
use ic_cdk::api::management_canister::http_request::HttpResponse;
use ic_cdk::api::management_canister::http_request::TransformArgs;

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

// Enable Candid export
ic_cdk::export_candid!();
