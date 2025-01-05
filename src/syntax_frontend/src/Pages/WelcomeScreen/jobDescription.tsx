import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import arrow2 from "../../assets/images/arrow2.svg";

const JobDescription: React.FC = () => {
  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Add Job Information"
              subheading="Showcase your awards, certifications, or milestones. Our AI can refine and enhance your descriptions." />
            <form className="flex flex-col gap-7 align-center justify-center p-3">
              <WelcomeInput label="Job Title" id="jobTitle" placeholder="Software Engineer" />
              <WelcomeInput label="Company Name" id="companyName" placeholder="Syntax" />
              <WelcomeInput label="Job Location" id="location"  placeholder="New York, Remote"/>
              <WelcomeInput label="Job Description" id="jobDescription" placeholder="I...." type="text" isTextArea={true} />
              <WelcomeInput label="Job Type" id="jobType" placeholder="Full-time" />
              <WelcomeInput label="Salary Range (Optional)" id="salaryRange"  placeholder="$70,000 - $100,000"/>
            </form> 
            <div className="flex gap-4">
              <BackButton/>
              <NextButton to="/cv-templates" />
            </div>
          </div>
        </div>
      </section>
    </>
  )

};
export default JobDescription;