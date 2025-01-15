import React from "react";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { IoGlobeOutline } from "react-icons/io5";

function Template14({cvData}: {cvData : Record<string, any>}) {
  // Mock data for demonstration
  const mockData = {
    name: "RICHARD SANCHEZ",
    title: "SOFTWARE DEVELOPER",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      website: "www.reallygreatsite.com"
    },
    summary: "Highly skilled and detail-oriented software developer with 5 years of experience designing, developing, and deploying enterprise level applications. Proficient in multiple programming languages, software development methodologies, and database management systems. Strong problem-solving abilities and excellent communication skills.",
    skills: {
      technical: [
        "Strong problem solving",
        "Analytical skills",
        "Interpersonal Skills",
        "Communication",
        "Collaboration",
        "Leadership",
        "Critical thinking",
        "Attention to detail"
      ]
    },
    workExperience: [
      {
        company: "Fradel and Spies Co",
        title: "Software Developer",
        period: "2020 - Present",
        achievements: [
          "Collaborate with cross functional teams to identify and innovate features and requirements",
          "Conduct code reviews and provide feedback to improve code quality",
          "Develop and execute web tests and perform system testing to ensure software quality",
          "Troubleshoot and resolve software defects and issues"
        ]
      },
      {
        company: "Giggling Platypus Co.",
        title: "Software Engineer",
        period: "2018 - 2020",
        achievements: [
          "Developed and maintained software applications",
          "Conducted code reviews and provided feedback to improve code quality",
          "Developed and executed tests and performed system testing to ensure software quality",
          "Troubleshoot and resolved software defects and issues"
        ]
      },
      {
        company: "Keithston and Partners",
        title: "Software Developer",
        period: "Jan 2017 - Jul 2018",
        achievements: [
          "Conduct code reviews and provide feedback to improve code quality",
          "Develop and execute web tests and perform system testing to ensure software quality",
          "Contribute to the continuous improvement of software development processes and best practices"
        ]
      }
    ],
    education: [
      {
        degree: "Master in Data Science & Big Data",
        school: "Sigma University",
        period: "2020-2021"
      },
      {
        degree: "Bachelor of Science in Computer Science",
        school: "Imperial Company",
        period: "2015-2019"
      }
    ],
    certifications: [
      {
        name: "Certified Scrum Developer",
        organization: "Listen & Co",
        year: "2020-2021"
      },
      {
        name: "Certified Kubernetes Administrator",
        organization: "Hanover and Take",
        year: "2019"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-700 p-8">
      <div className="max-w-4xl mx-auto pt-16 bg-white shadow-lg">
        {/* Header Section */}
        <div className="bg-[#D9D9D9] p-4 sm:p-8">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4 sm:gap-6">
            {/* Name and Title */}
            <div className="w-full sm:w-auto">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-1 break-words">
                {mockData.name}
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-gray-600 uppercase tracking-wider">
                {mockData.title}
              </p>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col w-full sm:w-[50%] gap-3 sm:gap-4 text-sm text-gray-600">
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-1">
                <div className="flex items-center gap-2">
                  <BsTelephone className="text-gray-400 shrink-0" />
                  <span className="break-words">{mockData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoMailOutline className="text-gray-400 shrink-0" />
                  <span className="break-words">{mockData.contact.email}</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between gap-2 sm:gap-1">
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
        </div>

        <div className="p-8">
          {/* Summary Section */}
          <section className="mb-8">
            <h2 className="font-bold text-[#A6A6A6] mb-3 uppercase text-sm tracking-wider">Summary</h2>
            <div className="pl-4 border-l-4 border-[#D9D9D9]">
              <p className="text-sm text-[#737373] leading-relaxed">
                {mockData.summary}
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-8">
            <h2 className="text-[#A6A6A6] font-bold mb-3 uppercase text-sm tracking-wider">Skills</h2>
            <div className="pl-4">
              <ul className="grid list-disc grid-cols-2 md:grid-cols-4 gap-4">
                {mockData.skills.technical.map((skill, index) => (
                  <li key={index} className="text-sm text-[#737373]">{skill}</li>
                ))}
              </ul>
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="mb-8">
            <h2 className="text-[#A6A6A6] font-bold mb-3 uppercase text-sm tracking-wider">Work Experience</h2>
            <div className="space-y-6">
              {mockData.workExperience.map((exp, index) => (
                <div className="border-l-4 border-[#D9D9D9] pl-4" key={index}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 mb-2">
                    <div className="space-y-1">
                      <h3 className="text-[#000000] font-medium break-words">{exp.company}</h3>
                      <p className="text-[#737373] text-sm break-words">{exp.title}</p>
                    </div>
                    <span className="text-[#737373] text-sm whitespace-normal sm:whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="list-disc pl-4 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-[#737373] italic">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-[#A6A6A6] font-bold mb-3 uppercase text-sm tracking-wider">Education</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockData.education.map((edu, index) => (
                <div key={index} className="border-l-4 border-[#D9D9D9] pl-4">
                  <h3 className="text-[#000000] font-medium text-sm break-words">{edu.degree}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <div className="text-[#737373] text-sm break-words">{edu.school}</div>
                    <div className="hidden sm:flex text-[#737373] justify-center text-center items-center">--</div>
                    <div className="text-[#737373] text-sm">{edu.period}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="text-[#A6A6A6] font-bold mb-3 uppercase text-sm tracking-wider">Certifications</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockData.certifications.map((cert, index) => (
                <div key={index} className="border-l-4 pl-4 border-[#D9D9D9]">
                  <h3 className="text-[#000000] font-medium text-sm break-words">{cert.name}</h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                    <p className="text-[#737373] text-sm break-words">{cert.organization}</p>
                    <div className="hidden sm:flex text-[#737373] justify-center text-center items-center">--</div>
                    <p className="text-[#737373] text-sm">{cert.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Template14;
