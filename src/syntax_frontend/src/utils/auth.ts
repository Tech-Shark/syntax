import { AppDispatch } from "@/redux/store";
import { USER_UPDATE_PROFILE } from "@/redux/userSlice";
import { HttpAgent } from "@dfinity/agent";
import { AuthClient } from "@dfinity/auth-client";
import { canisterId, createActor } from "../../../declarations/syntax_backend";

const defaultOptions = {
  idleOptions: {
    disableIdle: true, // Set to true if you do not want idle functionality
  },
};

const agent = new HttpAgent({
  host: "http://127.0.0.1:4943",
}) as any; // Use local replica
export const api = createActor(canisterId, { agent });

export const ALREADY_LOGGED_IN = "You're logged in already!";
export const NO_IDENTITY = "You don't have an Identity!";
export const INTERUPTED_AUTHENTICATION = "Authentication was interupted!";
export const NEWLY_AUTHENTICATED = "Newly authenticated!";
export const NO_USER_FOUND = "No user with this ID was found!";

function initAuth(
  dispatch: AppDispatch,
  setAuth: (data: AuthClient) => void
): Promise<string> {
  return new Promise(async (resolve, reject) => {
    const authClient = await AuthClient.create(defaultOptions);
    setAuth(authClient);

    // Check for existing principal
    const devMode = import.meta.env.DEV;
    let principal = authClient?.getIdentity()?.getPrincipal();

    if (principal?.isAnonymous() || !principal) {
      // Trigger login page
      authClient.login({
        identityProvider: devMode
          ? `http://localhost:4943/?canisterId=${canisterId}`
          : "https://identity.ic0.app/#authorize",
        onSuccess: (_) => {
          dispatch(
            USER_UPDATE_PROFILE({
              profile: {
                id: authClient.getIdentity().getPrincipal().toString(),
              },
            })
          );
          resolve(NEWLY_AUTHENTICATED);
        },
        onError: (error) => {
          console.log(error);
          reject(INTERUPTED_AUTHENTICATION);
        },
      });
    } else {
      // Update redux store if valid principal exists
      dispatch(
        USER_UPDATE_PROFILE({
          profile: {
            id: principal.toString(),
          },
        })
      );
      resolve(ALREADY_LOGGED_IN);
    }
  });
}

export { initAuth };
