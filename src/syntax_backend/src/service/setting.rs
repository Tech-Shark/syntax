use crate::{
    schema::{
        admin::INVALID_AUTH,
        setting::{Error, Setting, SettingInput, SettingResponse, SettingResponseOk, SETTING_KEY},
    },
    storage::thread_local::SETTING_MAP,
};

use super::util::load_default_setting;

#[ic_cdk::update]
async fn update_setting(pwd: String, changes: SettingInput) -> SettingResponse {
    match SETTING_MAP.with(|map| map.borrow().get(&SETTING_KEY.to_string())) {
        None => SettingResponse::Err(Error {
            message: load_default_setting(),
        }),

        Some(old_config) => {
            let config = old_config as Setting;
            if config.password != pwd {
                return SettingResponse::Err(Error {
                    message: INVALID_AUTH.to_string(),
                });
            } else if changes.clone().password.is_some_and(|p| p.len() < 8) {
                return SettingResponse::Err(Error {
                    message: "Your new password is less than 8 characters".to_string(),
                });
            } else {
                let mut updated_data = Setting {
                    max_freemium_users: changes
                        .max_freemium_users
                        .unwrap_or(config.max_freemium_users),
                    password: changes.password.unwrap_or(config.password),
                    paystack_secret: changes.paystack_secret.or(config.paystack_secret),
                };

                SETTING_MAP.with(|map| {
                    map.borrow_mut()
                        .insert(SETTING_KEY.to_string(), updated_data.clone())
                });

                updated_data.password = "********".to_string();

                SettingResponse::Ok(SettingResponseOk::Setting(updated_data))
            }
        }
    }
}
