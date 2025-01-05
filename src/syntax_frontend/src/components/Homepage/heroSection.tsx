import HomeNav from "../homeNav";
import { NextButton } from "../welcomeNavButtons";
import sideArrow from "../../assets/images/sideArrow.svg"
import Magazine from "../magazine";

const HeroSection: React.FC = () => {

  return (
    <>
      <div className="bg-[#e1e0f3] h-auto w-screen"> 
        <HomeNav />
        <div className="flex flex-col items-center justify-center gap-14 lg:gap-28 mt-9">
          <div className="flex flex-col items-center justify-center h-[40rem] md:h-auto
        pt-36 gap-4">
          <div className="flex flex-col items-center justify-center h-full w-screen gap-[3.2rem] text-left p-5 z-10">
            <h1 className="text-5xl font-bold md:text-4xl">AI-Powered Resumes, <br className="md:hidden" /> Tailored to You</h1>
            <p className="text-[1.23rem] font-normal leading-normal md:text-center">Generate a professional, tailored resume in minutes. Just share your skills and job < br className="hidden md:block"/> details, and let our AI build a standout CV designed to impress.</p>
            <div className="flex items-center justify-center">
              <NextButton to="/welcome" text="Build CV" />
            </div>
          </div>
          <div className="bottom-36 -left-9 absolute">
            <img src={sideArrow} alt="side arrow" className="h-52 w-52 md:w-[45rem] md:h-[45rem]"/>
          </div>
          </div>

          <div className="flex items-center justify-center ">
            <Magazine width="w-[20rem] lg:w-[40rem]" height="h-56" />
          </div>
        </div>
      </div>
    </>
  );
};
export default HeroSection;