import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { IoGlobeOutline } from "react-icons/io5";

function Template5({cvData}: {cvData : Record<string, any>}) {
  // Mock data for demonstration
  const mockData = {
    firstName: "JULIANA",
    lastName: "SILVA",
    title: "Art Director",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      website: "www.reallygreatsite.com",
      address: "123 Anywhere St., Any City, ST 12345",
    },
    aboutMe:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor quis. Nunc sed scelerisque eros. Proin elementum. In elementum vel ut dui tristique feugiat. Maecen convallis, mi sit amet vestibulum mollis, neque nulla vulputate dolor, hendrerit faucibus eros nulla sit amet.",
    education: [
      {
        degree: "Bachelor of Design",
        school: "Wardiere University",
        period: "2008 - 2010",
      },
      {
        degree: "Bachelor of Design",
        school: "Wardiere University",
        period: "2006 - 2008",
      },
    ],
    expertise: ["Web Design", "Branding", "Graphic Design", "SEO", "Marketing"],
    languages: ["English", "French"],
    experience: [
      {
        title: "Digital Marketing Manager",
        company: "Company Name",
        location: "123 Anywhere St., Any City",
        period: "2019 - 2023",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor quis. Nunc sed scelerisque eros elementum sit et dui tristique feugiat.",
      },
      {
        title: "Social Media Manager",
        company: "Company Name",
        location: "123 Anywhere St., Any City",
        period: "2017 - 2019",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor quis. Nunc sed scelerisque eros elementum sit et dui tristique feugiat.",
      },
      {
        title: "Social Media Manager",
        company: "Company Name",
        location: "123 Anywhere St., Any City",
        period: "2015 - 2017",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor quis. Nunc sed scelerisque eros elementum sit et dui tristique feugiat.",
      },
      {
        title: "Social Media Manager",
        company: "Company Name",
        location: "123 Anywhere St., Any City",
        period: "2015 - 2017",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra in lorem at laoreet. Donec hendrerit libero eget est tempor quis. Nunc sed scelerisque eros elementum sit et dui tristique feugiat.",
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-600 p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg">
        <div className="flex justify-center h-[100px] w-[100%] bg-[#F0CFC3] items-center"></div>
        {/* Header Section */}
        <div className="text-center py-12">
          <h1 className="text-5xl font-medium text-gray-800 mb-1">
            {mockData.firstName} {mockData.lastName}
          </h1>
          <p className="text-gray-600 text-2xl">{mockData.title}</p>
        </div>
        <div className="flex justify-end pr-8">
          <hr className="border-b-1 border-black w-[70%] mb-6 mt-2" />
        </div>

        <div className="grid grid-cols-1 mt-10 md:grid-cols-[280px_1fr] px-8 pb-8">
          {/* Left Column */}
          <div className="space-y-6 pr-4">
            {/* Contact Info */}
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

            {/* Education Section */}
            <div>
              <h2 className="text-gray-800 font-bold mb-3 text-2xl uppercase">
                Education
              </h2>
              {mockData.education.map((edu, index) => (
                <div key={index} className="mb-3">
                  <h3 className="text-gray-700 font-medium text-sm">
                    {edu.degree}
                  </h3>
                  <p className="text-gray-600 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-sm">{edu.period}</p>
                </div>
              ))}
            </div>

            {/* Expertise Section */}
            <div>
              <h2
                className="text-gray-800 font-bold
text-2xl mb-3 uppercase"
              >
                Expertise
              </h2>
              <ul className="space-y-1">
                {mockData.expertise.map((skill, index) => (
                  <li key={index} className="text-gray-600 text-sm">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            {/* Language Section */}
            <div>
              <h2
                className="text-gray-800 font-bold
text-2xl mb-3 uppercase"
              >
                Language
              </h2>
              <ul className="space-y-1">
                {mockData.languages.map((language, index) => (
                  <li key={index} className="text-gray-600 text-sm">
                    {language}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 pl-8">
            {/* About Me Section */}
            <div>
              <h2
                className="text-gray-800 font-bold text-2xl mb-3 uppercase"
              >
                About Me
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                {mockData.aboutMe}
              </p>
            </div>

            {/* Work Experience Section */}
            <div>
              <h2
                className="text-gray-800 font-bold text-2xl mb-4 uppercase"
              >
                Work Experience
              </h2>
              <div className="space-y-6 border-l border-gray-800">
                {mockData.experience.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-4"
                  >
                    <div className="absolute w-2 h-2 border border-gray-800 bg-white rounded-full left-[-4.6px] top-2"></div>
                    <div className="mb-1">
                      <p className="text-gray-800 font-medium text-sm">
                        {exp.period}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {exp.company} | {exp.location}
                      </p>
                      <p className="text-gray-800 font-medium">{exp.title}</p>
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template5;
