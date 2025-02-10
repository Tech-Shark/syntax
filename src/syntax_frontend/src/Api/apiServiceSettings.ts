import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";
import { canisterId, createActor } from "../../../declarations/syntax_backend";

const defaultOptions = {
  idleOptions: {
    disableIdle: true,
  },
};

const agent = new HttpAgent({
  host: "http://127.0.0.1:4943/?canisterId=avqkn-guaaa-aaaaa-qaaea-cai&id=b77ix-eeaaa-aaaaa-qaada-cai",
});

export const api = createActor(canisterId, { agent: agent as any });

export const AUTH_MESSAGES = {
  ALREADY_LOGGED_IN: "You're logged in already!",
  NO_IDENTITY: "You don't have an Identity!",
  INTERRUPTED_AUTHENTICATION: "Authentication was interrupted!",
  NEWLY_AUTHENTICATED: "Newly authenticated!",
  NO_USER_FOUND: "No user with this ID was found!",
};

export const initializeAuth = async (): Promise<AuthClient> => {
  return await AuthClient.create(defaultOptions);
};

export const authenticateUser = async (
  authClient: AuthClient,
  onSuccess: (principal: string) => void
): Promise<string> => {
  return new Promise(async (resolve, reject) => {
    const devMode = import.meta.env.DEV;
    let principal = authClient?.getIdentity()?.getPrincipal();

    if (principal?.isAnonymous() || !principal) {
      authClient.login({
        identityProvider: "https://identity.ic0.app/#authorize",
        onSuccess: () => {
          const newPrincipal = authClient.getIdentity().getPrincipal().toString();
          onSuccess(newPrincipal);
          resolve(AUTH_MESSAGES.NEWLY_AUTHENTICATED);
        },
        onError: (error) => {
          console.error(error);
          reject(AUTH_MESSAGES.INTERRUPTED_AUTHENTICATION);
        },
      });
    } else {
      onSuccess(principal.toString());
      resolve(AUTH_MESSAGES.ALREADY_LOGGED_IN);
    }
  });
};

// Fetch user data (optional for dashboard)
// export const fetchUserData = async (userId:any) => {
//   const response = await api.get(`/users/${userId}`);
//   return response.data;
// };

//devMode ? `http://127.0.0.1:4943/?canisterId=avqkn-guaaa-aaaaa-qaaea-cai` : "https://identity.ic0.app/#authorize"
export default api;
