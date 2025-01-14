import React from "react";
import { IoMailSharp } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { IoGlobeOutline } from "react-icons/io5";

function Template10({ cvData }) {
  // Mock data for demonstration
  const mockData = {
    name: "Samira Alcaraz",
    title: "Mechanical Engineer",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City, ST 12345",
      portfolio: "www.reallygreatsite.com"
    },
    professionalExperience: [
      {
        title: "Research and Development Engineer",
        company: "The Innovation Lab",
        period: "2030-2035",
        achievements: [
          "Spearheaded the development of advanced materials, resulting in a 15% increase in product efficiency",
          "Conducted comprehensive experiments and data analysis, leading to three published journal papers",
          "Collaborated with cross-functional teams to ideate and prototype innovative solutions for industry-specific challenges"
        ]
      },
      {
        title: "Mechanical Engineer",
        company: "Science and Tech Co.",
        period: "2027-2030",
        achievements: [
          "Created and optimized mechanical systems for manufacturing processes, improving production speed by 20%",
          "Drafted and implemented quality control procedures, reducing defects and inconsistencies by 30%",
          "Supported the creation of detailed project reports and documentation for senior stakeholders"
        ]
      }
    ],
    education: [
      {
        school: "North State University",
        degree: "Master of Science in Mechanical Engineering",
        period: "2025-2027",
        highlights: [
          "GPA: 3.8",
          "Best Thesis Awardee",
          "Recognition for Extended Research Paper"
        ]
      },
      {
        school: "South City College",
        degree: "Bachelor of Science in Mechanical Engineering",
        period: "2021-2025",
        highlights: [
          "GPA: 3.8",
          "Editor-in-Chief, SCC Newsletter",
          "President, The Innovation Society"
        ]
      }
    ],
    certificates: [
      {
        name: "Project Management",
        organization: "The Project Management Institute",
        year: "2027"
      },
      {
        name: "System Optimization",
        organization: "Scrum Learning Society",
        year: "2028"
      },
      {
        name: "Risk Management and Mitigation",
        organization: "Internal Auditors Team",
        year: "2028"
      },
      {
        name: "Vendor Relations",
        organization: "South City College",
        year: "2030"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg p-8">
        {/* Header Section */}
        <div className="flex justify-between items-start mb-6">
          <h1 className="text-2xl font-medium text-gray-900">
            {mockData.name}
          </h1>
          <p className="text-gray-600">{mockData.title}</p>
        </div>

        {/* Contact Information */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-gray-600 mb-6">
          <div className="flex items-center gap-2">
            <FiPhone className="text-gray-400" />
            <span>Phone: {mockData.contact.phone}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoMailSharp className="text-gray-400" />
            <span>Email: {mockData.contact.email}</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Address: {mockData.contact.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <IoGlobeOutline className="text-gray-400" />
            <span>Portfolio: {mockData.contact.portfolio}</span>
          </div>
        </div>

        <hr className="border-gray-300 my-6" />

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 uppercase mb-4">
            Professional Experience
          </h2>
          {mockData.professionalExperience.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <div>
                  <h3 className="text-gray-800 font-medium">{exp.title}</h3>
                  <p className="text-gray-600 text-sm">{exp.company}</p>
                </div>
                <span className="text-gray-600 text-sm">{exp.period}</span>
              </div>
              <ul className="list-disc pl-4 mt-2 space-y-1">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="text-sm text-gray-600">{achievement}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className="border-gray-300 my-6" />

        {/* Education */}
        <section className="mb-6">
          <h2 className="text-sm font-bold text-gray-900 uppercase mb-4">
            Education
          </h2>
          {mockData.education.map((edu, index) => (
            <div key={index} className="mb-4">
              <div className="flex justify-between mb-1">
                <div>
                  <h3 className="text-gray-800">{edu.school}</h3>
                  <p className="text-gray-600 text-sm">{edu.degree}</p>
                </div>
                <span className="text-gray-600 text-sm">{edu.period}</span>
              </div>
              <ul className="list-disc pl-4 mt-2">
                {edu.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-sm text-gray-600">{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className="border-gray-300 my-6" />

        {/* Certificates */}
        <section>
          <h2 className="text-sm font-bold text-gray-900 uppercase mb-4">
            Certificates
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {mockData.certificates.map((cert, index) => (
              <div key={index} className="text-sm">
                <p className="text-gray-800 font-medium">{cert.name} | {cert.year}</p>
                <p className="text-gray-600">{cert.organization}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Template10;
