import { Link } from "react-router-dom";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeHeroBanner from "../../assets/images/welcomeHerobanner.svg";
import { NextButton } from "@/components/welcomeNavButtons";
import arrow2 from "../../assets/images/arrow2.svg";

const AuthWelcome: React.FC = () => {
  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Back"/>
        <div className="flex justify-center items-center flex-col h-auto w-full pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-[6.25rem]">
          <div className="flex flex-col justify-center items-center gap-5">
            {/* description text */}
            <WelcomeDescription  heading="Secure Login with Internet Identity"
              subheading="Log in or get started with Internet Identity, your secure gateway to all our features."/>
            {/* end description text */} 
            
            <div className="w-[19.25rem] h-[14.55rem]">
              <img src={WelcomeHeroBanner} alt="" />
            </div>
          </div> 
          <div className="flex flex-col gap-5 items-center">
            <NextButton to="/signup" text="Sign Up"/>
            <Link to="/signin" className="flex items-center justify-center gap-2 self-stretch rounded-[1.8rem] py-[0.65rem] px-5 bg-white [box-shadow:-2px_-4px_25.7px_0_rgba(0,0,0,0.1),_2px_4px_28.7px_0_rgba(0,0,0,0.1)]">
              <p className="text-[#3D3F4E] text-center text-lg font-semibold leading-8">Log In</p>
              <div className="flex items-center justify-center bg-[#3D3F4E] w-[2.33rem] h-[2.33rem] rounded-full"><img src={arrow2} alt="Build new cv" /></div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
export default AuthWelcome;