import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";

const Portfolio: React.FC = () => {
  return (

    <>
      <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Show Your Projects & Portfolio"
              subheading="Showcase your awards, certifications, or milestones. Our AI can refine and enhance your descriptions." />
            <form className="flex flex-col gap-7 align-center justify-center p-3">
              <WelcomeInput label="Link to Project/Portfolio (Optional)" id="PortfolioLink" placeholder="https//" />
              <WelcomeInput label="Project Description:" id="projectDescription" placeholder="I..." />
              <WelcomeInput label="Skills/Technologies Used" id="skils"  placeholder="JavaScript"/>
              <WelcomeInput label="Role in the Project" id="role" placeholder="Lead Developer" />
              <WelcomeInput label="Outcome/Impact" id="outcome" placeholder="Reduced processing time by 30%" />
              <WelcomeInput label="Project Duration" id="projectDuration" placeholder="May, 2024 - Oct, 2023"/>
            </form> 
            <div className="flex gap-4">
              <BackButton/>
              <NextButton to="/saved-info" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Portfolio;