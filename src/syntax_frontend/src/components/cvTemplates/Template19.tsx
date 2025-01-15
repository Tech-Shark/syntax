import React from "react";

function Template19({cvData}: {cvData : Record<string, any>}) {
  // Mock data for demonstration
  const mockData = {
    name: "ESTELLE DARCY",
    title: "UX DESIGNER",
    contact: {
      address: "123 Anywhere St., Any City",
      email: "hello@reallygreatsite.com",
      website: "www.reallygreatsite.com"
    },
    summary: "UX Designer with a focus on delivering impactful results, eager to tackle dynamic challenges and apply creativity to craft intuitive user experiences. Demonstrated proficiency in project management, user-centric problem-solving, and seamless collaboration across teams. Skilled in leveraging state-of-the-art tools and methodologies to streamline processes and elevate user satisfaction.",
    technicalSkills: {
      column1: [
        "Prototyping Tools",
        "User Research",
        "Information Architecture"
      ],
      column2: [
        "Interaction Design",
        "Usability Heuristics",
        "User Testing Tools"
      ],
      column3: [
        "Accessibility",
        "Responsive Design",
        "User Testing Tools"
      ]
    },
    experience: [
      {
        program: "Instant Charts App, Morcelle Program",
        period: "Jan 2023 - Present",
        achievements: [
          "Led development of an advanced automation system, achieving a 15% increase in operational efficiency.",
          "Streamlined manufacturing processes, reducing production costs by 10%.",
          "Implemented preventive maintenance strategies, resulting in a 20% decrease in equipment downtime."
        ]
      },
      {
        program: "System UX Engineer, XarrowAI Industries",
        period: "Feb 2021 - Dec 2022",
        achievements: [
          "Designed and optimized a robotic control system, realizing a 12% performance improvement.",
          "Coordinated testing and validation, ensuring compliance with industry standards.",
          "Provided technical expertise, contributing to a 15% reduction in system failures."
        ]
      }
    ],
    education: [
      {
        program: "UX Industrial Basics and General Application",
        institution: "University of Engineering UX Cohort",
        period: "Aug 2016 - Oct 2019",
        details: [
          "Major in Automotive Technology",
          "Thesis on \"Technological Advancements within the current Mechatronics Industry\""
        ]
      },
      {
        program: "Bachelor of Design in Process Engineering",
        institution: "Engineering University",
        period: "May 2014 - May 2016",
        details: [
          "Relevant coursework in Structural Design and Project Management."
        ]
      }
    ],
    additionalInfo: {
      languages: ["English", "French", "Mandarin"],
      certifications: ["Professional Design Engineer (PDE) License, Project Management Tech (PMT)"],
      awards: ["Most Innovative Employee of the Year (2023), Overall Best Employee Division Two (2024), Onboarding Project Lead (2023)"]
    }
  };

  return (
    <div className="min-h-screen bg-gray-700 p-8">
      <div className="max-w-4xl mx-auto bg-white text-black shadow-lg">
        {/* Header Section */}
        <div className="text-[#0066cc] text-left px-8 py-8">
          <h1 className="text-4xl font-bold mb-1">{mockData.name}</h1>
          <p className="text-black text-2xl text-bold">{mockData.title}</p>
          <p className="text-sm text-black mt-2">
            {mockData.contact.address} | {mockData.contact.email} | {mockData.contact.website}
          </p>
        </div>

        <div className="p-8">
          {/* Summary Section */}
          <section className="mb-8">
            <h2 className="text-[#0066cc] font-medium mb-3 uppercase border-b border-t border-[#0066cc] pb-1">
              Summary
            </h2>
            <p className="text-sm leading-relaxed">
              {mockData.summary}
            </p>
          </section>

          {/* Technical Skills Section */}
          <section className="mb-8">
            <h2 className="text-[#0066cc] font-medium mb-3 uppercase border-b border-t border-[#0066cc] pb-1">
              Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
              <div>
                {mockData.technicalSkills.column1.map((skill, index) => (
                  <p key={index} className="text-sm mb-1 break-words">{skill}</p>
                ))}
              </div>
              <div>
                {mockData.technicalSkills.column2.map((skill, index) => (
                  <p key={index} className="text-sm mb-1 break-words">{skill}</p>
                ))}
              </div>
              <div>
                {mockData.technicalSkills.column3.map((skill, index) => (
                  <p key={index} className="text-sm mb-1 break-words">{skill}</p>
                ))}
              </div>
            </div>
          </section>

          {/* Professional Experience Section */}
          <section className="mb-8">
            <h2 className="text-[#0066cc] font-medium mb-3 uppercase border-b border-t border-[#0066cc] pb-1">
              Professional Experience
            </h2>
            {mockData.experience.map((exp, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                  <h3 className="font-medium break-words">{exp.program}</h3>
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

          {/* Education Section */}
          <section className="mb-8">
            <h2 className="text-[#0066cc] font-medium mb-3 uppercase border-b border-t border-[#0066cc] pb-1">
              Education
            </h2>
            {mockData.education.map((edu, index) => (
              <div key={index} className="mb-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-2 mb-2">
                  <div className="space-y-1">
                    <h3 className="break-words">{edu.program}</h3>
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
            <h2 className="text-[#0066cc] font-medium mb-3 uppercase border-b border-t border-[#0066cc] pb-1">
              Additional Information
            </h2>
            <div className="text-sm">
              <p><strong>Languages:</strong> {mockData.additionalInfo.languages.join(", ")}</p>
              <p><strong>Certifications:</strong> {mockData.additionalInfo.certifications.join(", ")}</p>
              <p><strong>Awards/Activities:</strong> {mockData.additionalInfo.awards.join(", ")}</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default Template19;
