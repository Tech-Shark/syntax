import {Link, useNavigate, useLocation} from "react-router-dom";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeHeroBanner from "../../assets/images/welcomeHerobanner.svg";
import arrow1 from "../../assets/images/arrow1.svg";
import arrow2 from "../../assets/images/arrow2.svg";
import {useEffect} from "react";
import {toast} from "react-toastify";
import {useAuth} from "@/contexts/AuthenticationContext";

const WelcomeScreen: React.FC = () => {

    const navigate = useNavigate();

    const location = useLocation();

    const {isAuth, callFunction} = useAuth();

    useEffect(() => {
        const checkUser = async () => {
            try {
                const getSingleUser = async () => {
                    try {
                        console.log(callFunction);
                        const response = await callFunction.get_single_user();
                        if ('Ok' in response) {
                            return response.Ok;
                        } else if ('Err' in response) {
                            console.log('User not found:', response.Err.message);
                            return response;
                        }

                        return response;
                    } catch (error) {
                        console.error('Error in getSingleUser:', error);
                        throw error;
                    }
                }

                const userCheck = await getSingleUser();
                console.log("User check:", userCheck);

                if ('Err' in userCheck) {
                    console.log("User not found, adding new user");

                    const response = await callFunction.get_all_credit_plan();
                    console.log("Credit Plan Response: ", response);

                    const newUser = await callFunction.add_new_user();
                    console.log("New user added:", newUser);
                }
                toast.success("Welcome back!");
                if (isAuth && !location.state?.fromDashboard) {
                    return navigate("/user-dashboard");
                }
            } catch (error) {
                console.error("Error checking user:", error);
                toast.error("Error checking user profile");
            }
        }

        checkUser()
    }, [])

    return (
        <section className="">
            <WelcomeHeader>
                <div
                    className="flex justify-center items-center flex-col h-auto w-full pt-24 md:pt-20 pb-10 pl-3.5 gap-[6.25rem] ">
                    <div className="flex flex-col justify-center items-center gap-5">
                        {/* description text */}
                        <WelcomeDescription/>
                        {/* end description text */}


                        <div className="w-[19.25rem] h-[14.55rem] md:w-[23rem] md:h-[15rem]">
                            <img src={WelcomeHeroBanner} alt="welcome image"/>
                        </div>
                    </div>

                    <div className="flex flex-col gap-5 items-center justify-center">
                        <Link to="/auth-welcome"
                              className="flex items-center justify-center gap-2 py-[0.41rem] px-[1.03rem] bg-[#000006] rounded-3xl">
                            <p className="text-white text-center font-semibold leading-7 text-[0.928rem] lg:text-[1.2rem]">Upload
                                CV</p>
                            <img src={arrow1} alt="Upload CV" className="w-[1.92rem] h-[1.92rem]"/>
                        </Link>
                        <Link to="/auth-welcome"
                              className="flex items-center justify-center gap-2 self-stretch rounded-[1.8rem] py-[0.65rem] px-5 bg-white [box-shadow:-2px_-4px_25.7px_0_rgba(0,0,0,0.1),_2px_4px_28.7px_0_rgba(0,0,0,0.1)] hover:gap-8 transition-all duration-300">
                            <p className="text-[#3D3F4E] text-center text-lg font-semibold leading-8">Build New CV</p>
                            <div
                                className="flex items-center justify-center bg-[#3D3F4E] w-[2.33rem] h-[2.33rem] rounded-full">
                                <img src={arrow2} alt="Build new cv"/></div>
                        </Link>
                    </div>
                </div>
            </WelcomeHeader>
        </section>
    );
};
export default WelcomeScreen;
