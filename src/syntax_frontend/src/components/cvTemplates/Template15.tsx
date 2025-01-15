import React from "react";
import { FiPhone } from "react-icons/fi";
import { IoMailOutline } from "react-icons/io5";
import { IoGlobeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

function Template15({cvData}: {cvData : Record<string, any>}) {
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
    <div className="min-h-screen bg-gray-700 p-4 sm:p-6 md:p-8">
      <div className="max-w-4xl mx-auto bg-[#FAFAFA] text-[#454B42] shadow-lg">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 md:gap-8 lg:gap-12">
          {/* Left Column */}
          <div className="flex flex-col">
            <div className="mb-8 sm:mb-12 bg-[#FAFAFA] w-full p-6 sm:p-10">
              <div className="text-center sm:text-left">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-light mb-1">
                  <span className="block sm:inline">{mockData.firstName}</span>
                  <span className="block sm:inline sm:ml-2">{mockData.lastName}</span>
                </h1>
                <p className="text-lg sm:text-xl mt-2 uppercase tracking-wider">
                  {mockData.title}
                </p>
              </div>
            </div>

            {/* Education, Certification, Work Experience sections */}
            <div className="px-4 sm:px-6 lg:px-10">
              {/* Education Section */}
              <section className="mb-8">
                <h2 className="font-medium mb-4 sm:mb-6 text-xl sm:text-2xl uppercase">Education</h2>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 sm:gap-12">
                  {mockData.education.map((edu, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-base sm:text-lg break-words">{edu.school}</h3>
                      <p className="text-sm break-words">{edu.degree}</p>
                      {edu.address && (
                        <p className="text-sm break-words">{edu.address}</p>
                      )}
                      <p className="text-sm">{edu.period}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Certification Section */}
              <section className="mb-8">
                <h2 className="font-medium mb-4 sm:mb-6 text-xl sm:text-2xl uppercase">Certification</h2>
                <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-6 sm:gap-12">
                  {mockData.certification.map((cert, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-base sm:text-lg break-words">{cert.organization}</h3>
                      <p className="text-sm break-words">{cert.title}</p>
                      <p className="text-sm">{cert.year}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Work Experience Section */}
              <section className=" pb-8 sm:pb-10">
                <h2 className="font-medium mb-4 sm:mb-6 uppercase text-xl sm:text-2xl">Work Experience</h2>
                <div className="space-y-6">
                  {mockData.workExperience.map((exp, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-gray-800 text-base sm:text-lg break-words">{exp.title}</h3>
                      <p className="text-gray-600 text-sm mb-2 break-words">{exp.company}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{exp.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex gap-4 sm:gap-6 px-4 sm:px-6 lg:px-0">
            <div className="hidden lg:block w-0.5 bg-[#EBEBEB]"></div>
            <div className="w-full max-w-md lg:max-w-xs pt-6 sm:pt-10">
              {/* Contact Section */}
              <div className="flex flex-col gap-2 mb-8">
                <div className="flex items-center gap-2 text-gray-600 w-full">
                  <FiPhone className="text-lg shrink-0" />
                  <span className="text-sm break-words">{mockData.contact.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 w-full">
                  <IoMailOutline className="text-lg shrink-0" />
                  <span className="text-sm break-words">{mockData.contact.email}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 w-full">
                  <CiLocationOn className="text-lg shrink-0" />
                  <span className="text-sm break-words">{mockData.contact.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600 w-full">
                  <IoGlobeOutline className="text-lg shrink-0" />
                  <span className="text-sm break-words">{mockData.contact.website}</span>
                </div>
              </div>

              {/* Skills, Course, Awards sections */}
              <div className="space-y-8">
                {/* Skills Section */}
                <section>
                  <h2 className="text-gray-800 font-medium mb-4 text-lg sm:text-xl uppercase">Skills</h2>
                  <ul className="space-y-1">
                    {mockData.skills.map((skill, index) => (
                      <li key={index} className="text-gray-600 text-sm flex items-start gap-2">
                        <span className="shrink-0">→</span>
                        <span className="break-words">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Course Section */}
                <section className="mb-8">
                  <h2 className="text-gray-800 font-medium mb-4 text-lg sm:text-xl uppercase">Course</h2>
                  {mockData.courses.map((course, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-gray-800 text-sm sm:text-base break-words">{course.organization}</h3>
                      <p className="text-gray-600 text-sm break-words">{course.title}</p>
                      <p className="text-gray-500 text-sm">{course.year}</p>
                    </div>
                  ))}
                </section>

                {/* Awards Section */}
                <section>
                  <h2 className="text-gray-800 font-medium mb-4 text-lg sm:text-xl uppercase">Awards</h2>
                  {mockData.awards.map((award, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-gray-800 w-[90%] text-sm sm:text-base break-words">{award.title}</h3>
                      <p className="text-gray-600 text-sm break-words">{award.organization}</p>
                      <p className="text-gray-500 text-sm">{award.date}</p>
                    </div>
                  ))}
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template15;
