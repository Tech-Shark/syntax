import React from "react";

function Template17({ cvData }) {
  // Mock data for demonstration
  const mockData = {
    name: "HARPER RUSSO",
    contact: {
      phone: "+123-456-7890",
      email: "hello@reallygreatsite.com",
      website: "@reallygreatsite",
      address: "123 Anywhere St., Any City, ST 12345"
    },
    title: "BUSINESS OPERATIONS MANAGER",
    summary: "I am a proficient Business Operations Manager with a strong focus on achieving outcomes, possessing in-depth expertise in media management and assuming leadership responsibilities. I have demonstrated exceptional leadership capabilities while overseeing and directing media operations in North America and the APAC region. I have a proven track record of enhancing team performance, fostering internal loyalty, and cultivating collaborative alliances with internal and external stakeholders.",
    strengths: [
      "P&L Management",
      "Business Development",
      "Strategic Planning",
      "Financial Reporting",
      "Negotiation Skills",
      "Client Relationship Management",
      "Team Leadership",
      "Communication",
      "Operations Management"
    ],
    experience: [
      {
        company: "Ginyard International Co.",
        title: "Operations Manager",
        period: "October 2019 - Present",
        description: "Demonstrated exceptional leadership by overseeing nationwide operations, resulting in a phenomenal growth rate of 120% within two years. Played a pivotal role in spearheading the conception and execution of subscription video-on-demand over-the-top streaming products.",
        accomplishments: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin nec augue pharetra, imperdiet ex ut, lorem feugiat pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Nunc vel ex in velit volutpat commodo sit amet vitae elit. Nam et sagittis vitae ex volutpat ipsa.",
          "Aenean tristique mattis vitae facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Vivamus aliquam leo molestie velit placerat, eget tristique mauris egestas. Fusce luctus nulla eget lorem imperdiet pretium. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          "Proin et nisl tellend, posuere lectus et, leo. Praesent vitae massa id odio vulputate posuere is."
        ]
      },
      {
        company: "Giggling Platypus Co.",
        title: "Business Development Manager",
        period: "August 2017 - September 2019",
        description: "Drove the organisation to remarkable achievements, realising an exceptional growth rate of 180% over two years. Proactively identified solutions to enhance the sales team's capabilities.",
        accomplishments: [
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus aliquam justo et libero sodales.",
          "Vivamus aliquam leo molestie velit placerat, eget tristique mauris egestas. Vivamus euismod leo molestie velit pharetra, eget tristique mauris egestas.",
          "Ut euismod neque in tellus bibendum, et tristique quam bibendum. Sed eu orci at malesu at.",
          "Suspendisse ornare purus ut viverra semper. Vestibulum ante ipsum primis in faucibus orci luctus."
        ]
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-700 p-8">
      <div className="max-w-4xl mx-auto text-black bg-white shadow-lg p-8">
        {/* Header Section */}
        <div className="text-center mt-10 mb-8">
          <h1 className="text-4xl font-bold mb-2">{mockData.name}</h1>
          <div className="text-sm space-y-1">
            <div className="flex justify-center gap-4">
              <span>{mockData.contact.phone}</span>
              <span>•</span>
              <span>{mockData.contact.email}</span>
              <span>•</span>
              <span>{mockData.contact.website}</span>
            </div>
            <div>{mockData.contact.address}</div>
          </div>
        </div>

        <hr className="border-black font-bold bg-black h-1 my-6" />

        {/* Title and Summary */}
        <div className="mb-8">
          <h2 className="text-center text-xl font-bold mb-4 uppercase">
            {mockData.title}
          </h2>
          <p className="text-sm leading-relaxed">
            {mockData.summary}
          </p>
        </div>

        <hr className="border-black font-bold bg-black my-6" />

        {/* Strengths and Expertise */}
        <section className="mb-8">
          <h2 className="text-center text-xl font-bold mb-4 uppercase">
            Strengths and Expertise
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {mockData.strengths.map((strength, index) => (
              <p key={index} className="text-sm text-center">
                {strength}
              </p>
            ))}
          </div>
        </section>

        <hr className="border-black font-bold bg-black my-6" />

        {/* Professional Experience */}
        <section>
          <h2 className="text-center text-xl font-bold mb-6 uppercase">
            Professional Experience
          </h2>
          {mockData.experience.map((exp, index) => (
            <div key={index} className="mb-8">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-bold">{exp.company}</h3>
                  <p className="font-bold">{exp.title}</p>
                </div>
                <span className="font-bold">{exp.period}</span>
              </div>
              <p className="text-sm mb-4">
                {exp.description}
              </p>
              <div>
                <p className="mb-2">Accomplishments:</p>
                <ul className="list-disc pl-5 space-y-2">
                  {exp.accomplishments.map((accomplishment, idx) => (
                    <li key={idx} className="text-sm mt-4">
                      {accomplishment}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Template17;
