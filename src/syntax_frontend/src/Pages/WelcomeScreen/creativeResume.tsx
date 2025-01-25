import { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2pdf from "html2pdf.js";
import hamburger_menu from "@/assets/images/hamburger_menu.svg";
import MobileSidebar from "@/components/Dashboard/mobileSidebar";
import Template1 from "@/components/cvTemplates/Template1";
import Template2 from "@/components/cvTemplates/Template2";
import Template3 from "@/components/cvTemplates/Template3";
import Template4 from "@/components/cvTemplates/Template4";
import Template5 from "@/components/cvTemplates/Template5";
import Template6 from "@/components/cvTemplates/Template6";
import Template7 from "@/components/cvTemplates/Template7";
import Template8 from "@/components/cvTemplates/Template8";
import Template9 from "@/components/cvTemplates/Template9";
import Template10 from "@/components/cvTemplates/Template10";
import Template11 from "@/components/cvTemplates/Template11";
import Template12 from "@/components/cvTemplates/Template12";
import Template13 from "@/components/cvTemplates/Template13";
import Template14 from "@/components/cvTemplates/Template14";
import Template15 from "@/components/cvTemplates/Template15";
import Template16 from "@/components/cvTemplates/Template16";
import Template17 from "@/components/cvTemplates/Template17";
import Template18 from "@/components/cvTemplates/Template18";
import Template19 from "@/components/cvTemplates/Template19";
import Template20 from "@/components/cvTemplates/Template20";
import Template21 from "@/components/cvTemplates/Template21";
import Template22 from "@/components/cvTemplates/Template22";
import TopIcons from "../Dashboard/UserDashboard/topIcons";
import purple_arrow_2 from '@/assets/images/purple_arrow_2.svg';
import { BsDownload } from "react-icons/bs";
import star_icon from "@/assets/images/purple_star.svg";
import dropdown from "@/assets/images/drop_down_arrow.svg";
import SavedTemplates from "./saved-templates";


const CreativeResume: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const template = location.state?.template;
  const resumeRef = useRef<HTMLDivElement>(null);
   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  

  if (!template) {
    return <div>No template selected</div>;
  }

   // Dynamic template rendering
  const renderTemplate = () => {
    switch (template.id) {
      case 1:
        return <Template1 />;
      case 2:
        return <Template2 />;
      case 3:
        return <Template3 />;
      case 4:
        return <Template4 />;
      case 5:
        return <Template5 />;
      case 6:
        return <Template6 />;
      case 7:
        return <Template7 />;
      case 8:
        return <Template8 />;
      case 9:
        return <Template9 />;
      case 10:
        return <Template10 />;
      case 11:
        return <Template11 />;
      case 12:
        return <Template12 />;
      case 13:
        return <Template13 />;
      case 14:
        return <Template14 />;
      case 15:
        return <Template15 />;
      case 16:
        return <Template16 />;
      case 17:
        return <Template17 />;
      case 18:
        return <Template18 />;
      case 19:
        return <Template19 />;
      case 20:
        return <Template20 />;
      case 21:
        return <Template21 />;
      case 22:
        return <Template22 />;
      default:
        return <div>No template found</div>;
    }
  };

  const handleDownload = () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current; // The element to convert to PDF
    console.log(element);
    const options = {
      filename: "resume.pdf",
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  const handleSaveAndContinue = () => {
  if (template) {
    navigate("/saved-templates", { state: { savedTemplate: template } });
    console.log(SavedTemplates);
  }
  };
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <section className="flex font-outfit h-screen">
        {/* <div className="hidden md:block w-[19rem] min-h-full bg-[rgba(225,224,243,0.50)] py-[2.44rem] px-[2rem]">
          <img src={syntax_logo} alt="syntax logo" />
          <div className="mt-20 flex flex-col gap-[1.62rem]">
            <span className="flex items-center justify-between text-lg font-semibold leading-normal text-[#000006]">
              Personal Information
              <img src={dropdown} alt="dropdown" />
            </span>
            <span className="flex items-center justify-between text-lg font-semibold leading-normal text-[#000006]">
              Professional Summary
              <img src={dropdown} alt="dropdown" />
            </span>
            <span className="flex items-center justify-between text-lg font-semibold leading-normal text-[#000006]">
              Work Experience
              <img src={dropdown} alt="dropdown" />
            </span>
            <span className="flex items-center justify-between text-lg font-semibold leading-normal text-[#000006]">
              Skills
              <img src={dropdown} alt="dropdown" />
            </span>
            <span className="flex items-center justify-between text-lg font-semibold leading-normal text-[#000006]">
              Education
              <img src={dropdown} alt="dropdown" />
            </span>
            <span className="flex items-center justify-between text-lg font-semibold leading-normal text-[#000006]">
              Certifications & Awards
              <img src={dropdown} alt="dropdown" />
            </span>
            <span className="flex items-center justify-between text-lg font-semibold leading-normal text-[#000006]">
              Projects
              <img src={dropdown} alt="dropdown" />
            </span>
          </div>
        </div> */}
        {/* Middle Content */}
        <div className="flex-1 flex flex-col px-4 md:px-6 pt-8 pb-5 h-full overflow-y-auto ">
          <div className="flex justify-between">
            <div className="flex items-center gap-5">
              <img src={purple_arrow_2} alt="back" />
              <p className="text-base text-[#3D3F4E] font-semibold leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer">
                Back
              </p>
            </div>
            <div className="flex items-center gap-5">
              <button className="flex items-center justify-center px-[0.63rem] py-[0.31rem] border-[2px] border-black rounded-[0.25rem] text-[0.88rem] font-semibold leading-[1.73rem] gap-[0.6rem]"  onClick={handleDownload}>
              <BsDownload className="h-4 w-4 text-black cursor-pointer" />
              Download
              </button>
              <img src={hamburger_menu} alt="hamburger menu" className="lg:hidden w-6 h-6 cursor-pointer" onClick={toggleSidebar}/>
            </div>
            <MobileSidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
          </div>

          <div className="flex flex-col gap-[2.91rem] flex-grow mt-9 lg:mt-3">
            <div className="flex justify-center md:justify-between items-center">
              <div className="flex flex-col gap-[0.1rem] text-center md:text-left">
                <h5 className="text-[2.4rem] leading-normal font-bold">
                  Creative Resume
                </h5>
                <p className="font-normal leading-normal text-[0.88rem] md:text-base">
                  Pick a template that suits your style, or explore tailored <br />
                  recommendations based on your career goals.
                </p>
              </div>
              <TopIcons />
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0">
              <button className="bg-black text-white self-center justify-center md:self-auto items-center px-[0.63rem] py-[0.31rem] rounded-[0.25rem] text-[0.88rem] text-center leading-[1.7rem] font-semibold" onClick={() => navigate("/user-dashboard")}>
                Change Template
              </button>
              <div className="flex justify-between w-full md:w-auto md:gap-[1.88rem]">
                <button className="bg-white text-black justify-center items-center px-[1.6rem] py-[0.31rem] border-[2px] border-black rounded-[0.25rem] text-[0.88rem] text-center leading-[1.7rem] font-semibold">
                  Edit CV
                </button>
                <button className="bg-white text-black justify-center items-center px-[0.63rem] py-[0.31rem] border-[2px] border-black rounded-[0.25rem] text-[0.88rem] text-center leading-[1.7rem] font-semibold"  onClick={handleSaveAndContinue}>
                  Save and Continue
                </button>
              </div>
            </div>
          </div>

          <div className="h-full mt-6 flex-grow" ref={resumeRef}>
            {renderTemplate()}
          </div>
        </div>

        {/* AI Suggestion Section */}
        <div className="hidden bg-[#E1E0F3] w-[22rem] border-[#000006] border-[1.04px] md:flex flex-col gap-8 h-full">
          {/* CV Score Section */}
          <div className="flex flex-col gap-8">
            <span className="flex flex-col gap-1 px-7 py-5">
              <p className="text-[0.88rem] leading-normal font-normal">Your CV Score</p>
              <h5 className="text-[3.3rem] font-bold leading-normal">70%</h5>
            </span>
            <div>
              <div className="flex">
                <span className="border-[#000006] border-[1.04px] flex items-center justify-center flex-col gap-[0.6rem] text-center w-1/3 p-3">
                  <p className="text-[0.8rem] font-semibold leading-normal">ATS Score</p>
                  <h5 className="text-[1.4rem] font-semibold leading-normal">70%</h5>
                </span>
                <span className="border-[#000006] border-[1.04px] flex items-center justify-center flex-col gap-[0.6rem] text-center w-1/3 p-3">
                  <p className="text-[0.8rem] font-semibold leading-normal">Content Quality</p>
                  <h5 className="text-[1.4rem] font-semibold leading-normal">70%</h5>
                </span>
                <span className="border-[#000006] border-[1.04px] flex items-center justify-center flex-col gap-[0.6rem] text-center w-1/3 p-3">
                  <p className="text-[0.8rem] font-semibold leading-normal">Formatting</p>
                  <h5 className="text-[1.4rem] font-semibold leading-normal">70%</h5>
                </span>
              </div>
              <div className="flex gap-[0.7rem] items-center bg-[#B3B2FB] w-full border-black border-[1.04px] pl-[1.25rem] pr-[1.11rem] py-[0.7rem]">
                <img src={star_icon} alt="star icon" />
                <p className="text-xs font-semibold leading-normal">Pro Suggestions</p>
              </div>
            </div>
          </div>

          {/* AI Suggestions */}
          <div className="flex flex-col gap-10 px-3 flex-grow">
            <h5 className="text-lg font-semibold leading-normal text-center">AI Suggestions</h5>
            <div>
              <div className="flex flex-col gap-[1rem]">
                <span className="flex items-center justify-between p-3">
                  <h5>Content</h5>
                  <img src={dropdown} alt="dropdown" />
                </span>
                <span className="px-[0.63rem] py-[0.44rem] flex flex-start bg-[rgba(251,55,72,0.10)] line-through text-[0.88rem] font-normal leading-normal">
                  Handled various tasks in the marketing department.
                </span>
                <span className="px-[0.63rem] py-[0.44rem] flex flex-start bg-[rgba(179,178,251,0.10)] font-normal leading-normal">
                  Executed data-driven marketing campaigns that increased lead generation by 25% over three months.
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default CreativeResume;
