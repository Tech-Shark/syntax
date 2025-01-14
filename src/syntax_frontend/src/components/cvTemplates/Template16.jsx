import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

function Template16({ cvData }) {
  const mockData = {
    firstName: "ITSUKI",
    lastName: "TAKAHASHI",
    title: "SOFTWARE ENGINEER",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      address: "123 Anywhere St., Any City",
      website: "www.reallygreatsite.com"
    },
    education: [
      {
        school: "Fauget University",
        degree: "Computer Science",
        period: "2010-2014"
      },
      {
        school: "Borcelle High School",
        address: "123 Anywhere St., Any City",
        period: "2008-2011"
      }
    ],
    certification: [
      {
        organization: "Liceria & Co.",
        title: "Web Design & Development",
        year: "2019"
      },
      {
        organization: "Fauget Company",
        title: "Web Design & Development",
        year: "2021"
      }
    ],
    workExperience: [
      {
        title: "Web Developer",
        company: "Liceria & Co. / 2019 - Present",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat lacus, condimentum quis hendrerit et, convalis ac quam. Nam faucibus quis dui vel mollis. Cras tincidunt ligula nec nisi vulputate ornare."
      },
      {
        title: "Web Designer",
        company: "Borcelle Company / 2016-2018",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat lacus, condimentum quis hendrerit et, convalis ac quam. Nam faucibus quis dui vel mollis. Cras tincidunt ligula nec nisi vulputate ornare."
      },
      {
        title: "Web Development Intern",
        company: "Fauget / 2014-2015",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent erat lacus, condimentum quis hendrerit et, convalis ac quam. Nam faucibus quis dui vel mollis. Cras tincidunt ligula nec nisi vulputate ornare."
      }
    ],
    skills: [
      "Databases",
      "Networking basics",
      "Operating Systems",
      "Cross-platform software",
      "Encryption",
      "Unit testing",
      "Integration testing",
      "System testing",
      "Critical Thinking",
      "Time management"
    ],
    courses: [
      {
        organization: "Borcelle Tech",
        title: "Web Design & Development",
        year: "2019"
      },
      {
        organization: "Fauget Corp",
        title: "Web Design & Development",
        year: "2020"
      }
    ],
    awards: [
      {
        title: "Best Web Designer and Developer",
        organization: "Liceria & Co.",
        date: "08/2021"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-700 p-8">
      <div className="max-w-4xl mx-auto bg-[#FAFAFA] text-[#454B42] shadow-lg">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12">
          {/* Left Column */}
          <div className="">
        <div className="mb-12 bg-[#FAFAFA] w-full p-10">
          <h1 className="text-5xl font-light mb-1">
            {mockData.firstName}<br/>{mockData.lastName}
          </h1>
          <p className="text-xl mt-2 uppercase tracking-wider">
            {mockData.title}
          </p>
        </div>
            {/* Education Section */}
            <section className="mb-8 pl-10">
              <h2 className="font-medium mb-4 text-xl uppercase">Education</h2>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12">
              {mockData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="">{edu.school}</h3>
                  <p className="text-sm">{edu.degree}</p>
                  {edu.address && (
                    <p className="text-sm">{edu.address}</p>
                  )}
                  <p className="text-sm">{edu.period}</p>
                </div>
              ))}
              </div>
            </section>

            {/* Certification Section */}
            <section className="mb-8 pl-10">
              <h2 className="font-medium mb-4 text-xl uppercase">Certification</h2>
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12">
              {mockData.certification.map((cert, index) => (
                <div key={index} className="mb-4">
                  <h3 className="">{cert.organization}</h3>
                  <p className="text-sm">{cert.title}</p>
                  <p className="text-sm">{cert.year}</p>
                </div>
              ))}
              </div>
            </section>

            {/* Work Experience Section */}
            <section className="pl-8 pb-10">
              <h2 className="font-medium mb-4 uppercase text-xl">Work Experience</h2>
              {mockData.workExperience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-gray-800">{exp.title}</h3>
                  <p className="text-gray-600 text-sm mb-2">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.description}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column */}
          <div className="flex gap-12">
            <div className="w-0.5 h-full bg-gray-600"></div>
            <div className="pt-10">
            {/* Contact Section */}
            <div className="flex flex-col gap-2 mb-8">
              <div className="flex items-center gap-2 text-gray-600">
                <FiPhone className="text-lg" />
                <span className="text-sm">{mockData.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <IoMailOutline className="text-lg" />
                <span className="text-sm">{mockData.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <CiLocationOn className="text-lg" />
                <span className="text-sm">{mockData.contact.address}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <IoGlobeOutline className="text-lg" />
                <span className="text-sm">{mockData.contact.website}</span>
              </div>
            </div>
            {/* Skills Section */}
            <section className="mb-8">
              <h2 className="text-gray-800 font-medium mb-4 text-xl uppercase">Skills</h2>
              <ul className="space-y-1">
                {mockData.skills.map((skill, index) => (
                  <li key={index} className="text-gray-600 text-sm flex items-center gap-2">
                    <span>→</span>
                    {skill}
                  </li>
                ))}
              </ul>
            </section>

            {/* Course Section */}
            <section className="mb-8">
              <h2 className="text-gray-800 font-medium mb-4 text-xl uppercase">Course</h2>
              {mockData.courses.map((course, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-gray-800">{course.organization}</h3>
                  <p className="text-gray-600 text-sm">{course.title}</p>
                  <p className="text-gray-500 text-sm">{course.year}</p>
                </div>
              ))}
            </section>

            {/* Awards Section */}
            <section className="">
              <h2 className="text-gray-800 font-medium mb-4 text-xl uppercase">Awards</h2>
              {mockData.awards.map((award, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-gray-800">{award.title}</h3>
                  <p className="text-gray-600 text-sm">{award.organization}</p>
                  <p className="text-gray-500 text-sm">{award.date}</p>
                </div>
              ))}
            </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template16;
