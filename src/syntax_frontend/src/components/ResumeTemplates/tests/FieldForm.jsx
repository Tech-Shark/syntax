import React, { useState } from "react";

const FieldForm = ({ fields, setFields, selectedField, setSelectedField }) => {
  const [value, setValue] = useState(fields[selectedField] || "");

  const handleSave = () => {
    setFields(selectedField, value);
    setSelectedField(null);
  };

  return (
    <div>
      <h3 className="text-lg font-semibold">Edit Fields</h3>
      <select
        value={selectedField || ""}
        onChange={(e) => setSelectedField(e.target.value)}
        className="w-full p-2 border rounded my-2"
      >
        <option value="">Select a field</option>
        {Object.keys(fields).map((key) => (
          <option key={key} value={key}>{key}</option>
        ))}
      </select>

      {selectedField && (
        <div>
          <textarea
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full p-2 border rounded my-2"
            rows="5"
          />
          <button
            onClick={handleSave}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default FieldForm;
