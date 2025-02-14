import { useEffect, useState } from "react";
import { AuthClient } from "@dfinity/auth-client";
import {
  canisterId,
  createActor,
  syntax_backend,
} from "../../../declarations/syntax_backend/index";
import { useNavigate } from "react-router-dom";
import { Actor, Identity } from "@dfinity/agent";
import { UserInput } from "@/Api/userHandlers/userHandlers.js";
import { Principal } from "@dfinity/principal";

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

const userInput = {
  bio: [],
  plan: "Free",
};

export const useAuthClient = (options = defaultOptions) => {
  const navigate = useNavigate();

  const [isAuth, setIsAuth] = useState(false);
  const [authUser, setAuthUser] = useState<null | AuthClient>(null);
  const [identity, setIdentity] = useState<null | Identity>(null);
  const [principal, setPrincipal] = useState<null | Principal>(null);
  const [callFunction, setCallFunction] = useState<ReturnType<
    typeof createActor
  > | null>(null);

  useEffect(() => {
    AuthClient.create(options.createOptions).then(async (client) => {
      await updateClient(client);
      console.log(client);
    });
  }, []);

  async function updateClient(client: AuthClient) {
    const isAuthenticated = await client?.isAuthenticated();
    setIsAuth(isAuthenticated);
    console.log("isAuthenticated: " + isAuthenticated);

    const identity = client?.getIdentity();
    setIdentity(identity as unknown as Identity);
    console.log("identityStringify: " + JSON.stringify(identity));

    const principal = identity?.getPrincipal();
    setPrincipal(principal as unknown as Principal);
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
      const role = (await callFunction?.get_user_role()) as unknown;

      console.log("role: ", role);

      if (role && role == "ADMIN") {
        console.log("admin");
        navigate("/admin-dashboard");
      } else if (role && role == "USER") {
        console.log("user");
        navigate("/user-dashboard");
      } else {
        console.log("no role");
        // const res = await callFunction?.add_new_user();
        // console.log("Adding User Res: ", res);
        navigate("/user-dashboard");
      }
    }
  }

  const login = () => {
    authUser?.login({
      ...options.loginOptions,
      onSuccess: () => {
        updateClient(authUser).then(() => {
          Actor.agentOf?.(callFunction as unknown as Actor)?.replaceIdentity?.(
            identity!
          );
        });
      },
    });
  };

  async function logout() {
    await authUser?.logout();
    await updateClient(authUser!);
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
    get_user_role,
  };
};
