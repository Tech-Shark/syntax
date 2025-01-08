import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import arrow2 from "../../assets/images/arrow2.svg";
import SidebarLinks from "@/components/SidebarLinks";

const WorkExperience: React.FC = () => {

  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Add Your Experience"
              subheading={`Include details about your past roles. Our AI will suggest \n improvements to make your achievements stand out.`} />
            <div className="flex justify-start gap-[7rem]">
              <SidebarLinks />
              <form className="flex flex-col gap-7 align-center justify-center p-3">
              <WelcomeInput label="Job Title" id="jobTitle" placeholder="Software Engineer" />
              <WelcomeInput label="Company Name" id="companyName" placeholder="Syntax" />
              <WelcomeInput label="Duration (Start/End Dates)" id="duration"  placeholder="4th, Aug 2023 - Present"/>
               <WelcomeInput
                label="Key Responsibilities and Achievements" id="responsibilities" placeholder="I...." type="text" isTextArea={true} />
              {/* to save work experience */}
              <button type="submit" className="flex items-center justify-center gap-2 w-max rounded-[1.8rem] py-2 px-5 bg-white [box-shadow:-2px_-4px_25.7px_0_rgba(0,0,0,0.1),_2px_4px_28.7px_0_rgba(0,0,0,0.1)] self-center">
                <p className="text-[#3D3F4E] text-center text-lg font-semibold leading-8">Add Experience</p>
                <div  className="flex items-center justify-center bg-[#3D3F4E] w-[2.33rem] h-[2.33rem] rounded-full">
                  <img src={arrow2} alt="Add Experience" />
                </div>
              </button>
              </form> 
            </div>
            <div className="flex gap-4">
              <BackButton/>
              <NextButton to="/skills" />
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
};
export default WorkExperience;