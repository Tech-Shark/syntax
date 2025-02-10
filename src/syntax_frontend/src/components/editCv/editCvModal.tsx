import React, { useState } from "react";

interface EditCvModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvData: any;
  onSave: (updatedCvData: any) => void;
  loading?: boolean
}

const EditCvModal: React.FC<EditCvModalProps> = ({ isOpen, onClose, cvData, onSave, loading=false }) => {
  const [formData, setFormData] = useState(cvData);
  const [activeSection, setActiveSection] = useState("personal");
  // const [loading, setLoading] = useState<boolean>(false)

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith("education.")) {
      const [_, index, field] = name.split(".");
      const updatedEducation = [...formData.education];
      updatedEducation[parseInt(index)][field] = value;
      setFormData({ ...formData, education: updatedEducation });
    } else if (name.startsWith("experience.")) {
      const [_, index, field] = name.split(".");
      const updatedExperience = [...formData.experience];
      updatedExperience[parseInt(index)][field] = value;
      setFormData({ ...formData, experience: updatedExperience });
    } else if (name === "interests") {
      setFormData({ ...formData, interests: value.split("\n") });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSaveAndClose = () => {
    onSave(formData);
    onClose();
  };

  const renderFormFields = () => {
    switch (activeSection) {
      case "personal":
        return (
          <div className="space-y-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="First Name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Professional Title"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        );

      case "contact":
        return (
          <div className="space-y-4">
            <input
              type="text"
              name="contact.phone"
              value={formData.contact.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="email"
              name="contact.email"
              value={formData.contact.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              name="contact.address"
              value={formData.contact.address}
              onChange={handleChange}
              placeholder="Full Address"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
            <input
              type="text"
              name="contact.website"
              value={formData.contact.website}
              onChange={handleChange}
              placeholder="Website URL"
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>
        );

      case "education":
        return (
          <div className="space-y-6">
            {formData.education.map((edu: any, index: number) => (
              <div key={index} className="space-y-4 border-b pb-4">
                <input
                  type="text"
                  name={`education.${index}.level`}
                  value={edu.level}
                  onChange={handleChange}
                  placeholder="Degree Level"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  name={`education.${index}.school`}
                  value={edu.school}
                  onChange={handleChange}
                  placeholder="Institution Name"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  name={`education.${index}.period`}
                  value={edu.period}
                  onChange={handleChange}
                  placeholder="Study Period (e.g., 2018-2020)"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>
            ))}
          </div>
        );

      case "experience":
        return (
          <div className="space-y-6">
            {formData.experience.map((exp: any, index: number) => (
              <div key={index} className="space-y-4 border-b pb-4">
                <input
                  type="text"
                  name={`experience.${index}.title`}
                  value={exp.title}
                  onChange={handleChange}
                  placeholder="Job Title"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  name={`experience.${index}.company`}
                  value={exp.company}
                  onChange={handleChange}
                  placeholder="Company Name"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  name={`experience.${index}.location`}
                  value={exp.location}
                  onChange={handleChange}
                  placeholder="Location"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  name={`experience.${index}.period`}
                  value={exp.period}
                  onChange={handleChange}
                  placeholder="Employment Period"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <textarea
                  name={`experience.${index}.description`}
                  value={exp.description}
                  onChange={handleChange}
                  placeholder="Job Description"
                  className="border border-gray-300 rounded-md p-2 w-full h-24"
                />
                <textarea
                  name={`experience.${index}.achievements`}
                  value={exp.achievements.join("\n")}
                  onChange={(e) => {
                    const achievements = e.target.value.split("\n");
                    const updatedExperience = [...formData.experience];
                    updatedExperience[index].achievements = achievements;
                    setFormData({ ...formData, experience: updatedExperience });
                  }}
                  placeholder="Achievements (one per line)"
                  className="border border-gray-300 rounded-md p-2 w-full h-32"
                />
              </div>
            ))}
          </div>
        );

      case "interests":
        return (
          <textarea
            name="interests"
            value={formData.interests.join("\n")}
            onChange={handleChange}
            placeholder="Enter each interest on a new line"
            className="border border-gray-300 rounded-md p-2 h-48 w-full"
          />
        );

      case "profile":
        return (
          <textarea
            name="profile"
            value={formData.profile}
            onChange={handleChange}
            placeholder="Professional Summary"
            className="border border-gray-300 rounded-md p-2 h-48 w-full"
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-full md:w-[90%] xl:w-[80%] p-4 md:p-6 rounded-lg shadow-lg flex flex-col h-[90vh] md:h-[85vh]">
        
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col h-full">
          <div className="flex gap-2 overflow-x-auto pb-4">
            {["personal", "contact", "education", "experience", "interests", "profile"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`p-2 min-w-[120px] text-center rounded-md capitalize flex-shrink-0 ${
                  activeSection === section
                    ? "bg-[#9796f8] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {section.replace("-", " ")}
              </button>
            ))}
          </div>
          
          <div className="flex-1 overflow-y-auto space-y-6 pb-24">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold capitalize">
                {activeSection.replace("-", " ")}
              </h3>
              {renderFormFields()}
            </div>
            
            <div className="border-t pt-4">
              <h2 className="text-lg font-bold mb-2">Quick Tips</h2>
              <div className="space-y-2 text-gray-600">
                <p>🖋️ Use action verbs like "developed", "managed", "created"</p>
                <p>📈 Include measurable achievements with numbers</p>
                <p>🎯 Focus on relevant skills and experiences</p>
                <p>📝 Keep paragraphs short and scannable</p>
                <p>🔍 Double-check dates and contact information</p>
              </div>
            </div>
          </div>

          {/* Mobile Action Buttons - Always Visible */}
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t py-4 px-4 md:hidden shadow-lg">
            <div className="flex justify-between gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition-colors flex-1"
              >
                Cancel
              </button>
              <button
                onClick={() => onSave(formData)}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex-1"
                disabled = {loading}
              >
                {loading ? "Analysing CV..." : "Save"}
              </button>
              <button
                onClick={handleSaveAndClose}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex-1"
                disabled = {loading}
              >
                {loading ? "Analysing CV..." : "Save and Close"}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Layout - 25% | 50% | 25% */}
        <div className="hidden md:flex flex-row flex-1 overflow-hidden gap-6">
          {/* Left Navigation */}
          <div className="w-1/4 flex flex-col gap-2 border-r pr-4 overflow-y-auto">
            {["personal", "contact", "education", "experience", "interests", "profile"].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`p-2 text-left rounded-md capitalize ${
                  activeSection === section
                    ? "bg-[#9796f8] text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {section.replace("-", " ")}
              </button>
            ))}
          </div>

          {/* Main Content */}
          <div className="w-2/4 flex flex-col overflow-hidden border-r border-gray-200 pr-6">
            <div className="flex flex-col gap-4 overflow-y-auto">
              <h3 className="text-xl font-semibold mb-4 capitalize">
                {activeSection.replace("-", " ")}
              </h3>
              {renderFormFields()}
            </div>
          </div>

          {/* Right Panel */}
          <div className="w-1/4 flex flex-col pl-6 overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">Quick Tips</h2>
            <div className="space-y-4 text-gray-600">
              <p>🖋️ Use action verbs like "developed", "managed", "created"</p>
              <p>📈 Include measurable achievements with numbers</p>
              <p>🎯 Focus on relevant skills and experiences</p>
              <p>📝 Keep paragraphs short and scannable</p>
              <p>🔍 Double-check dates and contact information</p>
            </div>
          </div>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex justify-center gap-4 mt-6 border-t pt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-black rounded-md hover:bg-gray-300 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={() => onSave(formData)}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            disabled = {loading}
          >
            {loading ? "Analysing CV..." : "Save"}
          </button>
          <button
            onClick={handleSaveAndClose}
            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
            disabled = {loading}
          >
            {loading ? "Analysing CV..." : "Save and Close"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCvModal;