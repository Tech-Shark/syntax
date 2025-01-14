import React from "react";
import { GiRotaryPhone } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import LanguageIcon from "@mui/icons-material/Language";
import RoomIcon from "@mui/icons-material/Room";

function Template2({cvData}) {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4 pt-6 md:p-6 lg:p">
        <div className="max-w-5xl shadow-lg pb-10 bg-white mx-auto w-full flex flex-col items-center">
          {/* NAME AND TITLE */}
          <header className="w-full text-left p-10">
            <h1 className="text-4xl md:text-5xl font-bold">BAILEY DUPONT</h1>
            <h5 className="text-base md:text-lg">MARKETING MANAGER</h5>
          </header>

          <hr className="bg-[#464A4E] font-bold h-[4px] w-full" />

          {/* CONTENT SECTION */}
          <main className="flex flex-wrap md:flex-nowrap w-full">
            {/* LEFT COLUMN */}
            <section className="w-full mt-10 md:w-1/2">
              {/* CONTACTS */}
              <section className="flex flex-col mb-10 gap-6 ml-10 bg-[#EFEFEF] w-[85%] md:w-[90%] px-4 py-10">
                <h1 className="text-2xl md:text-2xl font-normal mb-4">
                  CONTACT
                </h1>
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
              </section>
              {/* INTERESTS */}
              <section className="mb-6 w-full">
                <div className="pl-10 w-[100%]">
                  <h1 className="text-2xl md:text-2xl px-4 py-2 bg-[#EFEFEF] w-[94%] md:w-full font-normal mb-4">
                    INTERESTS
                  </h1>
                </div>
                <div className="px-10 flex flex-col gap-4">
                  <p className="font-light text-sm">TRAVELING</p>
                  <p className="font-light text-sm">POLITICS</p>
                  <p className="font-light text-sm">ARTS & ENTERTAINMENT</p>
                  <p className="font-light text-sm">ILLUSTRATION</p>
                </div>
              </section>

              {/* EDUCATION */}
              <div className="mt-10">
                <div className="pl-10 w-[100%]">
                  <h1 className="text-2xl md:text-2xl px-4 py-2 bg-[#EFEFEF] w-[94%] md:w-full font-normal mb-4">
                    EDUCATION
                  </h1>
                </div>
                <div className="px-10 flex flex-col gap-8">
                  <div className="">
                    <p className="font-bold text-sm">SECONDARY SCHOOL</p>
                    <p className="font-light text-sm">
                      Really Great High School
                    </p>
                    <p className="font-normal text-sm">2010 - 2014</p>
                  </div>
                  <div className="">
                    <p className="font-bold text-sm">COLLEGE</p>
                    <p className="font-light text-sm">
                      Amazing College of Technology
                    </p>
                    <p className="font-normal text-sm">2014 - 2018</p>
                  </div>
                  <div className="">
                    <p className="font-bold text-sm">MASTER'S DEGREE</p>
                    <p className="font-light text-sm">
                      Top University for Advanced Studies
                    </p>
                    <p className="font-normal text-sm">2018 - 2020</p>
                  </div>
                </div>
              </div>
            </section>

            {/* RIGHT COLUMN */}
            <section className="w-full  ml-10 md:w-2/3">
              {/* PROFILE */}
              <div className="flex flex-wrap md:flex-nowrap mt-8 w-full">
                <div className="w-full md:w-[90%]">
                  <h1 className="text-2xl md:text-2xl w-[94%] md:w-full font-normal mb-4 bg-[#EFEFEF] p-2">
                    PROFILE
                  </h1>
                  <div className="font-light text-sm px-2 py-4">
                    I am a qualified and professional web developer with five
                    years of experience in database administration and website
                    design. Strong creative and analytical skills. Team player
                    with an eye for details.
                  </div>
                </div>
              </div>

              {/* EXPERIENCE */}
              <section className="w-full md:w-[90%] mt-10">
                <h1 className="text-2xl md:text-2xl w-[94%] md:w-full font-normal mb-4 bg-[#EFEFEF] p-2 sm:text-left">
                  EXPERIENCE
                </h1>

                <div className="mb-8">
                  <div className="flex flex-col gap-4">
                    <div className="font-bold text-sm sm:text-base">
                      APPLICATIONS DEVELOPER
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="font-bold text-sm sm:text-base">
                        Really Great Company
                      </div>
                      <div className="bg-black w-full sm:w-0.5 md:h-6 sm:h-4 sm:mx-2 mt-2 sm:mt-0"></div>
                      <div className="font-bold text-sm sm:text-base">
                        Australia
                      </div>
                      <div className="bg-black w-full sm:w-0.5 md:h-6 sm:h-4 sm:mx-2 mt-2 sm:mt-0"></div>
                      <div className="font-bold text-sm sm:text-base">
                        2016 - Present
                      </div>
                    </div>
                    <div className="font-light text-sm sm:text-base px-2 py-4">
                      The opportunity to work in an organization that encourages
                      its engineers to move across different areas such as
                      backend, infrastructure, and mobile development is
                      particularly appealing. I believe this would allow me to
                      further develop my versatility as a developer, which has
                      been a key strength throughout my career.
                    </div>
                  </div>

                  <ul className="list-disc mt-6 pl-6 sm:pl-10 space-y-2">
                    <li className="font-light text-sm sm:text-base">
                      Database administration and website design
                    </li>
                    <li className="font-light text-sm sm:text-base">
                      Built the logic for a streamlined ad-serving platform that
                      scaled
                    </li>
                    <li className="font-light text-sm sm:text-base">
                      Educational institutions and online classroom management
                    </li>
                  </ul>
                </div>

                <div className="mb-8 mt-20">
                  <div className="flex flex-col gap-4">
                    <div className="font-bold text-sm sm:text-base">
                      APPLICATIONS DEVELOPER
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                      <div className="font-bold text-sm sm:text-base">
                        Really Great Company
                      </div>
                      <div className="bg-black w-full sm:w-0.5 sm:h-4 md:h-6 sm:mx-2 mt-2 sm:mt-0"></div>
                      <div className="font-bold text-sm sm:text-base">
                        Australia
                      </div>
                      <div className="bg-black w-full sm:w-0.5 sm:h-4 md:h-6 sm:mx-2 mt-2 sm:mt-0"></div>
                      <div className="font-bold text-sm sm:text-base">
                        2016 - Present
                      </div>
                    </div>
                    <div className="font-light text-sm sm:text-base px-2 py-4">
                      The opportunity to work in an organization that encourages
                      its engineers to move across different areas such as
                      backend, infrastructure, and mobile development is
                      particularly appealing. I believe this would allow me to
                      further develop my versatility as a developer, which has
                      been a key strength throughout my career.
                    </div>
                  </div>

                  <ul className="list-disc mt-6 pl-6 sm:pl-10 space-y-2">
                    <li className="font-light text-sm sm:text-base">
                      Database administration and website design
                    </li>
                    <li className="font-light text-sm sm:text-base">
                      Built the logic for a streamlined ad-serving platform that
                      scaled
                    </li>
                    <li className="font-light text-sm sm:text-base">
                      Educational institutions and online classroom management
                    </li>
                  </ul>
                </div>
              </section>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default Template2;
