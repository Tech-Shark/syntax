import { RootState, useAppDispatch } from "@/redux/store";
import { USER_UPDATE_PROFILE } from "@/redux/userSlice";
import {
  ALREADY_LOGGED_IN,
  INTERUPTED_AUTHENTICATION,
  NEWLY_AUTHENTICATED,
  NO_USER_FOUND,
  api,
  initAuth,
} from "@/utils/auth";
import { AuthClient } from "@dfinity/auth-client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import hero_bg from "../../assets/images/hero_banner.svg";
import DashboardAdmin from "./DashboardAdmin/DashboardAdmin";
import DashboardUser from "./DashboardUser/DashboardUser";

const Dashboard = () => {
  const [auth, setAuth] = useState<AuthClient | null>(null);
  const dispatch = useAppDispatch();
  const store = useSelector((store: RootState) => store.user);
  const [searchParams] = useSearchParams();
  const [authenticating, setAuthenticating] = useState(true);
  const [authenticationError, setAuthenticationError] = useState("");
  const [role, setRole] = useState(searchParams.get("mode")?.toUpperCase());

  const handleEffect = async () => {
    setAuthenticating(true);

    initAuth(dispatch, setAuth)
      .then(async (data) => {
        if ([ALREADY_LOGGED_IN, NEWLY_AUTHENTICATED].includes(data)) {
          const user_role = await api.get_user_role();

          if ("Ok" in user_role) {
            // Set the returned role
            setRole(user_role.Ok);

            // Refetch the user profile
            const user_profile = await api.get_single_user();

            if ("Ok" in user_profile) {
              user_profile.Ok.amount_of_credits = Number(
                user_profile.Ok.amount_of_credits
              ) as unknown as bigint;
              dispatch(USER_UPDATE_PROFILE({ profile: user_profile.Ok }));
            }
          } else {
            // Handle new registration
            setAuthenticationError(NO_USER_FOUND);
            const new_user = await api.add_new_user({ plan: "Free", bio: [] });

            if ("Ok" in new_user) {
              new_user.Ok.amount_of_credits = Number(
                new_user.Ok.amount_of_credits
              ) as unknown as bigint;
              dispatch(USER_UPDATE_PROFILE({ profile: new_user.Ok }));
            } else {
              setAuthenticationError(new_user.Err.message);
              console.log(user_role.Err.message);
            }
          }
        }
      })
      .catch((err) => {
        console.log(err);

        if ([INTERUPTED_AUTHENTICATION].includes(err)) {
          setAuthenticationError(err);
        } else {
          setAuthenticationError("Something went wrong");
        }
      })
      .finally(() => {
        setAuthenticating(false);
      });
  };

  useEffect(() => {
    handleEffect();
  }, []);

  if (role === "ADMIN") return <DashboardAdmin />;

  if (role === "USER") return <DashboardUser />;

  return (
    <div className="centerUtil flex-col w-full h-screen bg-[rgba(217,217,217,0.3)]">
      <img src={hero_bg} alt="" className="fixed mx-auto -z-[1] opacity-45" />

      <p className="text-xl text-[#1C1D24] text-center leading-10">
        {authenticating && <span className="">Authenticating...</span>}

        {authenticationError && authenticationError != NO_USER_FOUND && (
          <span className="">{authenticationError}</span>
        )}

        {authenticationError == NO_USER_FOUND && (
          <span>
            No ID with this user was found!
            <br />
            You'll be registered now
          </span>
        )}
      </p>

      <button
        onClick={() => {
          auth?.logout({ returnTo: "/" });
        }}
        className="mt-10 bg-black text-white py-1 px-2"
      >
        Logout
      </button>
    </div>
  );
};

export default Dashboard;
