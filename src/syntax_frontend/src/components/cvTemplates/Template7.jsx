import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";
import { BsPersonCircle } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";

function Template7({ cvData }) {
  // Mock data for demonstration
  const mockData = {
    firstName: "RICHARD",
    lastName: "SANCHEZ",
    title: "MARKETING MANAGER",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      website: "www.reallygreatsite.com"
    },
    profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.",
    skills: [
      "Project Management",
      "Leadership",
      "Teamwork",
      "Time Management",
      "Critical Thinking",
      "Effective Communication",
      "Digital Marketing"
    ],
    languages: [
      { name: "English", level: "Fluent" },
      { name: "French", level: "Fluent" },
      { name: "German", level: "Basic" },
      { name: "Spanish", level: "Intermediate" }
    ],
    workExperience: [
      {
        company: "Borcelle Studio",
        title: "Marketing Manager & Specialist",
        period: "2030 - PRESENT",
        achievements: [
          "Develop and execute comprehensive marketing strategies and campaigns",
          "Lead, mentor, and manage a high-performing marketing team fostering a collaborative and results-driven environment",
          "Monitor brand consistency across marketing channels and materials"
        ]
      },
      {
        company: "Peuget Studio",
        title: "Marketing Manager & Specialist",
        period: "2025 - 2029",
        achievements: [
          "Create and manage the marketing budget, ensuring efficient allocation of resources and controlling ROI",
          "Oversee market research to identify emerging trends, customer needs, and competitor strategies"
        ]
      },
      {
        company: "Studio Showbee",
        title: "Marketing Manager & Specialist",
        period: "2024 - 2025",
        achievements: [
          "Develop and maintain strong relationships with partners, agencies, and vendors to support marketing initiatives",
          "Monitor and maintain brand consistency across all marketing channels and materials"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Business Management",
        school: "School of business",
        location: "Wardiere University",
        period: "2020 - 2021",
        gpa: "3.8 / 4.0"
      },
      {
        degree: "Bachelor of Business Management",
        school: "School of business",
        location: "Wardiere University",
        period: "2025 - 2029",
        gpa: "3.8 / 4.0"
      }
    ],
    references: [
      {
        name: "Estelle Darcy",
        title: "Wardiere Inc. / CEO",
        phone: "+124-4526-7890",
        email: "hello@reallygreatsite.com"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header */}
        <div className="bg-[#323B4C] text-white flex flex-col items-end py-8 px-12">
          <h1 className="text-3xl font-bold mb-1">{mockData.firstName} {mockData.lastName}</h1>
          <p className="text-gray-300">{mockData.title}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] text-[#323B4C] gap-8">
          {/* Left Column */}
          <div className="bg-[#E4E4E4] p-8 space-y-6">
            {/* Contact Section */}
            <section>
              <h2 className="text-gray-800 font-semibold text-2xl mb-4 uppercase border-b-2 border-[#323B4C] pb-2">Contact</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <GiRotaryPhone className="text-lg" />
                  <span className="text-sm">{mockData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IoMailSharp className="text-lg" />
                  <span className="text-sm">{mockData.contact.email}</span>
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
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-gray-800 font-semibold mb-4 uppercase border-b-2 text-2xl
border-[#323B4C] pb-2">Skills</h2>
              <ul className="space-y-1">
                {mockData.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">• {skill}</li>
                ))}
              </ul>
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-gray-800 font-semibold mb-4 uppercase border-b-2 text-2xl
border-[#323B4C] pb-2">Languages</h2>
              <ul className="space-y-1">
                {mockData.languages.map((lang, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    • {lang.name} ({lang.level})
                  </li>
                ))}
              </ul>
            </section>

            {/* Reference Section */}
            <section>
              <h2 className="text-gray-800 font-semibold mb-4 uppercase border-b-2 text-2xl
border-[#323B4C] pb-2">Reference</h2>
              {mockData.references.map((ref, index) => (
                <div key={index} className="text-sm">
                  <p className="font-medium text-gray-800">{ref.name}</p>
                  <p className="text-gray-600">{ref.title}</p>
                  <p className="text-gray-600">Phone: {ref.phone}</p>
                  <p className="text-gray-600">Email: {ref.email}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column */}
          <div className="p-8 space-y-8">
            {/* Profile Section */}
            <section className="relative pl-6 border-l-2 border-[#323B4C]">
            <div className="absolute left-[-18px] bg-white top-0 w-10 h-10">
              <BsPersonCircle className="w-[80%] h-full"/>
            </div>
              <div className="flex flex-col">
              <h2 className="text-gray-800 font-semibold mb-3 border-b-2 uppercase text-2xl
border-[#323B4C]">Profile</h2>
              <div className="">
              <div className="absolute left-[-6px] top-20 w-[10px] h-[10px] border border-black bg-white rounded-full"></div>
              <p className="text-sm text-gray-600 leading-relaxed">
                {mockData.profile}
              </p>
              </div>
              </div>
            </section>

            {/* Work Experience Section */}
            <section className="relative pl-6 border-l-2 border-[#323B4C]">
            <div className="absolute left-[-18px] bg-white top-0 w-10 h-10">
              <FaBriefcase className="w-[80%] h-full"/>
            </div>
              <h2 className="text-gray-800 font-semibold mb-4 uppercase text-2xl
border-[#323B4C] border-b-2">Work Experience</h2>
              <div className="space-y-6">
                {mockData.workExperience.map((exp, index) => (
                  <div key={index} className="relative">
                    <div className="mb-2 flex justify-between">
                      <div>
                      <div className="absolute left-[-30px] top-2 w-[10px] h-[10px] border border-black bg-white rounded-full"></div>
                      <h3 className="font-medium text-gray-800">{exp.title}</h3>
                      <p className="text-gray-600 text-sm">{exp.company}</p>
                      </div>
                      <p className="text-gray-500 text-sm">{exp.period}</p>
                    </div>
                    <ul className="list-disc pl-4 space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-sm text-gray-600">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Education Section */}
            <section className="relative pl-6 border-l-2 border-[#323B4C]">
            <div className="absolute left-[-18px] bg-white top-0 w-10 h-10">
              <FaGraduationCap className="w-[80%] h-full"/>
            </div>
              <h2 className="text-gray-800 font-semibold mb-4 uppercase text-2xl
border-[#323B4C] border-b-2">Education</h2>
              {mockData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between relative">
                    <div className="absolute left-[-30px] top-2 w-[10px] h-[10px] border border-black bg-white rounded-full"></div>
                    <div className="">
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.school} | {edu.location}</p>
                    </div>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                  </div>
                  <p className="text-gray-600 text-sm"><span className="font-bold">GPA:</span> {edu.gpa}</p>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template7;
