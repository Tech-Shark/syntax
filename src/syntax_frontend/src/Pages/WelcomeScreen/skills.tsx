import React, { useState } from "react";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import arrow2 from "../../assets/images/arrow2.svg";
import SidebarLinks from "@/components/SidebarLinks";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Skills: React.FC = () => {
  // State for skill inputs and lists
  const [technicalSkill, setTechnicalSkill] = useState("");
  const [technicalSkillsList, setTechnicalSkillsList] = useState<string[]>([]);

  const [softSkill, setSoftSkill] = useState("");
  const [softSkillsList, setSoftSkillsList] = useState<string[]>([]);

  const [industrySkill, setIndustrySkill] = useState("");
  const [industrySkillsList, setIndustrySkillsList] = useState<string[]>([]);

  const [additionalSkill, setAdditionalSkill] = useState("");
  const [additionalSkillsList, setAdditionalSkillsList] = useState<string[]>([]);

  // Handlers for adding skills to the list
  const addSkill = (
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
  const removeSkill = (
    index: number,
    setList: React.Dispatch<React.SetStateAction<string[]>>
  ) => {
    setList((prevList) => prevList.filter((_, i) => i !== index));
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
                {/* Skill Input and List Components */}
                {[
                  {
                    label: "Technical Skill",
                    placeholder: "Advanced JavaScript Development",
                    skill: technicalSkill,
                    setSkill: setTechnicalSkill,
                    skillList: technicalSkillsList,
                    setSkillList: setTechnicalSkillsList,
                  },
                  {
                    label: "Soft Skill",
                    placeholder: "Problem Solving",
                    skill: softSkill,
                    setSkill: setSoftSkill,
                    skillList: softSkillsList,
                    setSkillList: setSoftSkillsList,
                  },
                  {
                    label: "Industry-Specific Skills",
                    placeholder: "Industry-Specific Skills",
                    skill: industrySkill,
                    setSkill: setIndustrySkill,
                    skillList: industrySkillsList,
                    setSkillList: setIndustrySkillsList,
                  },
                  {
                    label: "Additional Skills",
                    placeholder: "Presentation Skills",
                    skill: additionalSkill,
                    setSkill: setAdditionalSkill,
                    skillList: additionalSkillsList,
                    setSkillList: setAdditionalSkillsList,
                  },
                ].map(({ label, placeholder, skill, setSkill, skillList, setSkillList }, idx) => (
                  <div key={idx} className="flex flex-col gap-5">
                    <WelcomeInput
                      label={label}
                      id={label.replace(/\s+/g, "").toLowerCase()}
                      placeholder={placeholder}
                      value={skill}
                      onChange={(e) => setSkill(e.target.value)}
                    />
                    <div
                      className="h-[1.987rem] w-[1.987rem] sm:h-[2.2rem] sm:w-[2.2rem] flex items-center justify-center gap-[0.36056rem] border-2 border-[#5D6078] rounded-full hover:border-black text-[#5D6078] hover:text-black hover:transition-all hover:duration-300 ease-in-out cursor-pointer self-center"
                      onClick={() => addSkill(skill, setSkillList, setSkill)}
                    >
                      <FaPlus className="w-[1.3rem] h-[1.3rem] color-[#5D6078]" />
                    </div>
                    {/* Render Skill List with Remove Button */}
                    <ul className="list-disc pl-5">
                      {skillList.map((skillItem, index) => (
                        <li key={index} className="flex justify-between items-center gap-2">
                          <span>{skillItem}</span>
                          <FaMinus
                            className="cursor-pointer text-[#5D6078] hover:text-red-500 transition-all"
                            onClick={() => removeSkill(index, setSkillList)}
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              </form>
            </div>
            <div className="flex gap-4">
              <BackButton />
              <NextButton to="/education" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
