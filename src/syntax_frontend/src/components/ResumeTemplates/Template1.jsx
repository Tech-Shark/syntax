import React from "react";

const CVTemplate = ({ fields, hiddenFields, toggleFieldVisibility }) => {
    
  const renderSection = (key, title, content) => (
    !hiddenFields[key] && (
      <div>
        <div className="flex justify-between items-center">
          {title && <h3 className="text-xl font-semibold">{title}</h3>}
          <button
            className="text-sm text-gray-500 hover:text-gray-800"
            onClick={() => toggleFieldVisibility(key)}
          >
            {hiddenFields[key] ? "Show" : "Hide"}
          </button>
        </div>
        <div className="mt-2">{content}</div>
        <hr className="my-4" />
      </div>
    )
  );
  // 
  return (
    <div className="shadow-lg bg-white">
      <div className="pt-4">
      <header className="text-left mt-4 bg-[#F4F4F4] p-10 mb-6">
        <h1 className="text-5xl mb-2 font-light text-[#464A4E] ">{fields.firstName} <span className="font-bold">{fields.lastName}</span></h1>
        <h2 className="text-lg text-gray-600">{fields.title}</h2>
      </header>
      </div>

      <div className="grid grid-cols-1 p-10 md:grid-cols-3 gap-4">
        {/* Left Column */}
        <div>
          {renderSection("phone", <p>{fields.phone}</p>)}
          {renderSection("email", <p>{fields.email}</p>)}
          {renderSection("address", <p>{fields.address}</p>)}
          {renderSection("website", <p>{fields.website}</p>)}
          {renderSection("skills", "Skills", (
            <ul className="list-disc ml-6">
              {fields.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
          ))}
          {renderSection("education", "Education", (
            fields.education.map((edu, idx) => (
              <div key={idx} className="mb-4">
                <h4 className="font-semibold">{edu.degree}</h4>
                <p>{edu.school}</p>
                <p className="text-sm text-gray-500">{edu.year}</p>
              </div>
            ))
          ))}
        </div>

        {/* Right Column */}
        <div className="col-span-2">
          {renderSection("profile", "Profile/Summary", <p>{fields.profile}</p>)}
          {renderSection("experience", "Experience", (
            fields.experience.map((exp, idx) => (
              <div key={idx} className="mb-4">
                <h4 className="font-semibold">{exp.position}</h4>
                <p>{exp.company}</p>
                <p className="text-sm text-gray-500">{exp.year}</p>
                <ul className="list-disc ml-6">
                  {exp.descriptions.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))
          ))}
        </div>
      </div>
    </div>
  );
};

export default CVTemplate;
