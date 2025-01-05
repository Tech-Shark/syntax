import React, { useRef } from "react";
import star from "../../assets/images/star.svg";
import star1 from "../../assets/images/star1.svg";
import star4 from "../../assets/images/star4.svg";
import arrow3 from "../../assets/images/arrow3.svg";
import { NextButton } from "../welcomeNavButtons";

const Pricing: React.FC = () => {
  const premiumPlanRef = useRef<HTMLDivElement>(null);

  const scrollToPremiumPlan = () => {
    if (premiumPlanRef.current) {
      premiumPlanRef.current.scrollIntoView({
        behavior: "smooth", // Adds smooth scrolling animation
        block: "center", // Centers the premium pricing in the view
      });
    }
  };

  // Define pricing plans in an array
  const plans = [
    {
      id: 1,
      background: "bg-white",
      title: "$2/ Resume",
      color: "text-black",
      features: [
        "Pay as you go",
        "Basic CV templates with ATS compatibility",
        "Limited AI-powered CV scoring and optimization tips",
        "Basic token earnings per action (e.g., CV uploads, ATS analysis)",
        "Access to standard interactive CV suggestions",
        "Limited country-specific templates",
      ],
      icon: star,
      iconColor: "group-hover:animate-spin",
      imageBackground: "bg-black",
    },
    {
      id: 2,
      background: "bg-black",
      title: "$5/Month",
      color: "text-white",
      features: [
        "All Free Plan features, plus:",
        "Access to advanced CV templates and layout options",
        "Unlimited AI recommendations and ATS scoring",
        "Higher token earnings for each interaction",
        "Full access to drag-and-drop CV builder (desktop-only)",
        "In-depth country-specific customization",
        "Priority support and in-app notifications",
      ],
      icon: star4,
      iconColor: "group-hover:animate-spin",
      imageBackground: "bg-[#E1E0F3]",
    },
    {
      id: 3,
      background: "bg-[#E1E0F3]",
      title: "$20/Month",
      color: "text-black",
      features: [
        "All Premium Plan features, plus:",
        "Exclusive templates tailored to specific industries (e.g., tech, finance, etc.)",
        "Personalized CV feedback from AI for targeted roles",
        "Enhanced token rewards for maximum earning",
        "Access to a career resources library and tutorials",
        "Priority feature updates and new template releases",
      ],
      icon: star1,
      iconColor: "group-hover:animate-spin",
      imageBackground: "bg-black",
    },
  ];

  return (
    <div className="flex flex-col gap-14 pl-6 pr-6 lg:pl-[5rem] lg:pr-[5rem]">
      {/* Header Section */}
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold leading-normal">Pricing</h1>
        <p className="font-medium text-[1.1rem]">Flexible Pricing for Every Need!</p>
      </div>

      {/* Scroll Arrow Section */}
      <div className="flex-col items-center justify-center gap-10 hidden md:flex">
        <div
          className="flex items-center justify-center gap-10 rounded-full w-12 h-12 shadow-[-2.672px_-5.344px_34.334px_0px_rgba(0,0,0,0.10),2.672px_5.344px_38.341px_0px_rgba(0,0,0,0.10)] cursor-pointer"
          onClick={scrollToPremiumPlan}
        >
          <img src={arrow3} alt="arrow 3" className="rotate-90" />
        </div>

        <div className="flex justify-between w-full">
          <span className="text-[1.3rem] font-normal leading-normal flex flex-col gap-3">
            <h1 className="font-semibold">Free Plan:</h1>
            <p className="text-lg">
              Access essential tools, basic CV templates, and <br />
              AI-powered ATS scoring to improve your CV's <br />
              visibility. Earn tokens with each use, gaining <br />
              insights into your CV’s performance.
            </p>
          </span>
          <span className="text-[1.3rem] font-normal leading-normal flex flex-col gap-3">
            <h1 className="font-semibold">Premium Plan:</h1>
            <p className="text-lg">
              Unlock all features, including advanced templates, <br />
              in-depth AI suggestions, and higher token rewards. <br />
              Customize your CV with the drag-and-drop builder <br />
              and access exclusive features designed to maximize <br />
              your job search success.
            </p>
          </span>
        </div>
      </div>

      {/* Pricing Plans */}
      <div className="flex flex-col gap-[4.2rem] lg:flex-row">
        {plans.map((plan) => (
          <div
            key={plan.id}
            ref={plan.id === 3 ? premiumPlanRef : null} // Attach ref to the Premium Plan div
            className={`group hover:border-black rounded-r-[0.4rem] rounded-b-[0.4rem] hover:ease-in-out transition-all`}
          >
            <div
              className={`flex flex-col ${plan.background} gap-8 pt-6 pb-7 px-[0.88rem] shadow-[0px_0px_0px_2.194px_rgba(0,0,0,0.00)_inset,4.387px_4.387px_16.452px_0px_rgba(61,63,78,0.10)] group-hover:border-black group-hover:border-4 hover:border-r-8 hover:border-b-8`}
            >
              <div className={`${plan.imageBackground} h-28 rounded-[0.3rem] `}></div>
              <div className={`${plan.color} flex flex-col gap-6`}>
                {/* Title and Icon */}
                <div className="flex justify-between">
                  <h1 className="text-[1.9rem] font-semibold leading-10">{plan.title}</h1>
                  <img src={plan.icon} alt="icon" className={`w-10 h-10 ${plan.iconColor}`} />
                </div>

                {/* Features */}
                <ul className="list-disc pl-4 flex flex-col gap-2">
                  {plan.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Section */}
      <div className="flex items-center justify-center">
        <NextButton to="/welcome" text="Build CV" />
      </div>
    </div>
  );
};

export default Pricing;
