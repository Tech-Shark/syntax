import React from "react";

interface Contact {
  address: string;
  email: string;
  website: string;
}

interface ProfessionalExperience {
  title: string;
  period: string;
  achievements: string[];
}

interface Project {
  title: string;
  organization: string;
  period: string;
  details: string[];
}

interface Skills {
  row1: string[];
  row2: string[];
}

interface Education {
  degree: string;
  institution: string;
  period: string;
  details: string[];
}

interface AdditionalInfo {
  languages: string;
  certifications: string;
  awards: string;
}

interface CvData {
  name: string;
  title: string;
  contact: Contact;
  summary: string;
  professionalExperience: ProfessionalExperience[];
  projects: Project[];
  skills: Skills;
  education: Education[];
  additionalInfo: AdditionalInfo;
}

interface Template21Props {
  cvData?: CvData;
}

const Template21: React.FC<Template21Props> = ({ cvData }) => {
  const mockData: CvData = {
    name: "ESTELLE DARCY",
    title: "PROCESS ENGINEER",
    contact: {
      address: "123 Anywhere St., Any City",
      email: "hello@reallygreatsite.com",
      website: "www.reallygreatsite.com",
    },
    summary:
      "Practical Engineer with Significant Experience in Process Design. I have worked with some organizations, ensuring a professional approach to my profession, leveraging my expertise to optimize processes and deliver innovative solutions that meet business objectives.",
    professionalExperience: [
      {
        title: "Instrument Tech, Morcelle Program",
        period: "Jan 2024 - Present",
        achievements: [
          "Led development of an advanced automation system, achieving a 15% increase in operational efficiency.",
          "Streamlined manufacturing processes, reducing production costs by 10%.",
          "Implemented preventive maintenance strategies, resulting in a 20% decrease in equipment downtime.",
        ],
      },
      {
        title: "Internship, XarrowAI Industries",
        period: "Jun 2022 - Aug 2022",
        achievements: [
          "Designed and optimised a robotic control system, realizing a 12% performance improvement.",
          "Coordinated testing and validation, ensuring compliance with industry standards.",
          "Provided technical expertise, contributing to a 15% reduction in system failures.",
        ],
      },
    ],
    projects: [
      {
        title: "Industrial Basics and General Application",
        organization: "University of Engineering Process Cohort",
        period: "Jan 2023 - Jun 2023",
        details: [
          "Automotive Technology",
          "Technological Advancements within the current Chemical & Process Industry",
          "Other relevant information.",
        ],
      },
    ],
    skills: {
      row1: ["Prototyping Tools", "Interaction Design", "Accessibility"],
      row2: ["User Research", "Visual Design", "Responsive Design"],
    },
    education: [
      {
        degree: "Bachelor of Design in Process Engineering",
        institution: "Engineering University",
        period: "Sep 2019 - Sep 2023",
        details: ["Relevant coursework in Process Design and Project Management."],
      },
    ],
    additionalInfo: {
      languages: "English, French, Mandarin",
      certifications:
        "Professional Design Engineer (PDE) License, Project Management Tech (PMT), Structural Process Design (SPD)",
      awards:
        "Most Innovative Intern of the Year (2022), Overall Best Intern, Division Two (2022), Onboarding Project Lead (2024)",
    },
  };

  const data = cvData || mockData;

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-1">{data.name}</h1>
          <p className="text-gray-600 mb-2">{data.title}</p>
          <p className="text-sm text-gray-600">
            {data.contact.address} | {data.contact.email} | {data.contact.website}
          </p>
        </div>

        {/* Summary Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Summary
          </h2>
          <p className="text-sm text-gray-600">{data.summary}</p>
        </section>

        {/* Professional Experience Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Professional Experience
          </h2>
          {data.professionalExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-gray-800">{exp.title}</h3>
                <span className="text-gray-500 text-sm">{exp.period}</span>
              </div>
              <ul className="list-disc pl-5 space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Projects Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Projects
          </h2>
          {data.projects.map((project, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-gray-800">{project.title}</h3>
                <span className="text-gray-500 text-sm">{project.period}</span>
              </div>
              <p className="text-gray-600 text-sm mb-2">{project.organization}</p>
              <ul className="list-disc pl-5 space-y-1">
                {project.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Skills
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.skills.row1.map((skill, index) => (
              <p key={index} className="text-sm text-gray-600">
                {skill}
              </p>
            ))}
            {data.skills.row2.map((skill, index) => (
              <p key={index} className="text-sm text-gray-600">
                {skill}
              </p>
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Education
          </h2>
          {data.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.institution}</p>
                </div>
                <span className="text-gray-500 text-sm">{edu.period}</span>
              </div>
              <ul className="list-disc pl-5">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-sm text-gray-600">
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Additional Information Section */}
        <section>
          <h2 className="text-gray-800 font-medium mb-3 uppercase border-b border-gray-300 pb-1">
            Additional Information
          </h2>
          <div className="text-sm text-gray-600 space-y-1">
            <p>
              <strong>Languages:</strong> {data.additionalInfo.languages}
            </p>
            <p>
              <strong>Certifications:</strong> {data.additionalInfo.certifications}
            </p>
            <p>
              <strong>Awards/Activities:</strong> {data.additionalInfo.awards}
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Template21;
