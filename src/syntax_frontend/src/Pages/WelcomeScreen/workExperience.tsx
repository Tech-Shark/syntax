import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import {
  addWorkExperience,
  updateWorkExperience,
  setWorkExperience,
} from "@/redux/cvDataSlice";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import { FaTimes } from "react-icons/fa";
import arrow2 from "@/assets/images/arrow2.svg";
import SidebarLinks from "@/components/SidebarLinks";

const WorkExperience: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const experiences = useSelector((state: RootState) => state.cvData.workExperience);

  const [currentExperience, setCurrentExperience] = useState({
    id: Date.now(),
    jobTitle: "",
    companyName: "",
    duration: "",
    responsibilities: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Auto-populate the form with work experience from Redux
  useEffect(() => {
    if (experiences.length > 0) {
      // If there are pre-existing experiences, display them in the list
      setErrors({}); // Clear any previous validation errors
    }
  }, [experiences]);

  const handleInputChange = (key: keyof typeof currentExperience, value: string) => {
    setCurrentExperience({ ...currentExperience, [key]: value });
    setErrors((prevErrors) => ({ ...prevErrors, [key]: "" })); // Clear errors for the field
  };

  const validateFields = () => {
    const newErrors: Record<string, string> = {};
    if (!currentExperience.jobTitle) newErrors.jobTitle = "Job Title is required.";
    if (!currentExperience.companyName) newErrors.companyName = "Company Name is required.";
    if (!currentExperience.duration) newErrors.duration = "Duration is required.";
    if (!currentExperience.responsibilities)
      newErrors.responsibilities = "Responsibilities are required.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddExperience = (event: React.FormEvent) => {
    event.preventDefault();

    if (validateFields()) {
      // Add experience to Redux
      dispatch(addWorkExperience({ ...currentExperience, id: Date.now() }));

      // Reset form and errors
      setCurrentExperience({
        id: Date.now(),
        jobTitle: "",
        companyName: "",
        duration: "",
        responsibilities: "",
      });
      setErrors({});
    }
  };

  const handleEditExperience = (id: number) => {
    const experienceToEdit = experiences.find((exp) => exp.id === id);
    if (experienceToEdit) {
      setCurrentExperience(experienceToEdit);
    }
  };

  const handleRemoveExperience = (id: number) => {
    const updatedExperiences = experiences.filter((exp) => exp.id !== id);
    dispatch(setWorkExperience(updatedExperiences)); // Update Redux state
  };

  const handleNextClick = () => {
    if (experiences.length === 0) {
      // Show error if no experience is added
      setErrors({
        addOneExperience: "Please add at least one experience before proceeding.",
      });
      return false; // Prevent navigation
    }
    return true; // Allow navigation
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
                  value={currentExperience.jobTitle || ""}
                  onChange={(e) =>
                    handleInputChange("jobTitle", e.target.value)
                  }
                />
                {errors.jobTitle && (
                  <p className="text-red-500 text-sm">{errors.jobTitle}</p>
                )}

                <WelcomeInput
                  label="Company Name"
                  id="companyName"
                  placeholder="Syntax"
                  value={currentExperience.companyName || ""}
                  onChange={(e) =>
                    handleInputChange("companyName", e.target.value)
                  }
                />
                {errors.companyName && (
                  <p className="text-red-500 text-sm">{errors.companyName}</p>
                )}

                <WelcomeInput
                  label="Duration (Start/End Dates)"
                  id="duration"
                  placeholder="4th, Aug 2023 - Present"
                  value={currentExperience.duration || ""}
                  onChange={(e) =>
                    handleInputChange("duration", e.target.value)
                  }
                />
                {errors.duration && (
                  <p className="text-red-500 text-sm ">{errors.duration}</p>
                )}

                <WelcomeInput
                  label="Key Responsibilities and Achievements"
                  id="responsibilities"
                  placeholder="I...."
                  type="text"
                  isTextArea={true}
                  value={currentExperience.responsibilities || ""}
                  onChange={(e) =>
                    handleInputChange("responsibilities", e.target.value)
                  }
                />
                {errors.responsibilities && (
                  <p className="text-red-500 text-sm">
                    {errors.responsibilities}
                  </p>
                )}

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

                {errors.addOneExperience && (
                  <p className="text-red-500 text-sm">{errors.addOneExperience}</p>
                )}
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
                    <p className="mt-2 text-sm">
                      Responsibilities: {experience.responsibilities}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => handleEditExperience(experience.id)}
                      className="text-blue-500 text-sm underline mr-4"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleRemoveExperience(experience.id)}
                      className="text-red-500 text-sm"
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <BackButton />
              <NextButton to="/skills" onClick={handleNextClick} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkExperience;
