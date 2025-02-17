import React from "react";
import arrow_up from "@/assets/images/arrow_up.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CustomDot = ({ onClick, ...rest }: any) => {
  const { index, active } = rest;
  return (
    <button
      className={`lg:hidden h-2 w-2 rounded-full mx-1 ${
        active ? "bg-[#6D53E7] w-8 h-2 rounded-[0.63rem]" : "bg-[#5D6078] w-[0.5rem] h-[0.5rem] rounded-full"
      }`}
      onClick={() => onClick()}
      aria-label={`Go to slide ${index + 1}`}
    />
  );
};

const DashboardData: React.FC = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1.5,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        arrows={false} // Disable arrows
        customDot={<CustomDot />} // Use custom dots
        showDots // Enable dots
        renderDotsOutside={false} // Keep dots inside
        containerClass="mt-8 "
      >
        {/* Repeated content */}
        <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-[#E1E0F3] h-[9.94rem] lg:ml-0">
          <div className="flex items-center gap-4 mb-2">
            <p className="font-bold text-[2.89rem] leading-[3.64rem]">05</p>
            <img src={arrow_up} alt="arrow up" />
          </div>
          <p className="text-[1.34rem] leading-[1.68rem]">Total CVs Created</p>
        </div>
        <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem] ml-4">
          <div className="flex items-center gap-4 mb-2">
            <p className="font-bold text-[2.89rem] leading-[3.64rem]">05</p>
          </div>
          <p className="text-[1.34rem] leading-[1.68rem]">CVs Shared</p>
        </div>
        <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem] ml-4">
          <div className="flex items-center gap-4 mb-2">
            <p className="font-bold text-[2.89rem] leading-[3.64rem]">05</p>
          </div>
          <p className="text-[1.34rem] leading-[1.68rem]">Current ATS Score</p>
          <p className="text-[1.34rem] leading-[1.68rem]">(Average)</p>
        </div>
        <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem] ml-4">
          <div className="flex items-center gap-4 mb-2">
            <p className="font-bold text-[2.89rem] leading-[3.64rem]">05</p>
          </div>
          <p className="text-[1.34rem] leading-[1.68rem]">Tokens Available</p>
        </div>
        <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem] ml-4">
          <div className="flex items-center gap-4 mb-2">
            <img src={arrow_up} alt="arrow up" />
          </div>
          <p className="text-[1.34rem] leading-[1.68rem]">Last Updated CV</p>
        </div>
      </Carousel>

    </>
  );
};

export default DashboardData;
