import React, {
  createContext,
  useContext,
  useState,
  useEffect
} from "react";
import { AuthClient } from "@dfinity/auth-client";
import { useNavigate } from "react-router-dom";
import { Actor } from "@dfinity/agent";
import {
  canisterId,
  createActor,
} from "../../../declarations/syntax_backend/index";

// Create the Authentication context
const AuthenticationContext = createContext();

// Default options for AuthClient
const defaultOptions = {
  createOptions: {
    idleOptions: {
      disableIdle: true,
    },
  },
  loginOptions: {
    identityProvider: "https://identity.ic0.app/#authorize",
  },
};

// Sample user input (adjust as needed for your app)
const userInput = {
  bio: [],
  plan: "Free",
};

// Custom hook to manage authentication logic
function useAuthClient(options = defaultOptions) {
  const navigate = useNavigate();

  const [authClient, setAuthClient] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [identity, setIdentity] = useState(null);
  const [principal, setPrincipal] = useState(null);
  const [callFunction, setCallFunction] = useState(null);

  useEffect(() => {
    AuthClient.create(options.createOptions).then(async (client) => {
      await updateClient(client);
      console.log("AuthClient created:", client);
    });
  }, []);

  async function updateClient(client) {
    const isAuthenticated = await client?.isAuthenticated();
    setIsAuth(isAuthenticated);
    console.log("isAuthenticated:", isAuthenticated);

    const newIdentity = client?.getIdentity();
    setIdentity(newIdentity);
    console.log("identityStringify:", JSON.stringify(newIdentity));

    const newPrincipal = newIdentity?.getPrincipal();
    setPrincipal(newPrincipal);
    console.log("principal:", newPrincipal);

    setAuthClient(client);

    const actor = createActor(canisterId, {
      agentOptions: {
        identity: newIdentity,
      },
    });

    console.log("Actor created:", actor);
    setCallFunction(actor);

    if (isAuthenticated) {
      // Check if user has a profile
      const role = await actor.get_user_role();
      const user = await callFunction.get_single_user();
      setAuthUser(user);
      console.log("role:", role);

      if (role && role === "ADMIN") {
        console.log("admin");
        navigate("/admin-dashboard");
      } else if (role && role === "USER") {
        console.log("user");
        navigate("/user-dashboard");
      } else {
        console.log("no role");
        const res = await actor.add_new_user(userInput);
        const response = await actor.get_all_credit_plan();
        console.log("Credit Plan Response:", response);
        console.log("Adding User Res:", res);
        navigate("/");
      }
    }
  }

  const login = () => {
    authClient.login({
      ...options.loginOptions,
      onSuccess: () => {
        updateClient(authClient).then(() => {
          Actor.agentOf(callFunction).replaceIdentity(identity);
        });
      },
    });
  };

  const logout = async () => {
    await authClient?.logout();
    await updateClient(authClient);
    localStorage.clear();
    navigate("/");
  };

  // Example method for interacting with the backend actor
  const get_user_role = () => callFunction?.get_user_role();

  return {
    isAuth,
    authUser,
    identity,
    principal,
    callFunction,
    login,
    logout,
    get_user_role,
  };
}

// Context Provider to wrap your app
export const AuthenticationProvider = ({ children }) => {
  const auth = useAuthClient();

  return (
      <AuthenticationContext.Provider value={auth}>
        {children}
      </AuthenticationContext.Provider>
  );
};

// Hook to consume the authentication context in other components
export const useAuth = () => {
  return useContext(AuthenticationContext);
};
