import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import SidebarLinks from "@/components/SidebarLinks";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import arrow2 from "../../assets/images/arrow2.svg";

const Education: React.FC = () => {

  return (
    <>
         <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Add Your Education"
              subheading="Provide details of your education, from your most recent or relevant degree to previous academic achievements." />
            <div className="flex justify-start gap-[7rem] w-max">
              <SidebarLinks />
              <form className="flex flex-col gap-7 align-center justify-center p-3">
              <WelcomeInput label="Degree Type" id="degreeType" placeholder="Bachelor's" />
              <WelcomeInput label="Field of Study" id="fieldStudy" placeholder="Computer Science" />
              <WelcomeInput label="University/College Name" id="universityName"  placeholder="Stanford University"/>
              <WelcomeInput label="Location" id="location"
                placeholder="Stanford, CA, United States" />
              <WelcomeInput label="Start Date" id="startDate" placeholder="Aug, 2020"/>
              <WelcomeInput
                label="End Date or Expected Graduation Date" id="endDate" placeholder="Aug, 2024" type="text" />
              <WelcomeInput
                label="Class of Degree (Optional)" id="degree" placeholder="First Class" type="text" />
              {/* to save education */}
              <button type="submit" className="flex items-center justify-center gap-2 w-max rounded-[1.8rem] py-2 px-5 bg-white [box-shadow:-2px_-4px_25.7px_0_rgba(0,0,0,0.1),_2px_4px_28.7px_0_rgba(0,0,0,0.1)] self-center">
                <p className="text-[#3D3F4E] text-center text-lg font-semibold leading-8">Add Education</p>
                <div  className="flex items-center justify-center bg-[#3D3F4E] w-[2.33rem] h-[2.33rem] rounded-full">
                  <img src={arrow2} alt="Add Experience" />
                </div>
              </button>
            </form> 
            </div>
            <div className="flex gap-4">
              <BackButton/>
              <NextButton to="/achievements" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Education;