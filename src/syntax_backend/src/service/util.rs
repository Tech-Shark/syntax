use crate::{
    schema::user::{BioData, User, UserInput},
    storage,
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
        address: profile.clone().bio.unwrap().address,
        full_name: profile.clone().bio.unwrap().full_name,
        date_of_birth: profile.clone().bio.unwrap().date_of_birth,
        contact_number: profile.clone().bio.unwrap().contact_number,
        email: profile.clone().bio.unwrap().email,
        nationality: profile.clone().bio.unwrap().nationality,
        education: profile.clone().bio.unwrap().education,
        marital_status: profile.clone().bio.unwrap().marital_status,
        linkedin: profile.clone().bio.unwrap().linkedin,
        github: profile.clone().bio.unwrap().github,
        summary: profile.clone().bio.unwrap().summary,
    })
}

pub fn map_biodata_for_update_user(profile: UserInput, user: User) -> std::option::Option<BioData> {
    Some(BioData {
        address: profile
            .clone()
            .bio
            .unwrap()
            .address
            .or_else(|| user.clone().other.bio.unwrap().address),
        full_name: profile
            .clone()
            .bio
            .unwrap()
            .full_name
            .or_else(|| user.clone().other.bio.unwrap().full_name),
        date_of_birth: profile
            .clone()
            .bio
            .unwrap()
            .date_of_birth
            .or_else(|| user.clone().other.bio.unwrap().date_of_birth),
        contact_number: profile
            .clone()
            .bio
            .unwrap()
            .contact_number
            .or_else(|| user.clone().other.bio.unwrap().contact_number),
        email: profile
            .clone()
            .bio
            .unwrap()
            .email
            .or_else(|| user.clone().other.bio.unwrap().email),
        nationality: profile
            .clone()
            .bio
            .unwrap()
            .nationality
            .or_else(|| user.clone().other.bio.unwrap().nationality),
        education: profile
            .clone()
            .bio
            .unwrap()
            .education
            .or_else(|| user.clone().other.bio.unwrap().education),
        marital_status: profile
            .clone()
            .bio
            .unwrap()
            .marital_status
            .or_else(|| user.clone().other.bio.unwrap().marital_status),
        linkedin: profile
            .clone()
            .bio
            .unwrap()
            .linkedin
            .or_else(|| user.clone().other.bio.unwrap().linkedin),
        github: profile
            .clone()
            .bio
            .unwrap()
            .github
            .or_else(|| user.clone().other.bio.unwrap().github),
        summary: profile
            .clone()
            .bio
            .unwrap()
            .summary
            .or_else(|| user.clone().other.bio.unwrap().summary),
    })
}
