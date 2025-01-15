import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

function Template19({ cvData }) {
  // Mock data for demonstration
  const mockData = {
    name: "ANNA KATRINA MARCHESI",
    title: "Accountant",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City"
    },
    workExperience: [
      {
        company: "Liceria & Co.",
        period: "2019 - Present",
        title: "Senior Accountant",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        company: "Liceria & Co.",
        period: "2019 - Present",
        title: "Accountant",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      },
      {
        company: "Liceria & Co.",
        period: "2019 - Present",
        title: "Junior Accountant",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      }
    ],
    education: [
      {
        school: "Fauget University",
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
    <div className="min-h-screen bg-gray-700 p-8">
      <div className="max-w-3xl mx-auto bg-white text[#343434] shadow-lg px-20 py-10">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-5xl font-bold text-center mb-1">{mockData.name}</h1>
          <p className="text-2xl mb-4">{mockData.title}</p>
          <div className="flex gap-8 text-sm border-t border-b border-gray-200 py-3">
            <div className="flex items-center gap-2">
              <BsTelephone className="" />
              <span>{mockData.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMailOutline className="" />
              <span>{mockData.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn className="" />
              <span>{mockData.contact.address}</span>
            </div>
          </div>
        </div>

        {/* Work Experience Section */}
        <section className="mb-8">
          <h2 className="font-medium mb-4 uppercase text-center pb-2">
            Work Experience
          </h2>
          <div className="space-y-6">
            {mockData.workExperience.map((exp, index) => (
              <div key={index}>
                <div className="grid grid-cols-[120px_1fr] gap-4">
                  <div className="text-sm">
                    {exp.company}
                    <br />
                    {exp.period}
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{exp.title}</h3>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8 border-b pb-6">
          <h2 className="font-medium mb-4 uppercase text-center pb-2">
            Education
          </h2>
          <div className="space-y-6">
            {mockData.education.map((edu, index) => (
              <div key={index}>
                <div className="grid grid-cols-[120px_1fr] gap-4">
                  <div className="text-sm">
                    {edu.school}
                    <br />
                    {edu.period}
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{edu.degree}</h3>
                    <p className="text-sm">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="grid grid-cols-[140px_1fr_1fr]">
          <h2 className="font-medium mb-4 uppercase text-left pb-2">
            SkillS
          </h2>
          {/* <div className="grid grid-cols-2 gap-8"> */}
            <div>
              <h3 className="mb-2">Personal</h3>
              <ul className="space-y-1">
                {mockData.skills.personal.map((skill, index) => (
                  <li key={index} className="text-sm">{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-2">Professional</h3>
              <ul className="space-y-1">
                {mockData.skills.professional.map((skill, index) => (
                  <li key={index} className="text-sm">{skill}</li>
                ))}
              </ul>
            </div>
          {/* </div> */}
        </section>
      </div>
    </div>
  );
}

export default Template19;
