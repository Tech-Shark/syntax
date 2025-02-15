import AuthLayout from "@/components/authLayout";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "@/contexts/AuthenticationContext";

const Signup: React.FC = () => {
    const {isAuth} = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuth) {
            navigate("/user-dashboard");
        }
    }, [isAuth]);

    return (
        <AuthLayout
            heading="Start Your Journey!"
            subheading="Start Your Journey with Internet Identity."
            altText="(Your anchor is a unique number provided by Internet Identity.)"
            nextButtonTo="/signin-internet"
        />
    );
};

export default Signup;
