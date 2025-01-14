import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";

function Template8({ cvData }) {
  // Mock data for demonstration
  const mockData = {
    firstName: "JONATHAN",
    lastName: "PATTERSON",
    title: "GRAPHIC DESIGNER",
    contact: {
      phone: "123-456-7890",
      email: "hello@mygreatsite.com",
      website: "www.reallygreatsite.com",
      address: "123 Anywhere St., Any City"
    },
    profile: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam cursus neque nec ullamcorper est. Fusce laoreet interdum sapien, eu fermentum ex placerat eget. Praesent hendrerit nulla in lectus placerat. Fusce facilisis venenatis lacus in lobortis. Donec hendrerit libero eget est tempor quis. Nunc sed scelerisque eros, vulputate in ipsum. Vestibulum pellentesque augue in lobortis ullamcorper. In aliquet nisi non finibus molestie pretium. augue in lobortis ullamcorper. In aliquet",
    skills: [
      "Skill name here",
      "Your skill",
      "Special skills",
      "List your skills"
    ],
    education: [
      {
        degree: "Your Degree Name",
        school: "Your Institution Name",
        period: "2016-2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      },
      {
        degree: "Your Degree Name",
        school: "Your Institution Name",
        period: "2014-2016",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      }
    ],
    languages: [
      { name: "English", level: 100 },
      { name: "German", level: 80 },
      { name: "Spanish", level: 60 }
    ],
    workExperience: [
      {
        title: "Your Job Position here",
        company: "Company name",
        period: "2020-2022",
        responsibilities: [
          "Lorem ipsum dolor est amet consectetur adipiscing elit. Aliquam sagittis",
          "Praesent hendrerit nulla in lectus placerat. Fusce facilisis venenatis lacus in lobortis",
          "Nunc sed scelerisque eros, vulputate in ipsum. Vestibulum pellentesque augue in lobortis ullamcorper",
          "In aliquet nisi non finibus molestie pretium",
          "Fusce non hendrerit. Aliquam sagittis",
          "Sed non efficitur libero. Proin dui non. accumsan sodales semper mattis",
          "Maecenas sed nulla eget velit tristique placerat. Praesent a scelerisque erat",
          "Aliquam sagittis mi at sapien dictum ut consequat massa placerat"
        ]
      },
      {
        title: "Your Job Position here",
        company: "Company name",
        period: "2020-2022",
        responsibilities: [
          "Lorem ipsum dolor est amet consectetur adipiscing elit. Aliquam sagittis",
          "Praesent hendrerit nulla in lectus placerat. Fusce facilisis venenatis lacus in lobortis",
          "Nunc sed scelerisque eros, vulputate in ipsum. Vestibulum pellentesque augue in lobortis ullamcorper",
          "In aliquet nisi non finibus molestie pretium",
          "Fusce non hendrerit. Aliquam sagittis"
        ]
      }
    ]
  };

  // Function to render language level bars
  const LanguageLevel = ({ level }) => (
    <div className="w-32 h-2 bg-gray-200 rounded-full">
      <div 
        className="h-full bg-gray-600 rounded-full" 
        style={{ width: `${level}%` }}
      ></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        {/* Header Section */}
        <div className="p-8 text-center">
          <h1 className="text-3xl font-light text-gray-800 tracking-wide mb-1">
            {mockData.firstName} {mockData.lastName}
          </h1>
          <p className="text-gray-600 uppercase tracking-wider text-sm">
            {mockData.title}
          </p>
        </div>

        <hr className="border-gray-200" />

        <div className="grid grid-cols-1 md:grid-cols-[280px_1fr]">
          {/* Left Column */}
          <div className="bg-gray-50 p-8 space-y-8">
            {/* Contact Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Contact</h2>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-gray-600">
                  <GiRotaryPhone className="text-lg" />
                  <span className="text-sm">{mockData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IoMailSharp className="text-lg" />
                  <span className="text-sm">{mockData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <IoGlobeOutline className="text-lg" />
                  <span className="text-sm">{mockData.contact.website}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <CiLocationOn className="text-lg" />
                  <span className="text-sm">{mockData.contact.address}</span>
                </div>
              </div>
            </section>

            {/* Skills Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Skills</h2>
              <ul className="space-y-1">
                {mockData.skills.map((skill, index) => (
                  <li key={index} className="text-sm text-gray-600">{skill}</li>
                ))}
              </ul>
            </section>

            {/* Education Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Education</h2>
              {mockData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-gray-800 font-medium text-sm">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                  <p className="text-gray-600 text-sm mt-1">{edu.description}</p>
                </div>
              ))}
            </section>

            {/* Languages Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Languages</h2>
              <div className="space-y-3">
                {mockData.languages.map((lang, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">{lang.name}</span>
                    <LanguageLevel level={lang.level} />
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="p-8 space-y-8">
            {/* Profile Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-4 uppercase">Profile</h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {mockData.profile}
              </p>
            </section>

            {/* Work Experience Section */}
            <section>
              <h2 className="text-gray-800 font-medium mb-6 uppercase">Work Experience</h2>
              <div className="space-y-6">
                {mockData.workExperience.map((exp, index) => (
                  <div key={index} className="mb-6">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-gray-800 font-medium">{exp.title}</h3>
                        <p className="text-gray-600 text-sm">{exp.company}</p>
                      </div>
                      <span className="text-gray-500 text-sm">{exp.period}</span>
                    </div>
                    <ul className="list-disc pl-4 space-y-1">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx} className="text-sm text-gray-600">{resp}</li>
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

export default Template8;
