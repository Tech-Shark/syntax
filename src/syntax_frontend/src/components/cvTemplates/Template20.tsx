import React from "react";

function Template20({cvData}: {cvData : Record<string, any>}) {
  // Mock data for demonstration
  const mockData = {
    name: "ESTELLE DARCY",
    title: "PROCESS ENGINEER",
    contact: {
      address: "123 Anywhere St., Any City",
      email: "hello@reallygreatsite.com",
      website: "www.reallygreatsite.com"
    },
    summary: "Practical Engineer with Significant Experience in Process Design. I have worked with some organizations, ensuring a professional approach to my profession, leveraging my expertise to optimize processes and deliver innovative solutions that meet business objectives.",
    professionalExperience: [
      {
        title: "Instrument Tech, Morcelle Program",
        period: "Jan 2024 - Present",
        achievements: [
          "Led development of an advanced automation system, achieving a 15% increase in operational efficiency.",
          "Streamlined manufacturing processes, reducing production costs by 10%.",
          "Implemented preventive maintenance strategies, resulting in a 20% decrease in equipment downtime."
        ]
      },
      {
        title: "Internship, XarrowAI Industries",
        period: "Jun 2022 - Aug 2022",
        achievements: [
          "Designed and optimised a robotic control system, realizing a 12% performance improvement.",
          "Coordinated testing and validation, ensuring compliance with industry standards.",
          "Provided technical expertise, contributing to a 15% reduction in system failures."
        ]
      }
    ],
    projects: [
      {
        title: "Industrial Basics and General Application",
        organization: "University of Engineering Process Cohort",
        period: "Jan 2023 - Jun 2023",
        details: [
          "Automotive Technology",
          "Technological Advancements within the current Chemical & Process Industry",
          "Other relevant information."
        ]
      }
    ],
    skills: {
      row1: ["Prototyping Tools", "Interaction Design", "Accessibility"],
      row2: ["User Research", "Visual Design", "Responsive Design"]
    },
    education: [
      {
        degree: "Bachelor of Design in Process Engineering",
        institution: "Engineering University",
        period: "Sep 2019 - Sep 2023",
        details: ["Relevant coursework in Process Design and Project Management."]
      }
    ],
    additionalInfo: {
      languages: "English, French, Mandarin",
      certifications: "Professional Design Engineer (PDE) License, Project Management Tech (PMT), Structural Process Design (SPD)",
      awards: "Most Innovative Intern of the Year (2022), Overall Best Intern, Division Two (2022), Onboarding Project Lead (2024)"
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 p-8">
      <div className="max-w-4xl mx-auto bg-white text-black shadow-lg p-8">
        {/* Header Section */}
        <div className="mb-8 border-b-2 border-black pb-4">
          <h1 className="text-4xl font-bold mb-1">{mockData.name}</h1>
          <p className="font-bold mb-2 text-2xl">{mockData.title}</p>
          <p className="text-sm">
            {mockData.contact.address} | {mockData.contact.email} | {mockData.contact.website}
          </p>
        </div>

        {/* Summary Section */}
        <section className="mb-8">
          <h2 className=" font-medium mb-3 uppercase border-b border-black pb-1">
            Summary
          </h2>
          <p className="text-sm">
            {mockData.summary}
          </p>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-8">
          <h2 className="font-medium mb-3 uppercase border-b border-black pb-1">
            Professional Experience
          </h2>
          {mockData.professionalExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                <h3 className="break-words">{exp.title}</h3>
                <span className="text-sm whitespace-nowrap">{exp.period}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm leading-relaxed">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="font-medium mb-3 uppercase border-b border-black pb-1">
            Projects
          </h2>
          {mockData.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                <div className="space-y-1">
                  <h3 className="break-words">{project.title}</h3>
                  <p className="text-sm break-words">{project.organization}</p>
                </div>
                <span className="text-sm whitespace-nowrap">{project.period}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="text-sm leading-relaxed">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="font-medium mb-3 uppercase border-b border-black pb-1">
            Skills
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4">
            {mockData.skills.row1.map((skill, index) => (
              <p key={index} className="text-sm break-words">{skill}</p>
            ))}
            {mockData.skills.row2.map((skill, index) => (
              <p key={index} className="text-sm break-words">{skill}</p>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="font-medium mb-3 uppercase border-b border-black pb-1">
            Education
          </h2>
          {mockData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                <div className="space-y-1">
                  <h3 className="break-words">{edu.degree}</h3>
                  <p className="text-sm break-words">{edu.institution}</p>
                </div>
                <span className="text-sm whitespace-nowrap">{edu.period}</span>
              </div>
              <ul className="list-disc pl-5">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-sm leading-relaxed">{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Additional Information Section */}
        <section>
          <h2 className="font-medium mb-3 uppercase border-b border-black pb-1">
            Additional Information
          </h2>
          <div className="text-sm space-y-1">
            <p><strong>Languages:</strong> {mockData.additionalInfo.languages}</p>
            <p><strong>Certifications:</strong> {mockData.additionalInfo.certifications}</p>
            <p><strong>Awards/Activities:</strong> {mockData.additionalInfo.awards}</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Template20;
