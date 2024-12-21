import { useEffect, useState } from "react";
import DashboardAdmin from "./DashboardAdmin/DashboardAdmin";
import DashboardUser from "./DashboardUser/DashboardUser";
import { useSearchParams } from "react-router-dom";
import { initAuth } from "@/utils/auth";
import { useDispatch } from "react-redux";
import { USER_UPDATE_PROFILE } from "@/redux/userSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(
    searchParams.get("mode")?.toUpperCase()
  );

  useEffect(() => {
    (async () => {
      dispatch(
        USER_UPDATE_PROFILE({
          id: await initAuth(),
        })
      );
    })();
  }, []);

  if (isAuthenticated === "ADMIN") return <DashboardAdmin />;

  if (isAuthenticated === "USER") return <DashboardUser />;

  return null;
};

export default Dashboard;
