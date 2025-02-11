import { useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import {
  canisterId,
  createActor,
  syntax_backend,
} from "../../../declarations/syntax_backend/index";
import { useNavigate } from "react-router-dom";
import { Actor } from "@dfinity/agent";

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

export const useAuthClient = (options = defaultOptions) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const [authUser, setAuthUser] = useState(null);
  const [identity, setIdentity] = useState(null);
  const [principal, setPrincipal] = useState(null);
  const [callFunction, setCallFunction] = useState(null);

  useEffect(() => {
    AuthClient.create(options.createOptions).then(async (client) => {
      await updateClient(client);
      console.log(client);
    });
  }, []);

  async function updateClient(client) {
    const isAuthenticated = await client?.isAuthenticated();
    setIsAuth(isAuthenticated);
    console.log("isAuthenticated: " + isAuthenticated);

    const identity = client?.getIdentity();
    setIdentity(identity);
    console.log("identityStringify: " + JSON.stringify(identity));

    const principal = identity?.getPrincipal();
    setPrincipal(principal);
    console.log("principal: " + principal);

    setAuthUser(client);

    const actor = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });

    console.log("Actor created: ", actor);
    setCallFunction(actor);

    if (isAuthenticated) {
      // Check if user has a profile
      const role = await callFunction.get_user_role();

      console.log("role: ", role);

      if (role && role == "ADMIN") {
        console.log("admin");
        navigate("/admin-dashboard");
      } else if (role && role == "USER") {
        console.log("user");
        navigate("/user-dashboard");
      } else {
        console.log("no role");
      }
    }
  }

  const login = () => {
    authUser.login({
      ...options.loginOptions,
      onSuccess: () => {
        updateClient(authUser).then(() => {
          Actor.agentOf(callFunction).replaceIdentity(identity);
        });
      },
    });
  };

  async function logout() {
    await authUser?.logout();
    await updateClient(authUser);
    localStorage.clear();
    navigate("/");
  }

    // Methods for interacting with the backend actor
    const get_user_role = () => callFunction?.get_user_role();


  return {
    isAuth,
    login,
    logout,
    authUser,
    identity,
    principal,
    callFunction,
    get_user_role
  };
};
