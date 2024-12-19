import { useState } from "react";
import DashboardAdmin from "./DashboardAdmin";
import DashboardUser from "./DashboardUser/DashboardUser";
import { useSearchParams } from "react-router-dom";

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const [isAuthenticated, setIsAuthenticated] = useState(
    searchParams.get("mode")?.toUpperCase()
  );

  if (isAuthenticated === "ADMIN") return <DashboardAdmin />;

  if (isAuthenticated === "USER") return <DashboardUser />;

  return null;
};

export default Dashboard;
