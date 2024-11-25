use super::util::generate_random_string;
use crate::{
    schema::admin::{
        Admin, AdminInput, AdminPlan, AdminResponse, Error, ID_GENERATION_FAILED, NO_ADMIN_FOUND,
    },
    storage::thread_local::ADMIN_MAP,
};

#[ic_cdk::query]
async fn get_all_admin_profile() -> Vec<Admin> {
    let res: Vec<Admin> = ADMIN_MAP.with(|map| {
        map.borrow()
            .iter()
            .map(|(_, value)| value)
            .collect::<Vec<Admin>>()
    });

    if res.len() < 1 {
        vec![]
    } else {
        res
    }
}

#[ic_cdk::query]
async fn get_single_admin(principal: String) -> AdminResponse {
    match ADMIN_MAP.with(|map| map.borrow().get(&principal)) {
        Some(data) => AdminResponse::Ok(data),
        None => AdminResponse::Err(Error {
            message: NO_ADMIN_FOUND.to_string(),
        }),
    }
}

#[ic_cdk::update]
async fn add_new_admin(_profile: AdminInput) -> AdminResponse {
    let admin_id: Option<String> = generate_random_string().await;

    if admin_id.is_none() {
        return AdminResponse::Err(Error {
            message: ID_GENERATION_FAILED.to_string(),
        });
    }

    let admin_profile = Admin {
        id: admin_id.clone().unwrap(),
        other: AdminInput {
            bio: None,
            plan: Some(AdminPlan::READ),
        },
    };

    ADMIN_MAP.with(|map| {
        map.borrow_mut()
            .insert(admin_id.unwrap(), admin_profile.clone())
    });

    AdminResponse::Ok(admin_profile)
}

#[ic_cdk::update]
async fn update_admin(principal: String, profile: AdminInput) -> AdminResponse {
    match ADMIN_MAP.with(|map| map.borrow().get(&principal)) {
        Some(data) => {
            let updated_data = Admin {
                other: AdminInput {
                    plan: profile.plan.or_else(|| Some(AdminPlan::READ)),
                    bio: profile.bio,
                },
                ..data
            };

            match ADMIN_MAP.with(|map| map.borrow_mut().insert(principal, updated_data.clone())) {
                None => AdminResponse::Err(Error {
                    message: NO_ADMIN_FOUND.to_string(),
                }),
                Some(_) => AdminResponse::Ok(updated_data),
            }
        }
        None => AdminResponse::Err(Error {
            message: NO_ADMIN_FOUND.to_string(),
        }),
    }
}
