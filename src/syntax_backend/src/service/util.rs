use hex;
use ic_cdk::api::management_canister::main::raw_rand;

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
