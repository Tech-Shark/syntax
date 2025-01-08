import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton } from "@/components/welcomeNavButtons";
import SidebarLinks from "@/components/SidebarLinks";


const PersonalInformation: React.FC = () => {
  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Tell us about yourself!"
              subheading="These details form the foundation of your CV." />
            <div className="flex justify-start gap-[7rem]">
              <SidebarLinks />
               <form className="flex flex-col gap-7 align-center justify-center p-3 ">
              <div className="flex flex-col md:flex-row gap-10">
                <WelcomeInput label="First Name" id="firstName" placeholder="John" />
                <WelcomeInput label="Last Name" id="lastName" placeholder="Doe" />
              </div>
              <div className="flex flex-col md:flex-row gap-10">
                <WelcomeInput label="Enter Email" id="email"  placeholder="john@email.com" type="email" />
                <WelcomeInput label="Phone Number" id="phoneNumber"
                placeholder="+234xxxxxxxxxx" type="tel" />
              </div>
              <div className="flex flex-col md:flex-row gap-10">
                <WelcomeInput
                label="Professional Title" id="professionalTitle"
                placeholder="Software Developer" type="text" />
                <WelcomeInput
                label="Nationality" id="nationality"
                placeholder="Nationality" type="text"/>
              </div>
            </form> 
            </div>
            <NextButton to="/work-experience" />
          </div>
        </div>
      </section>
    </>
  );

};
export default PersonalInformation;