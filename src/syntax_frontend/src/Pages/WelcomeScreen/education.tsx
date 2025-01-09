import { useState } from "react";
import WelcomeHeader from "@/components/welcomeHeader";
import WelcomeDescription from "@/components/welcomeDescription";
import SidebarLinks from "@/components/SidebarLinks";
import WelcomeInput from "@/components/welcomeInput";
import { NextButton, BackButton } from "@/components/welcomeNavButtons";
import arrow2 from "../../assets/images/arrow2.svg";

interface EducationRecord {
  id: number;
  degreeType: string;
  fieldStudy: string;
  universityName: string;
  location: string;
  startDate: string;
  endDate: string;
  degreeClass: string;
}

const Education: React.FC = () => {
  const [educationRecords, setEducationRecords] = useState<EducationRecord[]>([]);
  const [currentEducation, setCurrentEducation] = useState<EducationRecord>({
    id: Date.now(),
    degreeType: "",
    fieldStudy: "",
    universityName: "",
    location: "",
    startDate: "",
    endDate: "",
    degreeClass: "",
  });

  const handleInputChange = (key: keyof EducationRecord, value: string) => {
    setCurrentEducation({ ...currentEducation, [key]: value });
  };

  const handleAddEducation = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      currentEducation.degreeType &&
      currentEducation.fieldStudy &&
      currentEducation.universityName &&
      currentEducation.location &&
      currentEducation.startDate &&
      currentEducation.endDate
    ) {
      setEducationRecords([
        ...educationRecords,
        { ...currentEducation, id: Date.now() },
      ]);
      setCurrentEducation({
        id: Date.now(),
        degreeType: "",
        fieldStudy: "",
        universityName: "",
        location: "",
        startDate: "",
        endDate: "",
        degreeClass: "",
      });
    } else {
      alert("Please fill in all required fields before adding education.");
    }
  };

  const handleEditEducation = (id: number) => {
    const educationToEdit = educationRecords.find((edu) => edu.id === id);
    if (educationToEdit) {
      setCurrentEducation(educationToEdit);
      setEducationRecords(educationRecords.filter((edu) => edu.id !== id));
    }
  };

  return (
    <>
      <section>
        <WelcomeHeader leftLabel="Back" />
        <div className="flex justify-center items-center h-auto pt-32 pr-[0.8125rem] pb-10 pl-3.5 gap-20">
          <div className="flex flex-col justify-center items-center gap-[2.62rem]">
            <WelcomeDescription
              heading="Add Your Education"
              subheading="Provide details of your education, from your most recent or relevant degree to previous academic achievements."
            />
            <div className="flex justify-start gap-[7rem] w-max">
              <SidebarLinks />
              <form
                onSubmit={handleAddEducation}
                className="flex flex-col gap-7 align-center justify-center p-3"
              >
                <WelcomeInput
                  label="Degree Type"
                  id="degreeType"
                  placeholder="Bachelor's"
                  value={currentEducation.degreeType}
                  onChange={(e) =>
                    handleInputChange("degreeType", e.target.value)
                  }
                />
                <WelcomeInput
                  label="Field of Study"
                  id="fieldStudy"
                  placeholder="Computer Science"
                  value={currentEducation.fieldStudy}
                  onChange={(e) =>
                    handleInputChange("fieldStudy", e.target.value)
                  }
                />
                <WelcomeInput
                  label="University/College Name"
                  id="universityName"
                  placeholder="Stanford University"
                  value={currentEducation.universityName}
                  onChange={(e) =>
                    handleInputChange("universityName", e.target.value)
                  }
                />
                <WelcomeInput
                  label="Location"
                  id="location"
                  placeholder="Stanford, CA, United States"
                  value={currentEducation.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                />
                <WelcomeInput
                  label="Start Date"
                  id="startDate"
                  placeholder="Aug, 2020"
                  value={currentEducation.startDate}
                  onChange={(e) =>
                    handleInputChange("startDate", e.target.value)
                  }
                />
                <WelcomeInput
                  label="End Date or Expected Graduation Date"
                  id="endDate"
                  placeholder="Aug, 2024"
                  value={currentEducation.endDate}
                  onChange={(e) => handleInputChange("endDate", e.target.value)}
                />
                <WelcomeInput
                  label="Class of Degree (Optional)"
                  id="degree"
                  placeholder="First Class"
                  value={currentEducation.degreeClass}
                  onChange={(e) =>
                    handleInputChange("degreeClass", e.target.value)
                  }
                />
                {/* Save Education */}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-max rounded-[1.8rem] py-2 px-5 bg-white [box-shadow:-2px_-4px_25.7px_0_rgba(0,0,0,0.1),_2px_4px_28.7px_0_rgba(0,0,0,0.1)] self-center"
                >
                  <p className="text-[#3D3F4E] text-center text-lg font-semibold leading-8">
                    Add Education
                  </p>
                  <div className="flex items-center justify-center bg-[#3D3F4E] w-[2.33rem] h-[2.33rem] rounded-full">
                    <img src={arrow2} alt="Add Education" />
                  </div>
                </button>
              </form>
            </div>

            {/* Render Added Education */}
            <div className="mt-10 w-full flex flex-col gap-6">
              {educationRecords.map((education) => (
                <div
                  key={education.id}
                  className="bg-gray-100 p-4 rounded-lg shadow-md flex justify-between items-start"
                >
                  <div>
                    <h4 className="font-semibold text-lg">
                      {education.degreeType} in {education.fieldStudy}
                    </h4>
                    <p className="text-sm text-gray-600">
                      {education.universityName} - {education.location}
                    </p>
                    <p className="text-sm text-gray-600">
                      {education.startDate} - {education.endDate}
                    </p>
                    {education.degreeClass && (
                      <p className="text-sm">Class: {education.degreeClass}</p>
                    )}
                  </div>
                  <button
                    onClick={() => handleEditEducation(education.id)}
                    className="text-blue-500 text-sm underline"
                  >
                    Edit
                  </button>
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <BackButton />
              <NextButton to="/achievements" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
