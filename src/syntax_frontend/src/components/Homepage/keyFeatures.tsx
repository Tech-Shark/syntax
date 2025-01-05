import React, { useState, useEffect } from "react";
import star from "../../assets/images/star.svg";
import frame19 from "../../assets/images/frame19.svg";
import star3 from "../../assets/images/star3.svg";
import star1 from "../../assets/images/star1.svg";
import star5 from "../../assets/images/star5.svg";
import { NextButton } from "../welcomeNavButtons";
import Magazine from "../magazine";

const KeyFeatures: React.FC = () => {
 const content = [
  {
    id: 0,
    title: "AI-Powered CV Generation",
    description: [
      "Syntax’s AI evaluates and scores your CV for ATS compatibility, suggesting",
      "improvements that help you get through automated filters.Tailored to your ",
      "industry, Syntax’s AI highlights essential keywords and formatting tips to",
      "make your CV more competitive",
    ],
    shape: star,
  },
  {
    id: 1,
    title: "Keyword Optimization",
    description: [
      "Syntax’s AI ensures your CV is rich with industry-specific keywords, boosting its visibility",
      "in automated screening systems.",
      "This makes your CV stand out to recruiters.",
    ],
    shape: frame19,
  },
  {
    id: 2,
    title: "Interactive CV Suggestions",
    description: [
      "Get real-time AI suggestions as you build,",
      "from keyword tips to formatting advice,",
      "so you can create a standout CV.",
    ],
    shape: star3,
  },
  {
    id: 3,
    title: "Token Reward System",
    description: [
      "Earn tokens for using Syntax with added perks for premium users.",
      "Actions like CV uploads and ATS analysis reward you with tokens.",
      "Redeem tokens for advanced features and make your experience more valuable.",
    ],
    shape: star1,
  },
];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");

  // Autoplay interval
  useEffect(() => {
    const autoplay = setInterval(() => {
      handleNext(); // Automatically move to the next content
    }, 4000); // Auto change every 4 seconds

    return () => clearInterval(autoplay); // Clear interval on unmount
  }, [currentIndex]);

  const handleNext = () => {
    setSlideDirection("right"); // Set sliding direction
    setIsSliding(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length); // Move to the next content
      setIsSliding(false);
    }, 1000); // Match slide-out animation duration
  };

  const handlePrevious = () => {
    setSlideDirection("left"); // Set sliding direction
    setIsSliding(true);

    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + content.length) % content.length); // Move to the previous content
      setIsSliding(false);
    }, 1000); // Match slide-out animation duration
  };

  const handleImageClick = (id: number) => {
    if (id === currentIndex) return; // If the clicked image is already displayed, do nothing

    setSlideDirection(id > currentIndex ? "right" : "left"); // Determine direction of slide
    setIsSliding(true);

    setTimeout(() => {
      setCurrentIndex(id); // Update content after slide-out
      setIsSliding(false); // Reset sliding state after animation
    }, 1000); // Match the duration of the animation
  };

  return (
    <div className="relative flex flex-col gap-12 pl-6 pr-6 lg:pl-[5rem] lg:pr-[5rem]">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold leading-normal">Key Features</h1>
        <p className="font-medium text-[1.1rem]">Why Choose Our AI Resume Builder?</p>
      </div>
      <div className="relative bg-[#EEF] flex flex-col rounded-[1.4rem] justify-center overflow-hidden group h-[42rem] md:h-[25rem]">
        {/* Magazine Component as Background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-40 md:opacity-30">
          <div className="transition-transform duration-500 group-hover:rotate-6">
            <Magazine width="w-[35rem]" height="h-[25rem]" />
          </div>
        </div>

        {/* Foreground Content */}
        <div className="relative flex flex-col p-4 gap-[2.8rem] lg:gap-8 z-10 ">
          {/* Dynamic Shape */}
          <div className="flex items-center justify-center relative">
            <img
              src={content[currentIndex].shape}
              alt="Dynamic Shape"
              className={`absolute left-0 w-12 h-12 transition-transform duration-1000 ease-in-out ${
                isSliding
                  ? slideDirection === "right"
                    ? "-translate-x-[100%]"
                    : "translate-x-[100%]"
                  : "translate-x-0"
              }`}
            />
          </div>

          {/* Dynamic Title */}
          <div className="relative overflow-hidden h-[3.4rem]">
            <h1
              className={`absolute text-[2.1rem] font-bold leading-[3.4rem] transition-transform duration-1000 ease-in-out ${
                isSliding
                  ? slideDirection === "right"
                    ? "-translate-x-[100%]"
                    : "translate-x-[100%]"
                  : "translate-x-0"
              }`}
            >
              {content[currentIndex].title}
            </h1>
          </div>

          {/* Dynamic Description */}
          <div className="relative overflow-hidden h-[11rem] md:h-[6rem]">
            <p
              className={`absolute font-normal leading-normal text-base transition-transform duration-1000 ease-in-out ${
                isSliding
                  ? slideDirection === "bottom"
                    ? "-translate-y-[100%]"
                    : "translate-y-[100%]"
                  : "translate-y-0"
              }`}
            >
              {content[currentIndex].description.map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  {index !== content[currentIndex].description.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>

        {/* Foreground Magazine Component at Bottom-Left */}
        <div className="absolute bottom-0 left-6 z-20">
          <Magazine
            width={currentIndex % 2 === 0 ? "w-[6rem]" : "w-[8rem]"}
            height={currentIndex % 2 === 0 ? "h-[4rem]" : "h-[5rem]"}
          />
        </div>
      </div>

      {/* Bottom Images */}
      <div className="flex flex-col gap-12 lg:flex-row lg:gap-6 items-center justify-center md:justify-between">
        <div className="flex items-center justify-center gap-6 mt-6 overflow-hidden">
        {content.map((item, index) => (
          <img
            key={item.id}
            src={item.shape}
            alt={`Image ${item.id}`}
            className={`w-12 h-12 transition-transform duration-1000 ease-in-out ${
              isSliding && index === currentIndex
                ? slideDirection === "right"
                  ? "-translate-x-[20%]"
                  : "translate-x-[20%]"
                : "translate-x-0"
            }`}
            onClick={() => handleImageClick(item.id)}
          />
        ))}
        </div>

        <div className="flex items-center justify-center">
          <NextButton to="/welcome" text="Build CV" />
        </div>
      </div>
    </div>
  );
};

export default KeyFeatures;
