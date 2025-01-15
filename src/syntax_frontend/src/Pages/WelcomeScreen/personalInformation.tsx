import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { updateField } from "@/redux/cvDataSlice";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton } from "@/components/welcomeNavButtons";
import SidebarLinks from "@/components/SidebarLinks";

const PersonalInformation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const personalInfo = useSelector(
    (state: RootState) => state.cvData.personalInformation
  );

  const handleChange = (key: string, value: string) => {
    dispatch(updateField({ section: "personalInformation", key, value }));
  };

  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Tell us about yourself!"
              subheading="These details form the foundation of your CV."
            />
            <div className="flex justify-start gap-[7rem]">
              <SidebarLinks />
              <form className="flex flex-col gap-7 align-center justify-center p-3">
                <div className="flex flex-col md:flex-row gap-10">
                  <WelcomeInput
                    label="First Name"
                    id="firstName"
                    placeholder="John"
                    value={personalInfo.firstName || ""}
                    onChange={(e) => handleChange("firstName", e.target.value)}
                  />
                  <WelcomeInput
                    label="Last Name"
                    id="lastName"
                    placeholder="Doe"
                    value={personalInfo.lastName || ""}
                    onChange={(e) => handleChange("lastName", e.target.value)}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                  <WelcomeInput
                    label="Enter Email"
                    id="email"
                    placeholder="john@email.com"
                    type="email"
                    value={personalInfo.email || ""}
                    onChange={(e) => handleChange("email", e.target.value)}
                  />
                  <WelcomeInput
                    label="Phone Number"
                    id="phoneNumber"
                    placeholder="+234xxxxxxxxxx"
                    type="tel"
                    value={personalInfo.phoneNumber || ""}
                    onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                  <WelcomeInput
                    label="Professional Title"
                    id="professionalTitle"
                    placeholder="Software Developer"
                    value={personalInfo.professionalTitle || ""}
                    onChange={(e) =>
                      handleChange("professionalTitle", e.target.value)
                    }
                  />
                  <WelcomeInput
                    label="Nationality"
                    id="nationality"
                    placeholder="Nationality"
                    value={personalInfo.nationality || ""}
                    onChange={(e) => handleChange("nationality", e.target.value)}
                  />
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
