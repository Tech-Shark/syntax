import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { IoGlobeOutline } from "react-icons/io5";

function Template17({cvData}: {cvData : Record<string, any>}) {
  // Mock data for demonstration
  const mockData = {
    name: "RICHARD SANCHEZ",
    title: "Marketing Manager",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      website: "www.reallygreatsite.com",
    },
    profileSummary:
      "Experienced and results-driven Marketing Manager with a proven track record in developing and executing successful marketing strategies. I am seeking a challenging role where I can contribute my skills in strategic planning, team leadership, and creative problem-solving to achieve business objectives.",
    education: [
      {
        period: "2029 - 2030",
        school: "BORCELLE UNIVERSITY",
        degree: "Master of Business Management",
      },
      {
        period: "2025 - 2029",
        school: "BORCELLE UNIVERSITY",
        degree: "Bachelor of Business Management",
        gpa: "GPA: 3.8 / 4.0",
      },
    ],
    skills: [
      "Project Management",
      "Public Relations",
      "Teamwork",
      "Time Management",
      "Leadership",
      "Effective Communication",
      "Critical Thinking",
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "French", level: "Fluent" },
      { name: "German", level: "Basic" },
      { name: "Spanish", level: "Intermediate" },
    ],
    workExperience: [
      {
        company: "Borcelle Studio",
        title: "Marketing Manager & Specialist",
        period: "2030 - PRESENT",
        achievements: [
          "Led the development and implementation of comprehensive marketing strategies that resulted in a 20% increase in brand visibility and a 15% growth in sales within the first year.",
          "Successfully launched and managed multiple cross-channel marketing campaigns, including digital marketing, social media, and traditional advertising, resulting in improved customer acquisition and retention rates.",
        ],
      },
      {
        company: "Fauget Studio",
        title: "Marketing Manager & Specialist",
        period: "2026 - 2029",
        achievements: [
          "Conducted market research to identify emerging trends and consumer preferences, providing valuable insights for product development and positioning.",
          "Oversaw the creation of engaging content for various platforms, collaborating with internal teams and external agencies to ensure brand consistency and influence.",
        ],
      },
      {
        company: "Studio Shodwe",
        title: "Marketing Manager & Specialist",
        period: "2024 - 2026",
        achievements: [
          "Developed and executed targeted marketing campaigns, resulting in a 25% increase in lead generation.",
          "Implemented SEO strategies that improved website traffic by 30%, enhancing online visibility and positioning the company.",
          "Collaborated with sales teams to create effective sales collateral, presentations, and promotional materials.",
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen p-8 bg-gray-700">
      <div className="max-w-4xl mx-auto text-[#545454] bg-white shadow-lg">
        {/* Header with light blue background */}
        <div className="bg-[#DBEFFE] justify-center flex lg:justify-between sm:justify-center md:justify-center items-center">
          <div className="w-[20%] relative hidden sm:hidden md:hidden lg:block">
            <hr className="border border-black" />
            <div className="rounded-full absolute w-[10px] left-[178px] top-[-4px] h-[10px] border border-black"></div>
          </div>
          <div className="px-8 py-20 text-center">
            <div className="max-w-2xl mx-auto">
              <h1 className="text-4xl font-semibold mb-1 text-[#163853]">
                {mockData.name}
              </h1>
              <p className="text-2xl">{mockData.title}</p>
            </div>
          </div>
          <div className="w-[20%] relative hidden sm:hidden md:hidden lg:block">
            <div className="rounded-full absolute w-[10px] left-[-9px] top-[-4px] h-[10px] border border-black"></div>
            <hr className="border border-black" />
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-[188px_1px_1fr] px-8 gap-10 border-b border-black w-[95%]">
            {/* Contact Section */}
            <section className="pb-10">
              <h2 className="text-[#163853] font-semibold text-2xl mb-4 uppercase">
                <span className="rounded-full bg-[#DBEFFE] p-1">C</span>ontact
              </h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BsTelephone className="" />
                  <span className="text-sm">{mockData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoMailOutline className="" />
                  <span className="text-sm">{mockData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationOn className="" />
                  <span className="text-sm">{mockData.contact.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoGlobeOutline className="" />
                  <span className="text-sm">{mockData.contact.website}</span>
                </div>
              </div>
            </section>

            <div className="border border-black"></div>
            {/* Profile Summary */}
            <section className="">
              <h2 className="text-[#163853] font-semibold mb-4 text-2xl uppercase">
                <span className="rounded-full bg-[#DBEFFE] p-1">P</span>rofile
                Summary
              </h2>
              <p className="text-sm leading-relaxed">
                {mockData.profileSummary}
              </p>
            </section>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[250px_1px_1fr] px-8">
          {/* Left Column */}
          <div className="space-y-8 mt-10">
            {/* Education Section */}
            <section className="border-b relative border-black">
              <div className="rounded-full absolute w-[10px] hidden sm:hidden md:hidden lg:block left-[246px] top-[215px] bg-white h-[10px] border border-black"></div>
              <h2 className="text-[#163853] font-semibold mb-4 text-2xl uppercase">
                <span className="rounded-full bg-[#DBEFFE] p-1">E</span>ducation
              </h2>
              {mockData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="text-sm">{edu.period}</p>
                  <p className="font-medium uppercase text-sm">{edu.school}</p>
                  <p className="text-sm">{edu.degree}</p>
                  {edu.gpa && <p className="text-sm">{edu.gpa}</p>}
                </div>
              ))}
            </section>

            {/* Skills Section */}
            <section className="relative border-b border-black pb-10">
              <div className="rounded-full absolute w-[10px] hidden sm:hidden md:hidden lg:block left-[246px] top-[247px] bg-white h-[10px] border border-black"></div>
              <h2 className="text-[#163853] font-semibold mb-4 text-2xl uppercase">
                <span className="rounded-full bg-[#DBEFFE] p-1">S</span>kills
              </h2>
              <ul className="space-y-1">
                {mockData.skills.map((skill, index) => (
                  <li key={index} className="text-sm">
                    • {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-[#163853] font-semibold mb-4 text-2xl uppercase">
                <span className="rounded-full bg-[#DBEFFE] p-1">L</span>anguages
              </h2>
              <ul className="space-y-1">
                {mockData.languages.map((lang, index) => (
                  <li key={index} className="text-sm">
                    • {lang.name} {lang.level}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="border border-black h-[98%] hidden sm:hidden md:block"></div>
          {/* Right Column */}
          <div className="space-y-8 mt-10 sm:ml-10">
            {/* Work Experience */}
            <section>
              <h2 className="text-[#163853] font-semibold mb-4 text-2xl uppercase">
                <span className="rounded-full bg-[#DBEFFE] p-1">W</span>ork
                Experience
              </h2>
              {mockData.workExperience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="mb-2">
                    <h3 className="font-medium">{exp.company}</h3>
                    <p className="text-sm italic">{exp.title}</p>
                    <p className="text-sm">{exp.period}</p>
                  </div>
                  <ul className="list-disc pl-5 space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template17;
