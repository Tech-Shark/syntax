import { useState } from "react";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import arrow2 from "../../assets/images/arrow2.svg";
import SidebarLinks from "@/components/SidebarLinks";

interface Experience {
  id: number;
  jobTitle: string;
  companyName: string;
  duration: string;
  responsibilities: string;
}

const WorkExperience: React.FC = () => {
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [currentExperience, setCurrentExperience] = useState<Experience>({
    id: Date.now(),
    jobTitle: "",
    companyName: "",
    duration: "",
    responsibilities: "",
  });

  const handleInputChange = (key: keyof Experience, value: string) => {
    setCurrentExperience({ ...currentExperience, [key]: value });
  };

  const handleAddExperience = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      currentExperience.jobTitle &&
      currentExperience.companyName &&
      currentExperience.duration &&
      currentExperience.responsibilities
    ) {
      setExperiences([...experiences, { ...currentExperience, id: Date.now() }]);
      setCurrentExperience({
        id: Date.now(),
        jobTitle: "",
        companyName: "",
        duration: "",
        responsibilities: "",
      });
    } else {
      alert("Please fill in all fields before adding an experience.");
    }
  };

  const handleEditExperience = (id: number) => {
    const experienceToEdit = experiences.find((exp) => exp.id === id);
    if (experienceToEdit) {
      setCurrentExperience(experienceToEdit);
      setExperiences(experiences.filter((exp) => exp.id !== id)); // Remove the experience being edited from the list
    }
  };

  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Add Your Experience"
              subheading={`Include details about your past roles. Our AI will suggest \n improvements to make your achievements stand out.`}
            />
            <div className="flex justify-start gap-[7rem]">
              <SidebarLinks />
              <form
                onSubmit={handleAddExperience}
                className="flex flex-col gap-7 align-center justify-center p-3"
              >
                <WelcomeInput
                  label="Job Title"
                  id="jobTitle"
                  placeholder="Software Engineer"
                  value={currentExperience.jobTitle}
                  onChange={(e) =>
                    handleInputChange("jobTitle", e.target.value)
                  }
                />
                <WelcomeInput
                  label="Company Name"
                  id="companyName"
                  placeholder="Syntax"
                  value={currentExperience.companyName}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                />
                <WelcomeInput
                  label="Duration (Start/End Dates)"
                  id="duration"
                  placeholder="4th, Aug 2023 - Present"
                  value={currentExperience.duration}
                  onChange={(e) => handleInputChange("duration", e.target.value)}
                />
                <WelcomeInput
                  label="Key Responsibilities and Achievements"
                  id="responsibilities"
                  placeholder="I...."
                  type="text"
                  isTextArea={true}
                  value={currentExperience.responsibilities}
                  onChange={(e) =>
                    handleInputChange("responsibilities", e.target.value)
                  }
                />
                {/* Save Experience */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-max rounded-[1.8rem] py-2 px-5 bg-white [box-shadow:-2px_-4px_25.7px_0_rgba(0,0,0,0.1),_2px_4px_28.7px_0_rgba(0,0,0,0.1)] self-center"
                >
                  <p className="text-[#3D3F4E] text-center text-lg font-semibold leading-8">
                    Add Experience
                  </p>
                  <div className="flex items-center justify-center bg-[#3D3F4E] w-[2.33rem] h-[2.33rem] rounded-full">
                    <img src={arrow2} alt="Add Experience" />
                  </div>
                </button>
              </form>
            </div>

            {/* Render Added Experiences */}
            <div className="mt-10 w-full flex flex-col gap-6">
              {experiences.map((experience) => (
                <div
                  key={experience.id}
                  className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-start"
                >
                  <div>
                    <h4 className="font-semibold text-lg">
                      {experience.jobTitle} at {experience.companyName}
                    </h4>
                    <p className="text-sm text-black">Duration: {experience.duration}</p>
                    <p className="mt-2 text-sm">Responsibilities: {experience.responsibilities}</p>
                  </div>
                  <button
                    onClick={() => handleEditExperience(experience.id)}
                    className="text-blue-500 text-sm underline"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <BackButton />
              <NextButton to="/skills" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
