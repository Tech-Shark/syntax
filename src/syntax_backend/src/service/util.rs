use crate::{
    schema::{
        setting::{Setting, SETTING_KEY},
        user::{BioData, User, UserInput, FREE_PLAN, NO_USER_FOUND},
    },
    storage::{
        self,
        thread_local::{CREDIT_MAP, SETTING_MAP, USER_MAP},
    },
};
use hex;
use ic_cdk::api::management_canister::main::raw_rand;
use time::{macros::format_description, Duration, OffsetDateTime, PrimitiveDateTime};

pub async fn generate_random_hex_string() -> Option<String> {
    match raw_rand().await {
        Ok((bytes,)) => {
            ic_cdk::println!("ic.raw_rand() call succeeded");
            Some(hex::encode(bytes))
        }
        Err(err) => {
            ic_cdk::println!("ic.raw_rand() call failed: {:?}", err);
            None
        }
    }
}

pub async fn generate_random_string() -> Option<String> {
    generate_random_hex_string().await
}

#[ic_cdk_macros::query]
pub fn total_users() -> i64 {
    let cv = storage::cv::cv_total_users();
    let gr = storage::grammar::gr_total_users();
    gr + cv
}

pub fn has_used_up_trials(timestamp: String) -> bool {
    // This function should return true if the timestamp is less than 30 days

    let one_month_ago = get_current_time() - Duration::days(30);
    let primitive_one_month_ago =
        PrimitiveDateTime::new(one_month_ago.clone().date(), one_month_ago.clone().time());
    let time_format = format_description!("[year]-[month]-[day] [hour]:[minute]:[second]");

    match PrimitiveDateTime::parse(&timestamp, &time_format) {
        Err(_) => true,
        Ok(target_date) => {
            // Return true if the target date is older than 30 days
            target_date < primitive_one_month_ago
        }
    }
}

pub fn get_current_time() -> OffsetDateTime {
    let current_time = ic_cdk::api::time();
    let nanoseconds = current_time as i64;
    let seconds = nanoseconds / 1_000_000_000;
    let nanos_remainder = nanoseconds % 1_000_000_000;

    let current_time = OffsetDateTime::from_unix_timestamp(seconds).unwrap()
        + Duration::nanoseconds(nanos_remainder);

    ic_cdk::api::print(format!("current time is {:?}", &current_time));

    current_time
}

pub fn map_biodata_for_add_new_user(profile: UserInput) -> std::option::Option<BioData> {
    Some(BioData {
        address: profile.clone().bio.unwrap_or_default().address,
        full_name: profile.clone().bio.unwrap_or_default().full_name,
        date_of_birth: profile.clone().bio.unwrap_or_default().date_of_birth,
        contact_number: profile.clone().bio.unwrap_or_default().contact_number,
        email: profile.clone().bio.unwrap_or_default().email,
        nationality: profile.clone().bio.unwrap_or_default().nationality,
        education: profile.clone().bio.unwrap_or_default().education,
        marital_status: profile.clone().bio.unwrap_or_default().marital_status,
        linkedin: profile.clone().bio.unwrap_or_default().linkedin,
        github: profile.clone().bio.unwrap_or_default().github,
        summary: profile.clone().bio.unwrap_or_default().summary,
    })
}

pub fn map_biodata_for_update_user(profile: UserInput, user: User) -> std::option::Option<BioData> {
    Some(BioData {
        address: profile
            .clone()
            .bio
            .unwrap_or_default()
            .address
            .or_else(|| user.clone().other.bio.unwrap_or_default().address),
        full_name: profile
            .clone()
            .bio
            .unwrap_or_default()
            .full_name
            .or_else(|| user.clone().other.bio.unwrap_or_default().full_name),
        date_of_birth: profile
            .clone()
            .bio
            .unwrap_or_default()
            .date_of_birth
            .or_else(|| user.clone().other.bio.unwrap_or_default().date_of_birth),
        contact_number: profile
            .clone()
            .bio
            .unwrap_or_default()
            .contact_number
            .or_else(|| user.clone().other.bio.unwrap_or_default().contact_number),
        email: profile
            .clone()
            .bio
            .unwrap_or_default()
            .email
            .or_else(|| user.clone().other.bio.unwrap_or_default().email),
        nationality: profile
            .clone()
            .bio
            .unwrap_or_default()
            .nationality
            .or_else(|| user.clone().other.bio.unwrap_or_default().nationality),
        education: profile
            .clone()
            .bio
            .unwrap_or_default()
            .education
            .or_else(|| user.clone().other.bio.unwrap_or_default().education),
        marital_status: profile
            .clone()
            .bio
            .unwrap_or_default()
            .marital_status
            .or_else(|| user.clone().other.bio.unwrap_or_default().marital_status),
        linkedin: profile
            .clone()
            .bio
            .unwrap_or_default()
            .linkedin
            .or_else(|| user.clone().other.bio.unwrap_or_default().linkedin),
        github: profile
            .clone()
            .bio
            .unwrap_or_default()
            .github
            .or_else(|| user.clone().other.bio.unwrap_or_default().github),
        summary: profile
            .clone()
            .bio
            .unwrap_or_default()
            .summary
            .or_else(|| user.clone().other.bio.unwrap_or_default().summary),
    })
}

pub fn load_default_setting() -> String {
    // Add the default setting to the tree if it doesn't exist
    SETTING_MAP.with(|map| {
        map.borrow_mut()
            .insert(SETTING_KEY.to_string(), Setting::default())
    });

    "Try agin!".to_string()
}

pub fn plan_is_valid(input_tier: &String) -> bool {
    let valid_tier = CREDIT_MAP
        .with(|map| {
            map.borrow()
                .iter()
                .filter(|(_key, value)| Option::is_some(&value.name))
                .map(|(_, value)| value.name.unwrap())
                .collect::<Vec<String>>()
        })
        .contains(&input_tier);

    valid_tier
}

pub fn subtract_credit_from_user(user_id: &String) -> Option<String> {
    match USER_MAP.with(|map| map.borrow().get(&user_id)) {
        Some(data) => {
            if data.other.plan != FREE_PLAN {
                let updated_data = User {
                    amount_of_credits: data.amount_of_credits - 1,
                    ..data
                };

                USER_MAP.with(|map| {
                    map.borrow_mut()
                        .insert(user_id.to_string(), updated_data.clone())
                });
            }

            None
        }

        None => Some(NO_USER_FOUND.to_string()),
    }
}
