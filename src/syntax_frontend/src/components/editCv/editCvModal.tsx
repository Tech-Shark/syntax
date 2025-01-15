import { useState } from "react";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: any) => void;
  initialData: any; // Initial CV data
}

const EditCvModal: React.FC<ModalProps> = ({
  title,
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    onSave(formData); // Pass edited data back to parent component
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-4/5 md:w-2/3 lg:w-1/2 p-6">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div className="space-y-4">
          {/* Prepopulate fields with current data */}
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          />
          <textarea
            name="profile"
            placeholder="Profile Summary"
            value={formData.profile || ""}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded"
          ></textarea>
          {/* Add fields for contact, skills, education, etc., dynamically */}
        </div>
        <div className="mt-4 flex justify-end gap-4">
          <button className="px-4 py-2 bg-gray-300 rounded" onClick={onClose}>
            Cancel
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white rounded" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCvModal;
