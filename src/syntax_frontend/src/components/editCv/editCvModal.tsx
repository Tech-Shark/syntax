import React, { useState } from "react";

interface EditCvModalProps {
  isOpen: boolean;
  onClose: () => void;
  cvData: any; // Replace with the actual CvData type for better type safety
  onSave: (updatedCvData: any) => void;
}

const EditCvModal: React.FC<EditCvModalProps> = ({ isOpen, onClose, cvData, onSave }) => {
  const [formData, setFormData] = useState(cvData);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] md:w-[40%] p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Edit CV</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            className="border border-gray-300 rounded-md p-2"
          />
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="border border-gray-300 rounded-md p-2"
          />
          <textarea
            name="profile"
            value={formData.profile}
            onChange={handleChange}
            placeholder="Profile Summary"
            className="border border-gray-300 rounded-md p-2"
          />
          {/* Add more fields for other editable sections */}
        </div>
        <div className="flex justify-end gap-4 mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-black rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCvModal;
