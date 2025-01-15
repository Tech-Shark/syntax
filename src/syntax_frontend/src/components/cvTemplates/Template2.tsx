import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import LanguageIcon from "@mui/icons-material/Language";
import RoomIcon from "@mui/icons-material/Room";

function Template2({cvData}: {cvData : Record<string, any>}) {
  // Mock data for demonstration
  const mockData = {
    name: "BAILEY DUPONT",
    title: "MARKETING MANAGER",
    contact: {
      phone: "0806-289-8015",
      email: "john.doe@example.com",
      address: "5 Quarters Road, GRA, Ikot Ekpene, Akwa Ibom State, Nigeria",
      website: "www.abn.com"
    },
    interests: [
      "TRAVELING",
      "POLITICS",
      "ARTS & ENTERTAINMENT",
      "ILLUSTRATION"
    ],
    education: [
      {
        level: "MASTER'S DEGREE",
        school: "Top University for Advanced Studies",
        period: "2018 - 2020"
      },
      {
        level: "COLLEGE",
        school: "Amazing College of Technology",
        period: "2014 - 2018"
      },
      {
        level: "SECONDARY SCHOOL",
        school: "Really Great High School",
        period: "2010 - 2014"
      }
    ],
    profile: "I am a qualified and professional web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for details.",
    experience: [
      {
        title: "APPLICATIONS DEVELOPER",
        company: "Really Great Company",
        location: "Australia",
        period: "2016 - Present",
        description: "The opportunity to work in an organization that encourages its engineers to move across different areas such as backend, infrastructure, and mobile development is particularly appealing. I believe this would allow me to further develop my versatility as a developer, which has been a key strength throughout my career.",
        achievements: [
          "Database administration and website design",
          "Built the logic for a streamlined ad-serving platform that scaled",
          "Educational institutions and online classroom management"
        ]
      },
      {
        title: "APPLICATIONS DEVELOPER",
        company: "Really Great Company",
        location: "Australia",
        period: "2016 - Present",
        description: "The opportunity to work in an organization that encourages its engineers to move across different areas such as backend, infrastructure, and mobile development is particularly appealing. I believe this would allow me to further develop my versatility as a developer, which has been a key strength throughout my career.",
        achievements: [
          "Database administration and website design",
          "Built the logic for a streamlined ad-serving platform that scaled",
          "Educational institutions and online classroom management"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-600">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p">
        <div className="max-w-5xl shadow-lg pb-10 bg-white mx-auto w-full flex flex-col items-center">
          {/* NAME AND TITLE */}
          <header className="w-full text-left p-10">
            <h1 className="text-4xl md:text-5xl font-bold">{mockData.name}</h1>
            <h5 className="text-base md:text-lg">{mockData.title}</h5>
          </header>

          <hr className="bg-[#464A4E] font-bold h-[4px] w-full" />

          {/* CONTENT SECTION */}
          <main className="flex flex-wrap md:flex-nowrap w-full">
            {/* LEFT COLUMN */}
            <section className="w-full mt-10 md:w-1/2">
              {/* CONTACTS */}
              <section className="flex flex-col mb-10 gap-6 ml-10 bg-[#EFEFEF] w-[85%] md:w-[90%] px-4 py-10">
                <h1 className="text-2xl md:text-2xl font-normal mb-4">
                  CONTACT
                </h1>
                <div className="font-light flex gap-3 items-center">
                  <GiRotaryPhone className="text-2xl" />
                  <span className="text-sm">{mockData.contact.phone}</span>
                </div>
                <div className="font-light flex gap-3 items-center">
                  <IoMailSharp className="text-2xl" />
                  <span className="text-sm">{mockData.contact.email}</span>
                </div>
                <div className="font-light flex gap-3 items-center">
                  <RoomIcon />
                  <span className="text-sm">{mockData.contact.address}</span>
                </div>
                <div className="font-light text-sm flex gap-3 items-center">
                  <LanguageIcon />
                  <span>{mockData.contact.website}</span>
                </div>
              </section>

              {/* INTERESTS */}
              <section className="mb-6 w-full">
                <div className="pl-10 w-[100%]">
                  <h1 className="text-2xl md:text-2xl px-4 py-2 bg-[#EFEFEF] w-[94%] md:w-full font-normal mb-4">
                    INTERESTS
                  </h1>
                </div>
                <div className="px-10 flex flex-col gap-4">
                  {mockData.interests.map((interest, index) => (
                    <p key={index} className="font-light text-sm">{interest}</p>
                  ))}
                </div>
              </section>

              {/* EDUCATION */}
              <div className="mt-10">
                <div className="pl-10 w-[100%]">
                  <h1 className="text-2xl md:text-2xl px-4 py-2 bg-[#EFEFEF] w-[94%] md:w-full font-normal mb-4">
                    EDUCATION
                  </h1>
                </div>
                <div className="px-10 flex flex-col gap-8">
                  {mockData.education.map((edu, index) => (
                    <div key={index} className="">
                      <p className="font-bold text-sm">{edu.level}</p>
                      <p className="font-light text-sm">{edu.school}</p>
                      <p className="font-normal text-sm">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* RIGHT COLUMN */}
            <section className="w-full ml-10 md:w-2/3">
              {/* PROFILE */}
              <div className="flex flex-wrap md:flex-nowrap mt-8 w-full">
                <div className="w-full md:w-[90%]">
                  <h1 className="text-2xl md:text-2xl w-[94%] md:w-full font-normal mb-4 bg-[#EFEFEF] p-2">
                    PROFILE
                  </h1>
                  <div className="font-light text-sm px-2 py-4">
                    {mockData.profile}
                  </div>
                </div>
              </div>

              {/* EXPERIENCE */}
              <section className="w-full md:w-[90%] mt-10">
                <h1 className="text-2xl md:text-2xl w-[94%] md:w-full font-normal mb-4 bg-[#EFEFEF] p-2 sm:text-left">
                  EXPERIENCE
                </h1>

                {mockData.experience.map((exp, index) => (
                  <div key={index} className="mb-8 mt-20">
                    <div className="flex flex-col gap-4">
                      <div className="font-bold text-sm sm:text-base">
                        {exp.title}
                      </div>
                      <div className="flex flex-col sm:flex-row gap-2">
                        <div className="font-bold text-sm sm:text-base">
                          {exp.company}
                        </div>
                        <div className="bg-black w-full sm:w-0.5 md:h-6 sm:h-4 sm:mx-2 mt-2 sm:mt-0"></div>
                        <div className="font-bold text-sm sm:text-base">
                          {exp.location}
                        </div>
                        <div className="bg-black w-full sm:w-0.5 md:h-6 sm:h-4 sm:mx-2 mt-2 sm:mt-0"></div>
                        <div className="font-bold text-sm sm:text-base">
                          {exp.period}
                        </div>
                      </div>
                      <div className="font-light text-sm sm:text-base px-2 py-4">
                        {exp.description}
                      </div>
                    </div>

                    <ul className="list-disc mt-6 pl-6 sm:pl-10 space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="font-light text-sm sm:text-base">
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </section>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Template2;
