import React, { useState } from "react";
import CVTemplate from "./Template";
import FieldForm from "./FieldForm";

const CvPage = () => {
  const [fields, setFields] = useState({
    firstName: "John",
    lastName: "Doe",
    title: "Software Engineer",
    phone: "0806-289-8015",
    email: "john.doe@example.com",
    address: "5 Quarters Road, GRA, Ikot Ekpene, Akwa Ibom State, Nigeria",
    website: "www.abn.com",
    skills: ["React", "Tailwind CSS", "JavaScript"],
    education: [
      { degree: "BSc Computer Science", school: "XYZ University", year: "2015-2019" },
    ],
    profile: "A passionate software engineer with expertise in modern web development.",
    experience: [
      {
        position: "Frontend Developer",
        company: "ABC Corp",
        year: "2020-2023",
        descriptions: ["Developed React components", "Collaborated with backend teams"],
      },
    ],
  });

  const [hiddenFields, setHiddenFields] = useState({});
  const [selectedField, setSelectedField] = useState(null);

  const updateField = (key, value) => {
    setFields((prev) => ({ ...prev, [key]: value }));
  };

  const toggleFieldVisibility = (key) => {
    setHiddenFields((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <div className="p-6  bg-gray-100 min-h-screen">
      <div className="max-w-5xl mx-auto justify-center items-center flex flex-col md:flex-row gap-6">
        {/* <div className="w-full md:w-1/3 bg-white p-4 shadow-md rounded-lg">
          <FieldForm
            fields={fields}
            setFields={updateField}
            selectedField={selectedField}
            setSelectedField={setSelectedField}
          />
        </div> */}
        <div className="w-full md:w-2/3">
          <CVTemplate
            fields={fields}
            hiddenFields={hiddenFields}
            toggleFieldVisibility={toggleFieldVisibility}
          />
        </div>
      </div>
    </div>
  );
};

export default CvPage;
