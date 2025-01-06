import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import LanguageIcon from "@mui/icons-material/Language";
import RoomIcon from '@mui/icons-material/Room';

function Template1() {
  return (
    <div className="min-h-screen text-[#706F6F] bg-gray-100">
      <div className="max-w-5xl shadow-lg bg-white mx-auto w-full flex flex-col items-center">
        {/* NAME AND TITLE */}
        <header className="w-full bg-[#F4F4F4] text-left py-20 px-10 mt-10">
          <h1 className="text-4xl md:text-5xl font-light text-[#464A4E]">
            DANI <span className="font-bold">SCHWAIGER</span>
          </h1>
          <h5 className="text-base md:text-lg text-gray-600">WEB DEVELOPER</h5>
        </header>

        {/* CONTACT AND PROFILE */}
        <div className="flex flex-wrap md:flex-nowrap mt-8 w-full">
          {/* CONTACTS */}
          <div className="flex flex-col mb-10 gap-4 px-10 w-full md:w-[43.5%]">
            <div className="font-light flex gap-3 items-center">
              <GiRotaryPhone className="text-2xl" />
              <span className="text-sm">0806-289-8015</span>
            </div>
            <div className="font-light flex gap-3 items-center">
              <IoMailSharp className="text-2xl" />
              <span className="text-sm">john.doe@example.com</span>
            </div>
            <div className="font-light flex gap-3 items-center">
              {/* <CiLocationOn className="text-2xl" /> */}
              <RoomIcon />
              <span className="text-sm">
                5 Quarters Road, GRA, Ikot Ekpene, Akwa Ibom State, Nigeria
              </span>
            </div>
            <div className="font-light text-sm flex gap-3 items-center">
              <LanguageIcon />
              <span>www.abn.com</span>
            </div>
          </div>

          <div className="w-[1px] bg-[#464A4E]"></div>

          {/* PROFILE */}
          <div className="px-10 w-full md:w-[90%]">
            <h1 className="text-2xl md:text-3xl font-normal text-[#464A4E] mb-4">
              PROFILE
            </h1>
            <p className="font-light text-sm">
              I am a qualified and professional web developer with five years of
              experience in database administration and website design. Strong
              creative and analytical skills. Team player with an eye for
              details.
            </p>
          </div>
        </div>

        <hr className="bg-[#464A4E] h-[2px] w-[95%]" />

        {/* CONTENT SECTION */}
        <div className="flex flex-wrap md:flex-nowrap w-full">
          {/* LEFT COLUMN */}
          <div className="w-full mt-10 md:w-1/3">
            {/* SKILLS */}
            <div className="mb-6 py-6 px-10">
              <h1 className="text-2xl md:text-3xl font-normal text-[#464A4E] mb-4">
                SKILLS
              </h1>
              <ul className="list-disc pl-4 space-y-2">
                <li className="font-light text-sm">Web Design</li>
                <li className="font-light text-sm">Design Thinking</li>
                <li className="font-light text-sm">Wireframe Creation</li>
                <li className="font-light text-sm">Frontend Coding</li>
                <li className="font-light text-sm">Problem Solving</li>
                <li className="font-light text-sm">Computer Literacy</li>
                <li className="font-light text-sm">Project Management Tools</li>
                <li className="font-light text-sm">Strong Communication</li>
              </ul>
            </div>

            <div className="md:pl-10">
            <hr className="bg-[#464A4E] h-[2px] w-full" />
            </div>

            {/* EDUCATION */}
            <div className="mt-10 py-6 px-10">
              <h1 className="text-2xl md:text-3xl font-normal text-[#464A4E] mb-4">
                EDUCATION
              </h1>
              <div className="mb-6">
                <p className="font-bold text-sm">SECONDARY SCHOOL</p>
                <p className="font-light text-sm">Really Great High School</p>
                <p className="font-normal text-sm">2010 - 2014</p>
              </div>
              <div className="mb-6">
                <p className="font-bold text-sm">COLLEGE</p>
                <p className="font-light text-sm">Amazing College of Technology</p>
                <p className="font-normal text-sm">2014 - 2018</p>
              </div>
              <div className="mb-6">
                <p className="font-bold text-sm">MASTER'S DEGREE</p>
                <p className="font-light text-sm">Top University for Advanced Studies</p>
                <p className="font-normal text-sm">2018 - 2020</p>
              </div>
            </div>
          </div>

          <div className="w-[1px] bg-[#464A4E]"></div>

          {/* RIGHT COLUMN */}
          <div className="w-full md:w-2/3 mt-10 p-6">
            <h1 className="text-2xl md:text-3xl font-normal text-[#464A4E] mb-4">
              EXPERIENCE
            </h1>
            <div className="mb-8">
              <p className="font-bold text-sm">APPLICATIONS DEVELOPER</p>
              <p className="font-light text-sm">Really Great Company</p>
              <p className="font-normal text-sm">2016 - Present</p>
              <ul className="list-disc pl-4 mt-2 space-y-2">
                <li className="font-light text-sm">
                  Database administration and website design
                </li>
                <li className="font-light text-sm">
                  Built the logic for a streamlined ad-serving platform that
                  scaled
                </li>
                <li className="font-light text-sm">
                  Educational institutions and online classroom management
                </li>
              </ul>
            </div>

            <div className="mb-8">
              <p className="font-bold text-sm">SOFTWARE ENGINEER</p>
              <p className="font-light text-sm">Tech Solutions Inc.</p>
              <p className="font-normal text-sm">2014 - 2016</p>
              <ul className="list-disc pl-4 mt-2 space-y-2">
                <li className="font-light text-sm">
                  Designed and developed REST APIs for mobile applications
                </li>
                <li className="font-light text-sm">
                  Enhanced user interfaces for better customer experiences
                </li>
                <li className="font-light text-sm">
                  Collaborated with cross-functional teams to deliver high-quality products
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template1;
