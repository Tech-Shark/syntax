import React, { useState } from "react";
import avatar1 from "../../assets/images/avatar1.svg";
import avatar2 from "../../assets/images/avatar2.svg";
import avatar3 from "../../assets/images/avatar3.svg";
import nextArrow from "../../assets/images/nextArrow.svg";

const Testimonials: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  const testimonials = [
    {
      id: 1,
      text: `“Syntax transformed my CV in minutes! The AI suggestions helped me add key terms I hadn’t considered, and I started getting interview calls almost immediately.”`,
      avatar: avatar1,
      name: "Alex S.",
      position: "Marketing Specialist",
    },
    {
      id: 2,
      text: `“The drag-and-drop builder is a game-changer. I was able to organize my CV exactly how I wanted, and it looks so much more professional now.”`,
      avatar: avatar2,
      name: "Sarah G.",
      position: "Software Engineer",
    },
    {
      id: 3,
      text: `“I’ve used other CV builders before, but Syntax’s AI-driven ATS optimization really makes a difference. My CV has never performed better!”`,
      avatar: avatar3,
      name: "Seye F.",
      position: "Project Manager",
    },
    {
      id: 4,
      text: `“Syntax helped me tailor my CV for different industries quickly. The AI suggestions were spot on, saving me hours of work!”`,
      avatar: avatar2,
      name: "Taylor J.",
      position: "Product Manager",
    },
    {
      id: 5,
      text: `“The simplicity of Syntax’s interface combined with the powerful AI tools makes it a no-brainer for anyone serious about their career.”`,
      avatar: avatar1,
      name: "Chris W.",
      position: "Graphic Designer",
    },
    {
      id: 6,
      text: `“The ATS scoring feature was incredibly helpful. I was able to fine-tune my CV and pass the automated filters with ease!”`,
      avatar: avatar3,
      name: "Maya P.",
      position: "Data Scientist",
    },
  ];

  // Limit testimonials shown by default
  const displayedTestimonials = showMore ? testimonials : testimonials.slice(0, 3);

  return (
    <>
      {/* Testimonials Section */}
      <div className="flex flex-col gap-14 pl-6 pr-6 lg:pl-[5rem] lg:pr-[5rem]">
        <div className="flex flex-col gap-2">
          <h1 className="text-4xl font-bold leading-normal">Testimonials</h1>
          <p className="font-medium text-[1.1rem]">Hear from our Users</p>
        </div>

        <div className="flex flex-col gap-10">
          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {displayedTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="flex flex-col gap-12">
                <p className="leading-relaxed">{testimonial.text}</p>
                <div className="flex gap-3 items-center">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-10 h-10 rounded-full" />
                  <span className="text-[1.1rem] font-medium leading-normal">
                    <h1>{testimonial.name}</h1>
                    <p>{testimonial.position}</p>
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Show More/Less Button */}
          <div className="flex items-center justify-center">
            <button
              onClick={() => setShowMore((prev) => !prev)}
              className="bg-white max-w-max flex items-center justify-center gap-6 text-[1.1rem] leading-8 shadow-[-2.055px_-4.11px_26.407px_0px_rgba(0,0,0,0.10),2.055px_4.11px_29.49px_0px_rgba(0,0,0,0.10)] py-[0.5rem] px-[1.85rem] rounded-full hover:gap-10 transition-all"
            >
              {showMore ? "Show Less" : "Show More"}
              <div className="bg-[#3D3F4E] w-[2.3rem] h-[2.3rem] rounded-full flex items-center justify-center rotate-45">
                <img src={nextArrow} alt={showMore ? "Show Less" : "Show More"} />
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* End Testimonials Section */}
    </>
  );
};

export default Testimonials;
