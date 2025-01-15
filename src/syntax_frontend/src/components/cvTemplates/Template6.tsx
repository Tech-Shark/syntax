import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FiPhone } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
// import { Link } from "react-router-dom ";

function Template6({cvData}: {cvData : Record<string, any>}) {
  // Mock data for demonstration
  const mockData = {
    name: "Veronica Johnson",
    title: "AWS Certified DevOps Engineer",
    summary:
      "DevOps engineer with 5+ years of experience in supporting and automating critical deployments over big infrastructure. Proficient in Jenkins and AWS CodeDeploy. Led a team of 10 at Pear Computers Inc., accelerating the release time by 25%.",
    contact: {
      email: "veronica.johnson@resume.com",
      phone: "1111 234 567",
      location: "Chicago, IL",
      github: "github.com/veronica.johnson",
      linkedin: "linkedin.com/in/veronica.johnson",
      twitter: "veronica.johnson",
    },
    workExperience: [
      {
        title: "DevOps Engineer",
        company: "Pear Computers Inc.",
        period: "07/2018 - Present",
        achievements: [
          "Developed and maintained automated security systems and cut risk of breaches by 60%",
          "Designed new architecture within Google Cloud Platform (GCP) for a lift and shift style move as the first stage cloud migration",
          "Built secure, firewall-protected, and geographically redundant to provision IAAS, Docker with GCP provision and Amazon S3 to take live images, all are coordinated with Jenkins",
          "Reduced the monthly costs by $4,000 by removing unnecessary servers and databases",
          "Was an integral part of the team that developed and monitored cloud infrastructure on AWS and Jenkins",
        ],
      },
      {
        title: "DevOps Engineer",
        company: "Optimal Software",
        period: "09/2016 - 06/2018",
        achievements: [
          "Set up and maintained a 99% uptime of a network of 20+ Unix servers",
          "Used Jenkins to automate build and deployment that reduced human error and sped up production processes",
          "Successfully developed and maintained automated CI/CD pipelines for code deployment using Jenkins while automating the deployment process, resulting in an elimination of 75% of manual work and escalation of work efficiency",
          "Managed local deployments in Kubernetes, creating local cluster and applications deployment/maintenance/nodes",
        ],
      },
      {
        title: "DevOps Engineer",
        company: "Optimal Software",
        period: "09/2016 - 06/2018",
        achievements: [
          "Set up and maintained a 99% uptime of a network of 20+ Unix servers",
          "Used Jenkins to automate build and deployment that reduced human error and sped up production processes",
          "Successfully developed and maintained automated CI/CD pipelines for code deployment using Jenkins while automating the deployment process, resulting in an elimination of 75% of manual work and escalation of work efficiency",
          "Managed local deployments in Kubernetes, creating local cluster and applications deployment/maintenance/nodes",
        ],
      },
    ],
    technicalSkills: {
      systems: [
        "RedHat Enterprise Linux",
        "Ubuntu",
        "CentOS",
        "FedOra",
        "LVM",
        "Bash Shell",
        "Ansible",
      ],
      cloudInfra: [
        "AWS",
        "Linux Shell",
        "CLI/API",
        "VPSs",
        "Auto Scaling",
        "EC2",
        "ELB",
        "Route53",
        "S3",
        "and Amazon S3",
      ],
      servers: [
        "Apache HTTP Server",
        "Load Balancing & Failover",
        "MySQL",
        "NFS and Cross Platform File",
        "Individual Level",
      ],
      networking: [
        "Nagios",
        "Zabbix",
        "VI Log Server",
        "Putsch",
        "Ping",
        "Teletype Network",
        "Network File System",
        "Resolution Protocol",
      ],
      containerization: [
        "Swarm",
        "CoreOS-rkt",
        "Portainer",
        "AWS ECR",
        "Marathon",
        "Hashicorp",
        "Docker Swarm and Kubernetes",
      ],
    },
    softSkills: [
      "Verbal & Written Communication",
      "Flexibility",
      "Time Management",
      "Attention to detail",
    ],
    certificates: [
      { name: "Microsoft Certified Solutions Developer", link: "#" },
      { name: "Google Cloud Certified - Associate Cloud Engineer", link: "#" },
      { name: "AWS Certification (Architecture and Development)", link: "#" },
      { name: "AWS Certified SysOps Admin - Associate", link: "#" },
      { name: "Course in Advanced Operations on AWS", link: "#" },
      { name: "Course in MySQL for Database Administrators", link: "#" },
    ],
    education: [
      {
        degree: "Master of Business Management",
        school: "School of Business | Wireless University",
        period: "2020 - 2021"
      },
      {
        degree: "Master of Business Management",
        school: "School of Business | Wireless University",
        period: "2020 - 2021"
      }
    ],
    references: [
      {
        name: "Estelle Darcy",
        title: "Wordiere Inc. / CEO",
        phone: "+124-4526-7894",
        email: "hello@wordiere.com"
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-600 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-lg pb-8">
        {/* Header Section */}
        <div className="">
          <div className="p-8">
            <h1 className="text-4xl font-light text-gray-800 mb-1">
              {mockData.name}
            </h1>
            <p className="text-gray-600 text-xl font-light mb-4">
              {mockData.title}
            </p>
            <p className="text-gray-700 text-sm w-full leading-relaxed">
              {mockData.summary}
            </p>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 bg-[#F0F0F0] p-4 sm:p-6 md:p-8 gap-3 mt-2">
            <div className="flex items-center gap-2 text-gray-600">
              <IoMailOutline className="w-4 h-4 md:w-5 md:h-5 text-[#00BFA6]" />
              <span className="text-sm truncate">{mockData.contact.email}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <CiLocationOn className="w-4 h-4 md:w-5 md:h-5 text-[#00BFA6]" />
              <span className="text-sm truncate">{mockData.contact.location}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FiPhone className="w-4 h-4 md:w-5 md:h-5 text-[#00BFA6]" />
              <span className="text-sm truncate">{mockData.contact.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaGithub className="w-4 h-4 md:w-5 md:h-5 text-[#00BFA6]" />
              <span className="text-sm truncate">{mockData.contact.github}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <FaLinkedin className="w-4 h-4 md:w-5 md:h-5 text-[#00BFA6]" />
              <span className="text-sm truncate">{mockData.contact.linkedin}</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <BsTwitter className="w-4 h-4 md:w-5 md:h-5 text-[#00BFA6]" />
              <span className="text-sm truncate">{mockData.contact.twitter}</span>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 p-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Work Experience */}
            <section>
              <h2 className="text-[#00BFA6] font-bold text-2xl uppercase mb-4">
                WORK EXPERIENCE
              </h2>
              {mockData.workExperience.map((exp, index) => (
                <div key={index} className="mb-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-gray-800">{exp.title}</h3>
                      <p className="text-gray-600 text-sm">{exp.company}</p>
                      <p className="text-gray-500 text-sm italic">
                        {exp.period}
                      </p>
                    </div>
                  </div>
                  <ul className="list-disc pl-4 space-y-1">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-sm text-gray-600">
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </section>

            {/* Education */}
            <section>
              <h2 className="text-[#00BFA6] font-bold text-2xl uppercase mb-4">
                EDUCATION
              </h2>
              {mockData?.education?.map((edu:Record<string, any>, index:number) => (
                <div className="mt-4" key={index}>
                  <h3 className="font-medium text-gray-800">{edu.degree}</h3>
                  <p className="text-gray-600 text-sm">{edu.school}</p>
                  <p className="text-gray-500 text-sm italic">{edu.period}</p>
                </div>
              ))}
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Technical Skills */}
            <section>
              <h2 className="text-[#00BFA6] font-bold text-2xl uppercase mb-4">
                TECHNICAL SKILLS
              </h2>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-gray-700 mb-1">
                    System Administration:
                  </h3>
                  <p className="text-sm text-gray-600">
                    {mockData.technicalSkills.systems.join(", ")}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-700 mb-1">
                    Cloud Infrastructure:
                  </h3>
                  <p className="text-sm text-gray-600">
                    {mockData.technicalSkills.cloudInfra.join(", ")}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-700 mb-1">Servers:</h3>
                  <p className="text-sm text-gray-600">
                    {mockData.technicalSkills.servers.join(", ")}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-700 mb-1">Networking:</h3>
                  <p className="text-sm text-gray-600">
                    {mockData.technicalSkills.networking.join(", ")}
                  </p>
                </div>

                <div>
                  <h3 className="font-bold text-gray-700 mb-1">
                    Containerization:
                  </h3>
                  <p className="text-sm text-gray-600">
                    {mockData.technicalSkills.containerization.join(", ")}
                  </p>
                </div>
              </div>
            </section>

            {/* Soft Skills */}
            <section>
              <h2 className="text-[#00BFA6] font-bold text-2xl uppercase mb-4">
                SOFT SKILLS
              </h2>
              <div className="flex flex-wrap gap-2">
                {mockData.softSkills.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-[#00BFA6] text-black px-3 py-2 rounded-lg text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Certificates */}
            <section>
              <h2 className="text-[#00BFA6] font-bold text-2xl uppercase mb-4">
                CERTIFICATES & COURSES
              </h2>
              <ul className="space-y-2">
                {mockData.certificates.map((cert, index) => (
                  <li
                    key={index}
                    className="text-sm text-gray-600 flex items-center gap-2"
                  >
                    {cert.name}
                    <span>
                      <a
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt className="text-[#294D4A] font-light" />
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template6;
