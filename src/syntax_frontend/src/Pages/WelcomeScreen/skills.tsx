import React, { useState } from "react";
import WelcomeHeader from "@/components/welcomeHeader";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { updateSkills } from "@/redux/cvDataSlice";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import arrow2 from "../../assets/images/arrow2.svg";
import SidebarLinks from "@/components/SidebarLinks";
import { FaPlus } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Skills: React.FC = () => {
  const [technicalSkill, setTechnicalSkill] = useState("");
  const [technicalSkillsList, setTechnicalSkillsList] = useState<string[]>([]);

  const [softSkill, setSoftSkill] = useState("");
  const [softSkillsList, setSoftSkillsList] = useState<string[]>([]);

  const [industrySkill, setIndustrySkill] = useState("");
  const [industrySkillsList, setIndustrySkillsList] = useState<string[]>([]);

  const [additionalSkill, setAdditionalSkill] = useState("");
  const [additionalSkillsList, setAdditionalSkillsList] = useState<string[]>([]);

  const navigate = useNavigate();
  
  let cvData = useSelector(
    (state: RootState) => state.cvData
  );

  const dispatch = useDispatch<AppDispatch>();

  const addSkill = (
    skill: string,
    setList: React.Dispatch<React.SetStateAction<string[]>> | any,
    setSkill: React.Dispatch<React.SetStateAction<string>>,
    skillCategory: string
  ) => {
    if (skill.trim()) {
      let finalCat;
      if(skillCategory === 'Industry-Specific Skill'){
        finalCat = 'industrySkill' as unknown as keyof typeof cvData.skills
      }else if (skillCategory === "Technical Skill"){
        finalCat = 'technicalSkill' as unknown as keyof typeof cvData.skills
      }else if (skillCategory === "Soft Skill"){
      finalCat = 'softSkill' as unknown as keyof typeof cvData.skills
      }else{
        finalCat = 'additionalSkill' as unknown as keyof typeof cvData.skills
      }
      const updatedSkills = [...cvData.skills[finalCat], { skillName: skill }];

      dispatch(updateSkills({
        category: finalCat,
        updatedSkills,
      }));

      setList((prevList:any) => [...prevList, skill]);
      setSkill("");
    }
  };


  const removeSkill = (
    index: number,
    setList: React.Dispatch<React.SetStateAction<string[]>> | any,
    skillCategory: string
  ) => {
    let finalCat;
    if (skillCategory === "Industry-Specific Skill") {
      finalCat = "industrySkill" as keyof typeof cvData.skills;
    } else if (skillCategory === "Technical Skill") {
      finalCat = "technicalSkill" as keyof typeof cvData.skills;
    } else if (skillCategory === "Soft Skill") {
      finalCat = "softSkill" as keyof typeof cvData.skills;
    } else {
      finalCat = "additionalSkill" as keyof typeof cvData.skills;
    }
  
    const updatedSkills = cvData.skills[finalCat].filter((_, i) => i !== index);
  
    dispatch(updateSkills({
      category: finalCat,
      updatedSkills,
    }));
    setList(updatedSkills);
  };

  const handleValidation = () => {
    let newError = "";

    if (technicalSkillsList.length === 0 &&
      softSkillsList.length === 0 &&
      industrySkillsList.length === 0 &&
      additionalSkillsList.length === 0){
        newError = "At least one skill is required";
        toast.error(newError)
        return false
      }
      return true
  };

  const handleNextClick = async () => {
    if (handleValidation()) {
     return navigate("/education");
    }
    return false;
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
                    label: "Industry-Specific Skill",
                    placeholder: "Industry-Specific Skills",
                    skill: industrySkill,
                    setSkill: setIndustrySkill,
                    skillList: industrySkillsList,
                    setSkillList: setIndustrySkillsList,
                  },
                  {
                    label: "Additional Skill",
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
                      onClick={() => addSkill(skill, setSkillList, setSkill, label as keyof typeof cvData.skills)}
                    >
                      <FaPlus className="w-[1.3rem] h-[1.3rem] color-[#5D6078]" />
                    </div>
                    {/* Render Skill List with Remove Button */}
                    <ul className="list-disc pl-5">
                      {skillList.map((skillItem, index) => (
                        <li key={index} className="flex justify-between items-center gap-2">
                          <span>{skillItem}</span>
                          <FaTimes
                            className="cursor-pointer text-red-500 hover:text-gray-500 transition-all"
                            onClick={() => removeSkill(index, setSkillList, label as keyof typeof cvData.skills)}
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
              <NextButton onClick={handleNextClick} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
