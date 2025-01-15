import React, { useState } from "react";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import arrow2 from "../../assets/images/arrow2.svg";
import SidebarLinks from "@/components/SidebarLinks";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Achievement: React.FC = () => {
  // State for achievement inputs and lists
  const [award, setAward] = useState("");
  const [awardsList, setAwardsList] = useState<string[]>([]);

  const [certification, setCertification] = useState("");
  const [certificationsList, setCertificationsList] = useState<string[]>([]);

  const [academicHonor, setAcademicHonor] = useState("");
  const [academicHonorsList, setAcademicHonorsList] = useState<string[]>([]);

  const [milestone, setMilestone] = useState("");
  const [milestonesList, setMilestonesList] = useState<string[]>([]);


  // Handlers for adding achievements to the list
  const addAchievement = (
    achievement: string,
    setList: React.Dispatch<React.SetStateAction<string[]>>,
    setAchievement: React.Dispatch<React.SetStateAction<string>>
  ) => {
    if (achievement.trim()) {
      setList((prevList) => [...prevList, achievement]);
      setAchievement("");
    }
  };

  // Handler for removing achievements from the list
  const removeAchievement = (
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
              heading="Highlight Your Achievements"
              subheading={`Showcase your awards, certifications, or milestones. \n Our AI can refine and enhance your descriptions.`}
            />
            <div className="flex justify-start gap-[7rem] w-max">
              <SidebarLinks />
              <form className="flex flex-col gap-10 align-center justify-center p-3 sm:p-0 self-center">
                {/* Achievement Input and List Components */}
                {[
                  {
                    label: "Awards",
                    placeholder: "Professional Awards",
                    achievement: award,
                    setAchievement: setAward,
                    achievementsList: awardsList,
                    setAchievementsList: setAwardsList,
                  },
                  {
                    label: "Certifications",
                    placeholder: "Example: Certified Scrum Master",
                    achievement: certification,
                    setAchievement: setCertification,
                    achievementsList: certificationsList,
                    setAchievementsList: setCertificationsList,
                  },
                  {
                    label: "Academic Honors",
                    placeholder: "Dean’s List",
                    achievement: academicHonor,
                    setAchievement: setAcademicHonor,
                    achievementsList: academicHonorsList,
                    setAchievementsList: setAcademicHonorsList,
                  },
                  {
                    label: "Milestones",
                    placeholder: "Career Milestones",
                    achievement: milestone,
                    setAchievement: setMilestone,
                    achievementsList: milestonesList,
                    setAchievementsList: setMilestonesList,
                  },
                ].map(
                  (
                    {
                      label,
                      placeholder,
                      achievement,
                      setAchievement,
                      achievementsList,
                      setAchievementsList,
                    },
                    idx
                  ) => (
                    <div key={idx} className="flex flex-col gap-5">
                      <WelcomeInput
                        label={label}
                        id={label.replace(/\s+/g, "").toLowerCase()}
                        placeholder={placeholder}
                        value={achievement}
                        onChange={(e) => setAchievement(e.target.value)}
                      />
                      <div
                        className="h-[1.987rem] w-[1.987rem] sm:h-[2.2rem] sm:w-[2.2rem] flex items-center justify-center gap-[0.36056rem] border-2 border-[#5D6078] rounded-full hover:border-black text-[#5D6078] hover:text-black hover:transition-all hover:duration-300 ease-in-out cursor-pointer self-center"
                        onClick={() =>
                          addAchievement(achievement, setAchievementsList, setAchievement)
                        }
                      >
                        <FaPlus className="w-[1.3rem] h-[1.3rem] color-[#5D6078]" />
                      </div>
                      {/* Render Achievement List with Remove Button */}
                      <ul className="list-disc pl-5">
                        {achievementsList.map((item, index) => (
                          <li key={index} className="flex justify-between items-center gap-2">
                            <span>{item}</span>
                            <FaMinus
                              className="cursor-pointer text-[#5D6078] hover:text-red-500 transition-all"
                              onClick={() => removeAchievement(index, setAchievementsList)}
                            />
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}

              </form>
            </div>
            <div className="flex gap-4">
              <BackButton />
              <NextButton to="/portfolio" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Achievement;
