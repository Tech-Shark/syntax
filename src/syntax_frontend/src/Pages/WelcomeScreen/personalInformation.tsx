import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton } from "@/components/welcomeNavButtons";


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
            <form className="flex flex-col gap-7 align-center justify-center p-3 ">
              <WelcomeInput label="First Name" id="firstName" placeholder="John" />
              <WelcomeInput label="Last Name" id="lastName" placeholder="Doe" />
              <WelcomeInput label="Enter Email" id="email"  placeholder="john@email.com" type="email" />
              <WelcomeInput label="Phone Number" id="phoneNumber"
                placeholder="+234xxxxxxxxxx" type="tel" />
               <WelcomeInput
                label="Professional Title" id="professionalTitle"
                placeholder="Software Developer" type="text" />
              <WelcomeInput
                label="Nationality" id="nationality"
                placeholder="Nationality" type="text"/>
            </form> 
            <NextButton to="/work-experience" />
          </div>
        </div>
      </section>
    </>
  );

};
export default PersonalInformation;