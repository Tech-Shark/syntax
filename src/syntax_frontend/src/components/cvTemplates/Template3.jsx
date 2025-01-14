import React from "react";
import { IoMailSharp } from "react-icons/io5";
import { GiRotaryPhone } from "react-icons/gi";
import { CiLocationOn } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";

function Template3({ cvData }) {
  // Mock data for demonstration
  const mockData = {
    firstName: "DONNA",
    lastName: "STROUPE",
    title: "Sales Representative",
    contact: {
      email: "hello@reallygreatsite.com",
      phone: "+123-456-7890",
      address: "123 Anywhere St., Any City",
      website: "mygreatsite.com"
    },
    aboutMe: "I am a Sales Representative is a professional who initiates and manages relationships with customers. They serve as their point of contact and lead them from initial outreach through the making of the final purchase by them or someone in their household.",
    education: [
      {
        degree: "BA Sales and Commerce",
        school: "Wireless University",
        years: "2011 - 2015"
      },
      {
        degree: "BA Sales and Commerce",
        school: "Wireless University",
        years: "2015 - 2018"
      }
    ],
    skills: [
      "Fast-moving Consumer Goods",
      "Packaged Consumer Goods Sales",
      "Corporate sales account management",
      "Experience in retail"
    ],
    languages: ["English", "French"],
    experience: [
      {
        title: "Consumer Goods Seller",
        company: "Tremendous Industries",
        period: "Aug 2018 - present",
        responsibilities: [
          "Offer consumer packages to corporate end clients",
          "Meet with clients every quarter to update or renew services",
          "Train junior sales agents"
        ]
      },
      {
        title: "TMCO Sales Agent",
        company: "Tremendous Industries",
        period: "Jul 2015 - Aug 2018",
        responsibilities: [
          "Visited corporate client offices to offer latest products",
          "Built relationships with clients to maintain sales goals and create new opportunities"
        ]
      },
      {
        title: "Sales Agent",
        company: "Tremendous Industries",
        period: "Aug 2014 - Jul 2015",
        responsibilities: [
          "Visited corporate client offices to offer latest products"
        ]
      }
    ],
    references: [
      {
        name: "Estelle Darcy",
        title: "Wordiere Inc. / CEO",
        phone: "123-456-7890",
        email: "estelle@wordiere.com"
      },
      {
        name: "Harper Russo",
        title: "Wordiere Inc. / CEO",
        phone: "123-456-7890",
        email: "harper@wordiere.com"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-600 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg text-[#464A4E] h-[100%]">
        {/* Header with curved background */}
        <div className="relative flex justify-end pt-12 items-end">
          <div className="bg-[#D5DEE6] flex w-[80%] justify-center p-16 rounded-tl-[100px] rounded-bl-[100px]">
            <div className="">
              <h1 className="text-5xl text-[#464A4E]">
                {mockData.firstName} {mockData.lastName}
              </h1>
              <p className="text-gray-600 mt-3 text-lg">{mockData.title}</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 mt-16 md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="space-y-8 w-[100%] bg-[#D5DEE6] rounded-tl-[50px] rounded-tr-[50px] p-10">
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-600">
                <IoMailSharp className="text-lg" />
                <span className="text-sm">{mockData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <GiRotaryPhone className="text-lg" />
                <span className="text-sm">{mockData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CiLocationOn className="text-lg" />
                <span className="text-sm">{mockData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <IoGlobeOutline className="text-lg" />
                <span className="text-sm">{mockData.contact.website}</span>
              </div>
            </div>

            {/* Education */}
            <div>
              <h2 className="text-[#464A4E] font-medium mb-3 text-2xl uppercase">Education</h2>
              <hr className="border-b-1 border-[#464A4E] w-[100%] mb-6"/>
              {mockData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <p className="font-medium text-sm">{edu.degree}</p>
                  <p className="text-sm text-gray-600">{edu.school}</p>
                  <p className="text-sm text-gray-500">{edu.years}</p>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <h2 className="text-[#464A4E] font-medium mb-3 text-2xl uppercase">Skills</h2>
              <hr className="border-b-1 border-[#464A4E] w-[100%] mb-6"/>
              <ul className="space-y-1">
                {mockData.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600 pl-5 relative">
                    <span className="absolute left-0 top-[0.4em] w-1.5 h-1.5 rounded-full bg-gray-600"></span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Languages */}
            <div>
              <h2 className="text-[#464A4E] font-medium mb-3 text-2xl uppercase">Language</h2>
              <hr className="border-b-1 border-[#464A4E] w-[100%] mb-6"/>
              <ul className="space-y-1">
                {mockData.languages.map((language, index) => (
                  <li key={index} className="text-sm text-gray-600">{language}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="md:col-span-2 space-y-8 p-6 mt-4">
            {/* About Me */}
            <div>
              <h2 className="text-[#464A4E] font-medium text-2xl mb-3">ABOUT ME</h2>
              <hr className="border-b-1 border-[#464A4E] w-[100%] mb-6"/>
              <p className="text-sm text-gray-600 leading-relaxed">
                {mockData.aboutMe}
              </p>
            </div>

            {/* Work Experience */}
            <div>
              <h2 className="text-[#464A4E] font-medium text-2xl mb-3">WORK EXPERIENCE</h2>
              <hr className="border-b-1 border-[#464A4E] w-[100%] mb-6"/>
              {mockData.experience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="mb-2">
                    <p className="text-sm text-gray-500">{exp.period}</p>
                    <p className="text-sm text-gray-600">{exp.company}</p>
                    <p className="font-medium text-gray-700">{exp.title}</p>
                  </div>
                  <ul className="list-disc list-inside space-y-1">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="text-sm text-gray-600">{resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* References */}
            <div className="pb-10">
              <h2 className="text-[#464A4E] font-medium text-2xl mb-3">REFERENCES</h2>
              <hr className="border-b-1 border-[#464A4E] w-[100%] mb-6"/>
              <div className="grid grid-cols-2 gap-4">
                {mockData.references.map((ref, index) => (
                  <div key={index}>
                    <p className="font-medium text-gray-700">{ref.name}</p>
                    <p className="text-sm text-gray-600">{ref.title}</p>
                    <p className="text-sm text-gray-500"><span className="font-bold">Phone:</span> {ref.phone}</p>
                    <p className="text-sm text-gray-500"><span className="font-bold">Email:</span> {ref.email}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template3;
