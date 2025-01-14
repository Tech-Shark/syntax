import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

function Template9({ cvData }) {
  // Mock data for demonstration
  const mockData = {
    firstName: "SARAH",
    lastName: "AMELIA",
    title: "WEB DEVELOPER",
    contact: {
      phone: "123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City"
    },
    summary: "I am a qualified and professional web developer with five years of experience in database administration and website design. Strong creative and analytical skills. Team player with an eye for detail.",
    education: [
      {
        level: "SECONDARY SCHOOL",
        school: "Really Great High School",
        period: "2010 - 2014"
      },
      {
        level: "BACHELOR OF TECHNOLOGY",
        school: "Really Great University",
        period: "2014 - 2016"
      }
    ],
    skills: [
      "Web Design",
      "Design Thinking",
      "Wireframe Creation",
      "Front End Coding",
      "Backend Tech",
      "Problem Solving",
      "Computer Literacy",
      "Project Management Tools",
      "Strong Communication"
    ],
    experience: [
      {
        title: "APPLICATIONS DEVELOPER",
        company: "Really Great Company",
        period: "2016 - Present",
        responsibilities: [
          "Database administration and website design",
          "Built the logic for a streamlined ad-serving platform that scaled",
          "Educational institutions and online classroom management"
        ]
      },
      {
        title: "WEB CONTENT MANAGER",
        company: "Really Great Company",
        period: "2014 - 2016",
        responsibilities: [
          "Database administration and website design",
          "Built the logic for a streamlined ad-serving platform that scaled",
          "Educational institutions and online classroom management"
        ]
      },
      {
        title: "ANALYSIS CONTENT",
        company: "Really Great Company",
        period: "2010 - 2014",
        responsibilities: [
          "Database administration and website design",
          "Built the logic for a streamlined ad-serving platform that scaled",
          "Educational institutions and online classroom management"
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-600 p-8">
      <div className="max-w-4xl mx-auto text-[#464A4F] bg-white shadow-lg">
        {/* Header Section */}
        <div className="text-center py-12">
          <h1 className="text-5xl uppercase font-medium tracking-wider mb-2">
            {mockData.firstName} {mockData.lastName}
          </h1>
          <p className="uppercase text-xl tracking-wide">
            {mockData.title}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] p-8">
          {/* Left Column */}
          <div className="bg-[#F4EAE9] p-8 space-y-8 gap-4 flex flex-col">
            {/* Contact Section */}
            <section>
              <h2 className="font-medium text-xl mb-4 uppercase">Contact</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <GiRotaryPhone className="text-lg text-[#916264] font-bold" />
                  <span className="text-sm">{mockData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <IoMailSharp className="text-lg text-[#916264] font-bold" />
                  <span className="text-sm">{mockData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CiLocationOn className="text-lg text-[#916264] font-bold" />
                  <span className="text-sm">{mockData.contact.address}</span>
                </div>
              </div>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="font-medium text-xl mb-4 uppercase">Education</h2>
              {mockData.education.map((edu, index) => (
                <div key={index} className="mb-4 flex flex-col gap-2">
                  <h3 className="text-sm font-bold">{edu.level}</h3>
                  <p className="text-sm uppercase">{edu.school}</p>
                  <p className="text-sm font-bold">{edu.period}</p>
                </div>
              ))}
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="font-medium text-xl mb-4 uppercase">Skills</h2>
              <ul className="space-y-1">
                {mockData.skills.map((skill, index) => (
                  <li key={index} className="text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          {/* Right Column */}
          <div className="p-8 space-y-8">
            {/* Summary Section */}
            <section>
              <h2 className="font-medium mb-4 text-xl uppercase">Summary</h2>
              <p className="text-sm leading-relaxed">
                {mockData.summary}
              </p>
            </section>

            {/* Experience Section */}
            <section>
              <h2 className="font-medium mb-6 text-xl uppercase">Experience</h2>
              <div className="space-y-6">
                {mockData.experience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <div className="mb-2">
                      <h3 className="font-bold uppercase">{exp.title}</h3>
                      <p className="text-sm">{exp.company}</p>
                      <p className="text-sm mb-2 font-bold">{exp.period}</p>
                    </div>
                    <ul className="list-disc pl-4 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm">{resp}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template9;
