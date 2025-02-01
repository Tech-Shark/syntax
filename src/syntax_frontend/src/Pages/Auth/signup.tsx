import AuthLayout from "@/components/authLayout";
import { useUser } from "../../contexts/AuthContext";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Signup: React.FC = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (user.isAuthenticated) {
      navigate("/user-dashboard");
    }
  }, [user.isAuthenticated, navigate]);

  return (
    <>
      <AuthLayout
        heading="Start Your Journey!"
        subheading="Start Your Journey with Internet Identity."
        altText="(Your anchor is a unique number provided by Internet Identity.)"
        nextButtonTo="/signin-internet"
      /> 
    </>
  );
};

export default Signup;