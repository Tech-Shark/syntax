import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "@/redux/store";
import { updateField } from "@/redux/cvDataSlice";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton } from "@/components/welcomeNavButtons";
import SidebarLinks from "@/components/SidebarLinks";

const PersonalInformation: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const personalInfo = useSelector(
    (state: RootState) => state.cvData.personalInformation
  );

  // Local state for errors
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (key: string, value: string) => {
    // Clear error for the field when it is updated
    setErrors((prevErrors) => ({ ...prevErrors, [key]: "" }));
    dispatch(updateField({ section: "personalInformation", key, value }));
  };

  const handleValidation = () => {
    const newErrors: Record<string, string> = {};

    if (!personalInfo.firstName) newErrors.firstName = "First name is required.";
    if (!personalInfo.lastName) newErrors.lastName = "Last name is required.";
    if (!personalInfo.email) newErrors.email = "Email is required.";
    if (!personalInfo.phoneNumber)
      newErrors.phoneNumber = "Phone number is required.";
    if (!personalInfo.professionalTitle)
      newErrors.professionalTitle = "Professional title is required.";
    if (!personalInfo.nationality)
      newErrors.nationality = "Nationality is required.";

    setErrors(newErrors);

    // Return whether validation passed
    return Object.keys(newErrors).length === 0;
  };

  const handleNextClick = () => {
    if (handleValidation()) {
      navigate("/work-experience"); // Navigate to the next page
      return true;
    }
    // Validation failed
    return false;
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
                  <div>
                    <WelcomeInput
                      label="First Name"
                      id="firstName"
                      placeholder="John"
                      value={personalInfo.firstName || ""}
                      onChange={(e) =>
                        handleChange("firstName", e.target.value)
                      }
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <WelcomeInput
                      label="Last Name"
                      id="lastName"
                      placeholder="Doe"
                      value={personalInfo.lastName || ""}
                      onChange={(e) =>
                        handleChange("lastName", e.target.value)
                      }
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.lastName}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                  <div>
                    <WelcomeInput
                      label="Enter Email"
                      id="email"
                      placeholder="john@email.com"
                      type="email"
                      value={personalInfo.email || ""}
                      onChange={(e) => handleChange("email", e.target.value)}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <WelcomeInput
                      label="Phone Number"
                      id="phoneNumber"
                      placeholder="+234xxxxxxxxxx"
                      type="tel"
                      value={personalInfo.phoneNumber || ""}
                      onChange={(e) =>
                        handleChange("phoneNumber", e.target.value)
                      }
                    />
                    {errors.phoneNumber && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.phoneNumber}
                      </p>
                    )}
                  </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                  <div>
                    <WelcomeInput
                      label="Professional Title"
                      id="professionalTitle"
                      placeholder="Software Developer"
                      value={personalInfo.professionalTitle || ""}
                      onChange={(e) =>
                        handleChange("professionalTitle", e.target.value)
                      }
                    />
                    {errors.professionalTitle && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.professionalTitle}
                      </p>
                    )}
                  </div>
                  <div>
                    <WelcomeInput
                      label="Nationality"
                      id="nationality"
                      placeholder="Nationality"
                      value={personalInfo.nationality || ""}
                      onChange={(e) =>
                        handleChange("nationality", e.target.value)
                      }
                    />
                    {errors.nationality && (
                      <p className="text-red-500 text-sm mt-1">
                        {errors.nationality}
                      </p>
                    )}
                  </div>
                </div>
              </form>
            </div>
            <NextButton
              to="/work-experience"
              onClick={handleNextClick}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default PersonalInformation;
