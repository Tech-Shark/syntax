import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import arrow2 from "../../assets/images/arrow2.svg";
import { useEffect, useState } from "react";
import { icServiceCV } from "@/Api/cvHandlers/cvHandlers";
import { toast } from "react-toastify";


interface CVUserInput {
  cv_template : string;
  cv_text : string;
  job_description : string;
};

interface createJobData {
  jobTitle: string
  jobDescription: string
  companyName: string
  jobLocation: string
  jobType: string
  template: string
}

const JobDescription: React.FC = () => {

  const [loading, setLoading] = useState(false)

  const [jobData, setJobData] = useState<createJobData>({
    jobTitle: "",
    jobDescription: "",
    companyName: "",
    jobLocation: "",
    jobType: "",
    template: "",
  });

  const handleDataChange =
    (key: keyof typeof jobData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setJobData((prev: any) => ({ ...prev, [key]: e.target.value }));
      console.log(jobData);
    };

  const handleCreate = async() => {

    setLoading(true)

    const cvData = localStorage.getItem("cvData");

    const data:any = JSON.parse(`${cvData}`);

    const experience:any[] | any = data.workExperience

    const skills = data.skills

    const analyseCvData:CVUserInput = {
      cv_template: jobData.template,
      cv_text:JSON.stringify({skills:skills}),
      job_description: jobData.jobDescription
    }

    try{      
      const analysis = await icServiceCV.analyzeCvData(analyseCvData)
      console.log(analysis)
      if ('Ok' in analysis) {
      setLoading(false)
      toast.success("CV data saved successfully and user profile updated successfully with recent data!");
      // return navigate("/saved-info");
    } else if ('Err' in analysis) {
      setLoading(false)
      toast.error(analysis.Err.message);
    }
  } catch (error) {
    setLoading(false)
    console.error('Error updating profile:', error);
    toast.error("Failed to save CV data");
  }


    //to="/cv-templates"
  }

  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Add Job Information"
              subheading="Showcase your awards, certifications, or milestones. Our AI can refine and enhance your descriptions."
            />
            <form className="flex flex-col gap-7 align-center justify-center p-3">
              <WelcomeInput
                label="Job Title"
                id="jobTitle"
                placeholder="Software Engineer"
                onChange={handleDataChange("jobTitle")}
                value={jobData.jobTitle}
              />
              <WelcomeInput
                label="Company Name"
                id="companyName"
                placeholder="Syntax"
                onChange={handleDataChange("companyName")}
                value={jobData.companyName}
              />
              <WelcomeInput
                label="Job Location"
                id="location"
                placeholder="New York, Remote"
                onChange={handleDataChange("jobLocation")}
                value={jobData.jobLocation}
              />
              <WelcomeInput
                label="Job Description"
                id="jobDescription"
                placeholder="I...."
                type="text"
                isTextArea={true}
                onChange={handleDataChange("jobDescription")}
                value={jobData.jobDescription}
              />
              <WelcomeInput
                label="Job Type"
                id="jobType"
                placeholder="Full-time"
                onChange={handleDataChange("jobType")}
                value={jobData.jobType}
              />
              <WelcomeInput
                label="Salary Range (Optional)"
                id="salaryRange"
                placeholder="default"
                onChange={handleDataChange("template")}
                value={jobData.template}
              />
            </form>
            <div className="flex gap-4">
              <NextButton text={loading ? "Loading" : "Create CV"} onClick={handleCreate}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default JobDescription;
