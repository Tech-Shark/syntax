import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";

function Template12({cvData}: {cvData : Record<string, any>}) {
  // Mock data for demonstration
  const mockData = {
    name: "DANIEL GALLEGO",
    title: "UX DESIGNER",
    contact: {
      address: "123 Anywhere St., Any City",
      email: "hello@reallygreatsite.com",
      linkedin: "www.linkedin.com",
      phone: "+234 080 1234 5678",
      github: "github.com"
    },
    summary: "UX Designer with a focus on delivering impactful results, eager to tackle dynamic challenges and apply creativity with intuitive user experiences. Demonstrated proficiency in project management, user-centric problem-solving, and seamless collaboration across teams. Skilled in leveraging state-of-the-art tools and methodologies to streamline processes and elevate user satisfaction.",
    technicalSkills: {
      column1: [
        "Prototyping Tools",
        "User Research",
        "Information Architecture"
      ],
      column2: [
        "Interaction Design",
        "Visual Design",
        "Wireframing"
      ],
      column3: [
        "Accessibility",
        "Responsive Design",
        "User Testing Tools"
      ]
    },
    professionalExperience: [
      {
        title: "Instant Charts App, Marcelle Program",
        period: "Jan 2023 - Present",
        achievements: [
          "Led development of an advanced automation system, achieving a 15% increase in operational efficiency.",
          "Streamlined manufacturing processes, reducing production costs by 10%.",
          "Implemented preventive maintenance strategies, resulting in a 20% decrease in equipment downtime."
        ]
      },
      {
        title: "System UX Engineer, XarrowAI Industries",
        period: "Feb 2021 - Dec 2022",
        achievements: [
          "Designed and optimised a robotic control system, realizing a 12% performance improvement.",
          "Coordinated testing and validation, ensuring compliance with industry standards.",
          "Provided technical expertise, contributing to a 15% reduction in system failures."
        ]
      }
    ],
    education: [
      {
        degree: "UX Industrial Basics and General Application",
        school: "University of Engineering UX Cohort",
        period: "Aug 2016 - Oct 2019",
        details: [
          "Major in Automotive Technology",
          "Thesis on \"Technological Advancements within the current Mechatronics Industry\""
        ]
      },
      {
        degree: "Bachelor of Design in Process Engineering",
        school: "Engineering University",
        period: "May 2014 - May 2016",
        details: [
          "Relevant coursework in Structural Design and Project Management"
        ]
      }
    ],
    additionalInfo: {
      languages: ["English", "French", "Mandarin"],
      certifications: ["Professional Design Engineer (PDE) License", "Project Management Tech (PMT)"],
      awards: [
        "Most Innovative Employee of the Year (2023)",
        "Overall Best Employee Division Two (2024)",
        "Outstanding Project Lead (2022)"
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gray-600 p-8">
      <div className="max-w-4xl mx-auto bg-white text-[#1E1E1E] shadow-lg p-8">
        {/* Header Section */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-1">{mockData.name}</h1>
          <h2 className="text-lg mb-3">{mockData.title}</h2>
          
          {/* Contact Info */}
          <div className="flex flex-wrap gap-4 text-sm">
            <div className="flex items-center gap-1">
              <CiLocationOn className="" />
              <span>{mockData.contact.address}</span>
            </div>
            <div className="flex items-center gap-1">
              <IoMailOutline className="" />
              <span>{mockData.contact.email}</span>
            </div>
            <div className="flex items-center gap-1">
              <BsTelephone className="" />
              <span>{mockData.contact.phone}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaLinkedin className="" />
              <span>{mockData.contact.linkedin}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaGithub className="" />
              <span>{mockData.contact.github}</span>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold bg-[#D9D9D9] rounded-xl italic  px-3 py-1 mb-3 uppercase">
            Summary
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {mockData.summary}
          </p>
        </section>

        {/* Technical Skills Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold bg-[#D9D9D9] rounded-xl italic px-3 py-1 mb-3 uppercase">
            Technical Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div>
              {mockData.technicalSkills.column1.map((skill, index) => (
                <p key={index} className="text-sm mb-1">{skill}</p>
              ))}
            </div>
            <div>
              {mockData.technicalSkills.column2.map((skill, index) => (
                <p key={index} className="text-sm mb-1">{skill}</p>
              ))}
            </div>
            <div>
              {mockData.technicalSkills.column3.map((skill, index) => (
                <p key={index} className="text-sm mb-1">{skill}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold bg-[#D9D9D9] rounded-xl italic px-3 py-1 mb-3 uppercase">
            Professional Experience
          </h2>
          {mockData.professionalExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <h3 className="font-medium">{exp.title}</h3>
                <span className="text-sm">{exp.period}</span>
              </div>
              <ul className="list-disc pl-4">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm mb-1">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Education Section */}
        <section className="mb-6">
          <h2 className="text-sm font-bold bg-[#D9D9D9] rounded-xl italic px-3 py-1 mb-3 uppercase">
            Education
          </h2>
          {mockData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <div>
                  <h3 className="font-medium">{edu.degree}</h3>
                  <p className="text-sm">{edu.school}</p>
                </div>
                <span className="text-sm">{edu.period}</span>
              </div>
              <ul className="list-disc pl-4">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-sm mb-1">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Additional Information Section */}
        <section>
          <h2 className="text-sm font-bold bg-[#D9D9D9] rounded-xl italic px-3 py-1 mb-3 uppercase">
            Additional Information
          </h2>
          <div className="text-sm ">
            <p><strong>Languages:</strong> {mockData.additionalInfo.languages.join(", ")}</p>
            <p><strong>Certifications:</strong> {mockData.additionalInfo.certifications.join(", ")}</p>
            <p><strong>Awards/Activities:</strong> {mockData.additionalInfo.awards.join(", ")}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Template12;
