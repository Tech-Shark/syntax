import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

function Template18({cvData}: {cvData : Record<string, any>}) {
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
    <div className="min-h-screen bg-gray-700 p-4 sm:p-6 md:p-8">
      <div className="max-w-3xl mx-auto bg-white text[#343434] shadow-lg px-6 sm:px-12 md:px-20 py-6 sm:py-8 md:py-10">
        {/* Header Section */}
        <div className="mb-6 sm:mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-1 break-words">{mockData.name}</h1>
          <p className="text-xl sm:text-2xl mb-4 text-center">{mockData.title}</p>
          <div className="flex flex-col sm:flex-row sm:justify-center gap-3 sm:gap-8 text-sm border-t border-b border-gray-200 py-3">
            <div className="flex items-center gap-2">
              <BsTelephone className="shrink-0" />
              <span className="break-words">{mockData.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <IoMailOutline className="shrink-0" />
              <span className="break-words">{mockData.contact.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <CiLocationOn className="shrink-0" />
              <span className="break-words">{mockData.contact.address}</span>
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
                <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-4">
                  <div className="text-sm mb-2 sm:mb-0">
                    <div className="font-medium sm:font-normal">{exp.company}</div>
                    <div>{exp.period}</div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{exp.title}</h3>
                    <p className="text-sm leading-relaxed">{exp.description}</p>
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
                <div className="grid grid-cols-1 sm:grid-cols-[120px_1fr] gap-2 sm:gap-4">
                  <div className="text-sm mb-2 sm:mb-0">
                    <div className="font-medium sm:font-normal">{edu.school}</div>
                    <div>{edu.period}</div>
                  </div>
                  <div>
                    <h3 className="font-medium mb-2">{edu.degree}</h3>
                    <p className="text-sm leading-relaxed">{edu.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[140px_1fr_1fr] gap-4 sm:gap-6">
          <h2 className="font-medium uppercase text-left pb-2">
            Skills
          </h2>
          <div className="mb-4 sm:mb-0">
            <h3 className="mb-2">Personal</h3>
            <ul className="space-y-1">
              {mockData.skills.personal.map((skill, index) => (
                <li key={index} className="text-sm break-words">{skill}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-2">Professional</h3>
            <ul className="space-y-1">
              {mockData.skills.professional.map((skill, index) => (
                <li key={index} className="text-sm break-words">{skill}</li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Template18;
