import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Link } from "react-router-dom";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeHeroBanner from "@/assets/images/herobanner2.svg";
import arrow1 from "@/assets/images/arrow1.svg";
import arrow2 from "@/assets/images/arrow2.svg";


const SavedInfo: React.FC = () => {
  // Get all the data from redux store
  const cvData = useSelector((state: RootState) => state.cvData);
  useEffect(() => {
    console.log(`All cv data from redux store: ${JSON.stringify(cvData)}`);
  }, [cvData]);


  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Edit my Info" leftLink="/edit-cv" rightLabel="View Templates" rightLink="/templates">
          <div className="flex justify-center items-center flex-col h-auto w-full pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-[6.25rem]">
          <div className="flex flex-col justify-center items-center gap-5">
            {/* description text */}
            <WelcomeDescription  heading="Your Information Has Been Saved!"
              subheading="We've saved all your details, and they're ready to be used for creating your standout CV."/>
            {/* end description text */} 
            <div className="w-[19.25rem] h-[14.55rem]">
              <img src={WelcomeHeroBanner} alt="" />
            </div>
          </div> 
          <div className="flex flex-col gap-5 items-center">
            <Link to="/job_description" className="flex items-center justify-center gap-2 py-[0.41rem] px-[1.03rem] bg-[#000006] rounded-3xl">
              <p className="text-white text-center font-semibold leading-7 text-[0.928rem]">Start Applying</p>
              <img src={arrow1} alt="Upload CV" className="w-[1.92rem] h-[1.92rem]"/>
            </Link>
            <Link to="/user-dashboard" className="flex items-center justify-center gap-2 self-stretch rounded-[1.8rem] py-[0.65rem] px-5 bg-white [box-shadow:-2px_-4px_25.7px_0_rgba(0,0,0,0.1),_2px_4px_28.7px_0_rgba(0,0,0,0.1)]">
              <p className="text-[#3D3F4E] text-center text-lg font-semibold leading-8">Go to Dashboard</p>
              <div className="flex items-center justify-center bg-[#3D3F4E] w-[2.33rem] h-[2.33rem] rounded-full"><img src={arrow2} alt="Build new cv" /></div>
            </Link>
          </div>
        </div>
        </WelcomeHeader>
      </section>
    </>
  );
};
export default SavedInfo;