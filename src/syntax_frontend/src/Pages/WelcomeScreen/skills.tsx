import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { addSkill, removeSkill } from "@/redux/cvDataSlice";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import SidebarLinks from "@/components/SidebarLinks";
import { FaPlus } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const Skills: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const skills = useSelector((state: RootState) => state.cvData.skills);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // State for skill inputs and lists
  const [technicalSkill, setTechnicalSkill] = useState("");
  const [technicalSkillsList, setTechnicalSkillsList] = useState<string[]>([]);

  const [softSkill, setSoftSkill] = useState("");
  const [softSkillsList, setSoftSkillsList] = useState<string[]>([]);

  const [industrySkill, setIndustrySkill] = useState("");
  const [industrySkillsList, setIndustrySkillsList] = useState<string[]>([]);

  const [additionalSkill, setAdditionalSkill] = useState("");
  const [additionalSkillsList, setAdditionalSkillsList] = useState<string[]>([]);


  const categories = [
    {
      label: "Technical Skill",
      placeholder: "Advanced JavaScript Development",
      categoryKey: "technical" as const,
      skill: technicalSkill,
      setSkill: setTechnicalSkill,
    },
    {
      label: "Soft Skill",
      placeholder: "Problem Solving",
      categoryKey: "soft" as const,
      skill: softSkill,
      setSkill: setSoftSkill,
    },
    {
      label: "Industry-Specific Skills",
      placeholder: "Industry-Specific Skills",
      categoryKey: "industry" as const,
      skill: industrySkill,
      setSkill: setIndustrySkill,
    },
    {
      label: "Additional Skills",
      placeholder: "Presentation Skills",
      categoryKey: "additional" as const,
      skill: additionalSkill,
      setSkill: setAdditionalSkill,
    },
  ];

    // Handlers for adding skills to the list
  const handleAddSkill = (
    skill: string,
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    setSkill: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (skill.trim()) {
      setList((prevList) => [...prevList, skill]);
      setSkill("");
    }
  };

  // Handler for removing skills from the list
  const handleRemoveSkill = (
    index: number,
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
  };

  const handleNextClick = () => {
    const hasSkills = Object.values(skills).some((category) => category.length > 0);
    if (!hasSkills) {
      setErrors({ addOneSkill: "Please add at least one skill before proceeding." });
      return false;
    }
    return true;
  };


  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Add Your Skills"
              subheading={`List your key skills, and we’ll help you prioritize and \n organize them for maximum impact.`}
            />
            <div className="flex justify-start gap-[7rem] w-max">
              <SidebarLinks />
              <form className="flex flex-col gap-10 align-center justify-center p-3 sm:p-0 self-center">
                {categories.map(({ label, placeholder, categoryKey, skill, setSkill }) => (
                  <div key={categoryKey} className="flex flex-col gap-5">
                    <WelcomeInput
                      label={label}
                      id={label.replace(/\s+/g, "").toLowerCase()}
                      placeholder={placeholder}
                      value={skill}
                      onChange={(e) => setSkill(e.target.value)}
                    />
                    <div
                      className="h-[1.987rem] w-[1.987rem] sm:h-[2.2rem] sm:w-[2.2rem] flex items-center justify-center gap-[0.36056rem] border-2 border-[#5D6078] rounded-full hover:border-black text-[#5D6078] hover:text-black hover:transition-all hover:duration-300 ease-in-out cursor-pointer self-center"
                      onClick={() => {
                        if (skill.trim()) {
                          dispatch(addSkill({ category: categoryKey, skill: skill.trim() }));
                          setSkill("");
                        }
                      }}
                    >
                      <FaPlus className="w-[1.3rem] h-[1.3rem] color-[#5D6078]" />
                    </div>
                    <ul className="list-disc pl-5">
                      {skills[categoryKey].map((skillItem, index) => (
                        <li key={index} className="flex justify-between items-center gap-2">
                          <span>{skillItem}</span>
                          <FaTimes
                            className="cursor-pointer text-red-500 hover:text-gray-500 transition-all"
                            onClick={() => dispatch(removeSkill({ category: categoryKey, index }))}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {errors.addOneSkill && (
                  <p className="text-red-500 text-sm text-center">{errors.addOneSkill}</p>
                )}
              </form>
            </div>
            <div className="flex gap-4">
              <BackButton />
              <NextButton to="/education" onClick={handleNextClick}/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
