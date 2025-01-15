import React from "react";

function Template10({cvData}: {cvData : Record<string, any>}) {
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
        title: "Research and Development Engineer | 2030-2035",
        company: "The Innovation Lab",
        achievements: [
          "Spearheaded the development of advanced materials, resulting in a 15% increase in product efficiency",
          "Conducted comprehensive experiments and data analysis, leading to three published journal papers",
          "Collaborated with cross-functional teams to ideate and prototype innovative solutions for industry-specific challenges"
        ]
      },
      {
        title: "Mechanical Engineer | 2027-2030",
        company: "Science and Tech Co.",
        achievements: [
          "Assisted in optimizing mechanical systems for manufacturing processes, improving production speed by 20%",
          "Drafted and implemented quality control procedures, reducing defects and inconsistencies by 30%",
          "Supported the creation of detailed project reports and documentation for senior stakeholders"
        ]
      }
    ],
    education: [
      {
        degree: "Master of Science in Mechanical Engineering",
        school: "North State University | 2025-2027",
        details: [
          "GPA: 3.8",
          "Best Thesis Award",
          "Recognition for Extended Research Paper"
        ]
      },
      {
        degree: "Bachelor of Science in Mechanical Engineering",
        school: "South City College | 2021-2025",
        details: [
          "GPA: 3.8",
          "Editor-in-Chief, SCC Newsletter",
          "President, The Innovation Society"
        ]
      }
    ],
    certificates: [
      {
        name: "Project Management | 2027",
        organization: "The Project Management Institute"
      },
      {
        name: "System Optimization | 2028",
        organization: "Scrum Learning Society"
      },
      {
        name: "Risk Management and Mitigation | 2028",
        organization: "Internal Auditors Team"
      },
      {
        name: "Vendor Relations | 2030",
        organization: "South City College"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-600 p-4 sm:p-8">
      <div className="max-w-4xl mx-auto bg-white pb-6 sm:pb-10 shadow-lg p-4 sm:p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between mt-6 sm:mt-10 mb-8 gap-2">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">{mockData.name}</h1>
          <p className="text-xl sm:text-2xl">{mockData.title}</p>
        </div>

        {/* Contact Section */}
        <div className="mb-8 mt-8 sm:mt-20">
          <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4">
            <h2 className="uppercase text-sm font-bold">Contact</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm pb-6 border-b border-black">
              <div className="break-words">Phone: {mockData.contact.phone}</div>
              <div className="break-words">Address: {mockData.contact.address}</div>
              <div className="break-words">Email: {mockData.contact.email}</div>
              <div className="break-words">Portfolio: {mockData.contact.portfolio}</div>
            </div>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4">
            <h2 className="uppercase text-sm font-bold">Professional Experience</h2>
            <div className="flex flex-col gap-4 border-b border-black">
              {mockData.professionalExperience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="font-bold mb-1 break-words">{exp.title}</div>
                  <div className="mb-2">{exp.company}</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4">
            <h2 className="uppercase text-sm font-bold">Education</h2>
            <div className="flex flex-col gap-4 border-b border-black">
              {mockData.education.map((edu, index) => (
                <div key={index} className="mb-6">
                  <div className="font-bold mb-1 break-words">{edu.degree}</div>
                  <div className="mb-2">{edu.school}</div>
                  <ul className="list-disc pl-5 space-y-1">
                    {edu.details.map((detail, idx) => (
                      <li key={idx} className="text-sm">{detail}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificates */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-[150px_1fr] gap-4">
            <h2 className="uppercase text-sm font-bold">Certificates</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {mockData.certificates.map((cert, index) => (
                <div key={index}>
                  <div className="font-bold text-sm break-words">{cert.name}</div>
                  <div className="text-sm">{cert.organization}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template10;
