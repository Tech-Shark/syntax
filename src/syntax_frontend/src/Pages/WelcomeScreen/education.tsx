import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { addEducation, updateEducation, removeEducation } from "@/redux/cvDataSlice";
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
  const dispatch = useDispatch<AppDispatch>();
  const educationRecords = useSelector((state: RootState) => state.cvData.education);
  const [errors, setErrors] = useState<Record<string, string>>({});
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
    setErrors(prev => ({ ...prev, [key]: "" }));
  };

   const validateFields = () => {
    const newErrors: Record<string, string> = {};
    const requiredFields: (keyof EducationRecord)[] = [
      'degreeType', 'fieldStudy', 'universityName', 'location', 'startDate', 'endDate'
    ];

    requiredFields.forEach(field => {
      if (!currentEducation[field]) {
        newErrors[field] = "This field is required";
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddEducation = (event: React.FormEvent) => {
    event.preventDefault();
    
    if (!validateFields()) return;

    dispatch(addEducation({ ...currentEducation, id: Date.now() }));
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
  };

  const handleEditEducation = (id: number) => {
    const educationToEdit = educationRecords.find(edu => edu.id === id);
    if (educationToEdit) {
      setCurrentEducation(educationToEdit);
      dispatch(removeEducation(id));
    }
  };

  const handleNextClick = () => {
    if (educationRecords.length === 0) {
      setErrors({ form: "Please add at least one education record" });
      return false;
    }
    return true;
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
                {[
                  { label: "Degree Type", key: "degreeType", placeholder: "Bachelor's" },
                  { label: "Field of Study", key: "fieldStudy", placeholder: "Computer Science" },
                  { label: "University/College Name", key: "universityName", placeholder: "Stanford University" },
                  { label: "Location", key: "location", placeholder: "Stanford, CA, United States" },
                  { label: "Start Date", key: "startDate", placeholder: "Aug, 2020" },
                  { label: "End Date or Expected Graduation Date", key: "endDate", placeholder: "Aug, 2024" },
                  { label: "Class of Degree (Optional)", key: "degreeClass", placeholder: "First Class", required: false },
                ].map(({ label, key, placeholder, }) => (
                  <div key={key}>
                    <WelcomeInput
                      label={label}
                      id={key}
                      placeholder={placeholder}
                      value={currentEducation[key as keyof EducationRecord] as string}
                      onChange={(e) => handleInputChange(key as keyof EducationRecord, e.target.value)}
                    />
                    {errors[key] && <p className="text-red-500 text-sm">{errors[key]}</p>}
                  </div>
                ))}

                {errors.form && <p className="text-red-500 text-sm text-center">{errors.form}</p>}

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
            <div className="mt-10 w-full md:w-[70%] flex flex-col gap-6">
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
              <NextButton to="/achievements" onClick={handleNextClick} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
