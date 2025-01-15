import React from "react";
import { BsTelephone } from "react-icons/bs";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";

function Template21({cvData}: {cvData : Record<string, any>}) {
  // Mock data for demonstration
  const mockData = {
    firstName: "MARSELINA",
    lastName: "ZALIYANTI",
    title: "Accountant",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      website: "www.reallygreatsite.com"
    },
    workExperience: [
      {
        company: "Ingoude Company",
        period: "2019 - Present",
        title: "Senior Accountant",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        company: "Ingoude Company",
        period: "2019 - Present",
        title: "Accountant",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        company: "Ingoude Company",
        period: "2019 - Present",
        title: "Junior Accountant",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ],
    education: [
      {
        school: "Kembara University",
        period: "2010-2014",
        degree: "Master of Business Administration Accounting",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      },
      {
        school: "Borcelle University",
        period: "2008-2011",
        degree: "Bachelor of Arts Accounting",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
      }
    ],
    skills: {
      personal: [
        "Management Skills",
        "Time Management",
        "Negotiation",
        "Critical Thinking",
        "Communication Skills",
        "Leadership"
      ],
      professional: [
        "Financial Accounting",
        "Managerial Accounting",
        "Financial Reporting",
        "Auditing",
        "Expense Reporting",
        "Accounts Payable",
        "Account Receivable"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-white text-[#696969] shadow-lg p-4 sm:p-6 md:p-8">
        {/* Header Section */}
        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-8">
            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#343434]">
                <span className="block">{mockData.firstName}</span>
                <span className="block">{mockData.lastName}</span>
              </h1>
              <p className="text-gray-600 text-xl sm:text-2xl md:text-3xl mt-2">{mockData.title}</p>
            </div>
            <div className="space-y-1 text-base sm:text-lg text-gray-600">
              <div className="flex items-center gap-2">
                <BsTelephone className="text-gray-400 shrink-0" />
                <span className="break-words">{mockData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <IoMailOutline className="text-gray-400 shrink-0" />
                <span className="break-words">{mockData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <CiLocationOn className="text-gray-400 shrink-0" />
                <span className="break-words">{mockData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <IoGlobeOutline className="text-gray-400 shrink-0" />
                <span className="break-words">{mockData.contact.website}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <section className="mb-8">
          <h2 className="text-[#343434] font-medium mb-4 sm:mb-6 uppercase bg-[#EFEFEF] p-2">
            Work Experience
          </h2>
          <div className="space-y-6">
            {mockData.workExperience.map((exp, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 sm:gap-6">
                <div className="text-gray-600 text-sm">
                  <p className="font-medium sm:font-normal break-words">{exp.company}</p>
                  <p className="break-words">{exp.period}</p>
                </div>
                <div>
                  <h3 className="text-[#343434] font-medium mb-2 break-words">{exp.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-[#343434] font-medium mb-4 sm:mb-6 uppercase bg-[#EFEFEF] p-2">
            Education
          </h2>
          <div className="space-y-6">
            {mockData.education.map((edu, index) => (
              <div key={index} className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-3 sm:gap-6">
                <div className="text-gray-600 text-sm">
                  <p className="font-medium sm:font-normal break-words">{edu.school}</p>
                  <p className="break-words">{edu.period}</p>
                </div>
                <div>
                  <h3 className="text-[#343434] font-medium mb-2 break-words">{edu.degree}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="grid grid-cols-1 sm:grid-cols-[175px_1fr] md:grid-cols-[175px_1fr_1fr] gap-4 sm:gap-6">
          <h2 className="text-[#343434] font-medium uppercase bg-[#EFEFEF] p-2 h-auto sm:h-[20%] w-full sm:w-[80%]">
            Skills
          </h2>
          <div className="mb-4 sm:mb-0">
            <h3 className="text-gray-800 mb-2">Personal</h3>
            <ul className="space-y-1">
              {mockData.skills.personal.map((skill, index) => (
                <li key={index} className="text-sm text-gray-600 break-words">{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#343434] mb-2">Professional</h3>
            <ul className="space-y-1">
              {mockData.skills.professional.map((skill, index) => (
                <li key={index} className="text-sm text-gray-600 break-words">{skill}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Template21;
