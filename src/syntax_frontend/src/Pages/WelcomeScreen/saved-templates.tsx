import { Link } from "react-router-dom";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import purple_hero from "@/assets/images/purple_hero_bg.svg";
import purple_hero2 from "@/assets/images/purple_hero_bg2.svg";
import purple_hero3 from "@/assets/images/purple_hero_bg3.svg";
import arrow1 from "@/assets/images/arrow1.svg";
import arrow2 from "@/assets/images/arrow2.svg";


const SavedTemplates: React.FC = () => {
  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Edit my Info" leftLink="/edit-cv" rightLabel="View Templates" rightLink="/templates">
          <div className="flex justify-center items-center flex-col h-auto w-full pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-[6.25rem]">
          <div className="flex flex-col justify-center items-center gap-5">
            {/* description text */}
            <WelcomeDescription heading={`Your Template Has Been Saved!`}
              subheading={`We've saved all your details, and they're ready to be used  for creating \n your standout CV.`}/>
            {/* end description text */} 
            <div className='group relative lg:h-[17.8rem] group-hover:h-auto group-hover:w-auto min-w-full md:w-4/5 mt-8 overflow-hidden  cursor-pointer pt-10'>
                <img src={purple_hero} alt="Saved Template" className='h-full w-4/5 md:w-full absolute group-hover:-translate-y-6 lg:group-hover:-translate-y-4 transition-all duration-500 ease-in-out left-7 md:left-0 delay-300 group-hover:-translate-x-4' />
                <img src={purple_hero2} alt="saved templates"  className='h-full w-4/5 md:w-full absolute lg:translate-x-[-6rem] -translate-y-0 lg:group-hover:translate-y-1/4 transition-all duration-500 ease-in-out  -left-0 md:left-0 delay-300  group-hover:-rotate-12'/>
                <img src={purple_hero3} alt="saved templates" className='h-full w-4/5 lg:translate-x-[8rem] rotate-0 transition-all duration-500 ease-in-out left-14 md:left-0 lg:group-hover:translate-y-1/4 delay-300  lg:group-hover:rotate-12 '/>
            </div>
          </div> 
          <div className="flex flex-col gap-5 items-center">
            <Link to="/job_description" className="flex items-center justify-center gap-2 py-[0.41rem] px-[1.03rem] bg-[#000006] rounded-3xl">
              <p className="text-white text-center font-semibold leading-7 text-[0.928rem]">Download</p>
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
export default SavedTemplates;