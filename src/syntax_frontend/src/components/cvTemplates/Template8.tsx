import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";

function Template8({cvData}: {cvData : Record<string, any>}) {
  // Mock data for demonstration
  const mockData = {
    firstName: "JONATHAN",
    lastName: "PATTERSON",
    title: "GRAPHIC DESIGNER",
    contact: {
      phone: "123-456-7890",
      email: "hello@mygreatsite.com",
      website: "www.reallygreatsite.com",
      address: "123 Anywhere St., Any City"
    },
    profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus neque nec ullamcorper est. Fusce laoreet interdum sapien, eu fermentum ex placerat eget. Praesent hendrerit nulla in lectus placerat. Fusce facilisis venenatis lacus in lobortis. Donec hendrerit libero eget est tempor quis. Nunc sed scelerisque eros, vulputate in ipsum. Vestibulum pellentesque augue in lobortis ullamcorper. In aliquet nisi non finibus molestie pretium. augue in lobortis ullamcorper. In aliquet",
    skills: [
      "Skill name here",
      "Your skill",
      "Special skills",
      "List your skills"
    ],
    education: [
      {
        degree: "Your Degree Name",
        school: "Your Institution Name",
        period: "2016-2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        degree: "Your Degree Name",
        school: "Your Institution Name",
        period: "2014-2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
    languages: [
      { name: "English", level: 100 },
      { name: "German", level: 80 },
      { name: "Spanish", level: 60 }
    ],
    workExperience: [
      {
        title: "Your Job Position here",
        company: "Company name",
        period: "2020-2022",
        responsibilities: [
          "Lorem ipsum dolor est amet consectetur adipiscing elit. Aliquam sagittis",
          "Praesent hendrerit nulla in lectus placerat. Fusce facilisis venenatis lacus in lobortis",
          "Nunc sed scelerisque eros, vulputate in ipsum. Vestibulum pellentesque augue in lobortis ullamcorper",
          "In aliquet nisi non finibus molestie pretium",
          "Fusce non hendrerit. Aliquam sagittis",
          "Sed non efficitur libero. Proin dui non. accumsan sodales semper mattis",
          "Maecenas sed nulla eget velit tristique placerat. Praesent a scelerisque erat",
          "Aliquam sagittis mi at sapien dictum ut consequat massa placerat"
        ]
      },
      {
        title: "Your Job Position here",
        company: "Company name",
        period: "2020-2022",
        responsibilities: [
          "Lorem ipsum dolor est amet consectetur adipiscing elit. Aliquam sagittis",
          "Praesent hendrerit nulla in lectus placerat. Fusce facilisis venenatis lacus in lobortis",
          "Nunc sed scelerisque eros, vulputate in ipsum. Vestibulum pellentesque augue in lobortis ullamcorper",
          "In aliquet nisi non finibus molestie pretium",
          "Fusce non hendrerit. Aliquam sagittis"
        ]
      }
    ]
  };

  // Function to render language level bars
  const LanguageLevel = ({ level }: {level: number}) => (
    <div className="w-32 h-2 bg-gray-200 rounded-full">
      <div 
        className="h-full bg-gray-600 rounded-full" 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-600 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg text-[#575757] pb-28">
        {/* Header Section */}
        <div className="p-8 text-center">
          <h1 className="text-4xl font-light tracking-wide mb-1">
            {mockData.firstName} {mockData.lastName}
          </h1>
          <p className="uppercase tracking-wider text-lg">
            {mockData.title}
          </p>
        </div>

        <div className="flex items-center justify-center"><hr className="border-[#575757] bg-[#575757] h-[2px] w-[95%]" /></div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
          {/* Left Column */}
          <div className="bg-[#F8F8F8] p-8 space-y-8">
            {/* Contact Section */}
            <section className="border-b-2 border-dashed border-[#575757] pb-6">
              <h2 className="font-medium mb-4 text-xl uppercase">Contact</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 ">
                  <GiRotaryPhone className="text-lg" />
                  <span className="text-sm">{mockData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <IoMailSharp className="text-lg" />
                  <span className="text-sm">{mockData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <IoGlobeOutline className="text-lg" />
                  <span className="text-sm">{mockData.contact.website}</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <CiLocationOn className="text-lg" />
                  <span className="text-sm">{mockData.contact.address}</span>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section className="border-b-2 border-dashed border-[#575757] pb-6">
              <h2 className="font-medium mb-4 text-xl uppercase">Skills</h2>
              <ul className="space-y-1">
                {mockData.skills.map((skill, index) => (
                  <li key={index} className="text-sm ">{skill}</li>
                ))}
              </ul>
            </section>

            {/* Education Section */}
            <section className="border-b-2 border-dashed border-[#575757] pb-6" >
              <h2 className="font-medium mb-4 text-xl  uppercase">Education</h2>
              {mockData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="font-medium text-sm">{edu.degree}</h3>
                  <p className=" text-sm">{edu.school}</p>
                  <p className="text-sm">{edu.period}</p>
                  <p className=" text-sm mt-1">{edu.description}</p>
                </div>
              ))}
            </section>

            {/* Languages Section */}
            <section className="">
              <h2 className="font-medium mb-4 text-xl  uppercase">Languages</h2>
              <div className="space-y-3">
                {mockData.languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm ">{lang.name}</span>
                    <LanguageLevel level={lang.level} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="p-8 space-y-8">
            {/* Profile Section */}
            <section className="border-b-2 border-dashed border-[#575757] pb-6">
              <h2 className="font-medium mb-4 text-xl  uppercase">Profile</h2>
              <p className="text-sm  leading-relaxed">
                {mockData.profile}
              </p>
            </section>

            {/* Work Experience Section */}
            <section>
              <h2 className="font-medium mb-6 text-xl  uppercase">Work Experience</h2>
              <div className="space-y-6">
                {mockData.workExperience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex flex-col gap-4">
                        <h3 className="font-bold">{exp.title}</h3>
                      <div className="flex justify-between">
                        <p className=" text-sm">{exp.company}</p>
                      <p className="text-sm">{exp.period}</p>
                      </div>
                    </div>
                    <ul className="list-disc pl-4 space-y-1 mt-4">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm ">{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
        <div className="flex items-center justify-center"><hr className="border-[#575757] bg-[#575757] h-[2px] w-[95%]" /></div>
      </div>
    </div>
  );
}

export default Template8;
