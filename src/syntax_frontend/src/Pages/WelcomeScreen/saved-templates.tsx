import { useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import html2pdf from "html2pdf.js";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import purple_hero from "@/assets/images/purple_hero_bg.svg";
import purple_hero2 from "@/assets/images/purple_hero_bg2.svg";
import purple_hero3 from "@/assets/images/purple_hero_bg3.svg";
import arrow1 from "@/assets/images/arrow1.svg";
import arrow2 from "@/assets/images/arrow2.svg";
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

const SavedTemplates: React.FC = () => {
  const location = useLocation();
  const savedTemplate = location.state?.savedTemplate;
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleDownload = () => {
    if (!resumeRef.current) return;

    const element = resumeRef.current;
    const options = {
      filename: "saved_template.pdf",
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };
    html2pdf().set(options).from(element).save();
  };

  const renderTemplate = () => {
    if (!savedTemplate) return null;

    switch (savedTemplate.id) {
      case 1:
      // return <Template1 cvData={cvData} />;
      case 2:
      // return <Template2 cvData={cvData}/>;
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

  return (
    <section>
      <WelcomeHeader
        leftLabel="Edit my Info"
        leftLink="/edit-cv"
        rightLabel="View Templates"
        rightLink="/templates"
      >
        <div className="flex justify-center items-center flex-col h-auto w-full pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-[6.25rem]">
          <div className="flex flex-col justify-center items-center gap-5">
            <WelcomeDescription
              heading="Your Template Has Been Saved!"
              subheading="We've saved all your details, and they're ready to be used for creating your standout CV."
            />
            <div className="group relative lg:h-[17.8rem] h-[25vh] md:h-[30vh] w-full md:w-4/5 mt-8 overflow-hidden cursor-pointer pt-10">
              <img
                src={purple_hero}
                alt="Saved Template"
                className="h-full w-full md:w-full absolute transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] left-0 md:left-0 group-hover:-translate-y-4 group-hover:-translate-x-2lg:group-hover:-translate-y-4 lg:group-hover:-translate-x-3 transform-gpu"
              />
              <img
                src={purple_hero2}
                alt="Saved templates"
                className="h-full w-full md:w-full absolute transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] -translate-x-4 md:-translate-x-8 lg:-translate-x-12 group-hover:translate-y-2 group-hover:-translate-x-6 group-hover:-rotate-12 lg:group-hover:translate-y-4 lg:group-hover:-translate-x-14 transform-gpu"
              />
              <img
                src={purple_hero3}
                alt="Saved templates"
                className="h-full w-full md:w-full absolute transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] translate-x-4 md:translate-x-8 lg:translate-x-12 group-hover:translate-y-2 group-hover:translate-x-6 group-hover:rotate-12 lg:group-hover:translate-y-4 lg:group-hover:translate-x-14 transform-gpu"
              />
            </div>
          </div>

          {/* Hidden template renderer for PDF */}
          <div className="hidden">
            <div ref={resumeRef}>{renderTemplate()}</div>
          </div>

          <div className="flex flex-col gap-5 items-center">
            <button
              className="flex items-center justify-center gap-2 py-[0.41rem] px-[1.03rem] bg-[#000006] rounded-3xl"
              onClick={handleDownload}
            >
              <p className="text-white text-center font-semibold leading-7 text-lg">
                Download
              </p>
              <img
                src={arrow1}
                alt="Upload CV"
                className="w-[1.92rem] h-[1.92rem]"
              />
            </button>
            <Link
              to="/user-dashboard"
              className="flex items-center justify-center gap-2 self-stretch rounded-[1.8rem] py-[0.65rem] px-5 bg-white [box-shadow:-2px_-4px_25.7px_0_rgba(0,0,0,0.1),_2px_4px_28.7px_0_rgba(0,0,0,0.1)]"
            >
              <p className="text-[#3D3F4E] text-center text-lg font-semibold leading-8">
                Go to Dashboard
              </p>
              <div className="flex items-center justify-center bg-[#3D3F4E] w-[2.33rem] h-[2.33rem] rounded-full">
                <img src={arrow2} alt="Build new cv" />
              </div>
            </Link>
          </div>
        </div>
      </WelcomeHeader>
    </section>
  );
};

export default SavedTemplates;
