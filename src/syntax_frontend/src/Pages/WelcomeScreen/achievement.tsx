import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { addAchievement, removeAchievement } from "@/redux/cvDataSlice";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import SidebarLinks from "@/components/SidebarLinks";
import { FaPlus } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Achievement: React.FC = () => {
   const dispatch = useDispatch<AppDispatch>();
  const achievements = useSelector((state: RootState) => state.cvData.achievements);
  const [errors, setErrors] = useState("");

  // State for achievement inputs
  const [award, setAward] = useState("");
  const [certification, setCertification] = useState("");
  const [academicHonor, setAcademicHonor] = useState("");
  const [milestone, setMilestone] = useState("");

  const categories = [
    {
      label: "Awards",
      placeholder: "Professional Awards",
      value: award,
      setValue: setAward,
      categoryKey: "awards" as const,
    },
    {
      label: "Certifications",
      placeholder: "Example: Certified Scrum Master",
      value: certification,
      setValue: setCertification,
      categoryKey: "certifications" as const,
    },
    {
      label: "Academic Honors",
      placeholder: "Dean’s List",
      value: academicHonor,
      setValue: setAcademicHonor,
      categoryKey: "academicHonors" as const,
    },
    {
      label: "Milestones",
      placeholder: "Career Milestones",
      value: milestone,
      setValue: setMilestone,
      categoryKey: "milestones" as const,
    },
  ];

  const handleAdd = (category: keyof typeof achievements, value: string, setValue: React.Dispatch<React.SetStateAction<string>>) => {
    if (value.trim()) {
      dispatch(addAchievement({ category, achievement: value.trim() }));
      setValue("");
    }
  };

  const handleNextClick = () => {
    const hasAchievements = Object.values(achievements).some(list => list.length > 0);
    if (!hasAchievements) {
      setErrors("Please add at least one achievement before proceeding.");
      return false;
    }
    setErrors("");
    return true;
  };

  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Highlight Your Achievements"
              subheading={`Showcase your awards, certifications, or milestones. \n Our AI can refine and enhance your descriptions.`}
            />
            <div className="flex justify-start gap-[7rem] w-max">
              <SidebarLinks />
              <form className="flex flex-col gap-10 align-center justify-center p-3 sm:p-0 self-center">
                {categories.map(({ label, placeholder, value, setValue, categoryKey }) => (
                  <div key={categoryKey} className="flex flex-col gap-5">
                    <WelcomeInput
                      label={label}
                      id={label.replace(/\s+/g, "").toLowerCase()}
                      placeholder={placeholder}
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                    <div
                      className="h-[1.987rem] w-[1.987rem] sm:h-[2.2rem] sm:w-[2.2rem] flex items-center justify-center gap-[0.36056rem] border-2 border-[#5D6078] rounded-full hover:border-black text-[#5D6078] hover:text-black hover:transition-all hover:duration-300 ease-in-out cursor-pointer self-center"
                      onClick={() => handleAdd(categoryKey, value, setValue)}
                    >
                      <FaPlus className="w-[1.3rem] h-[1.3rem] color-[#5D6078]" />
                    </div>
                    <ul className="list-disc pl-5">
                      {achievements[categoryKey].map((item, index) => (
                        <li key={index} className="flex justify-between items-center gap-2">
                          <span>{item}</span>
                          <FaTimes
                            className="cursor-pointer text-red-500"
                            onClick={() => dispatch(removeAchievement({ category: categoryKey, index }))}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {errors && <p className="text-red-500 text-sm text-center">{errors}</p>}
              </form>
            </div>
            <div className="flex gap-4">
              <BackButton />
              <NextButton to="/portfolio" onClick={handleNextClick}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievement;
