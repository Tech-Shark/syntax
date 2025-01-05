import { NextButton } from "../welcomeNavButtons";
import Magazine from "../magazine";

const Footer: React.FC = () => {

  return (
    <>
      <div className="flex flex-col gap-[6.8rem] pl-6 pr-6 lg:justify-between lg:pl-[5rem] lg:pr-[5rem]">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
          <div className="bg-[#ABAEBE] h-[28rem] items-center justify-center lg:h-[15rem] lg:w-[15rem]">
          <div className="bg-[#D9D9D9] h-[28rem] rounded-tr-[200px] lg:h-[15rem] lg:w-[14.5rem]"></div>
          </div>

          <div className="flex flex-col gap-[3.3rem]">
          <p>Let AI do the work. Build a CV <br /> that gets you noticed.</p>
          <p>Take the next step in your career <br /> with a CV tailored to showcase <br /> your strengths."</p>
          </div>

          <div className="flex items-center justify-center gap-[4.8rem]">
          <ul className="flex gap-[1.9rem] flex-col">
            <li><a href="">Pricing</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
            <li><a href="">Create Cv</a></li>
          </ul>
          <ul className="flex gap-[1.9rem] flex-col">
            <li><a href="">LinkedIn</a></li>
            <li><a href="">Twitter (X)</a></li>
            <li><a href="">Instagram</a></li>
          </ul>
          </div>
          
        </div>

        <div className="flex items-center justify-center">
          <NextButton to="/welcome" text="Build CV" />
        </div>
      </div>

      <div className="flex flex-col bg-[#f7f7ff] h-auto ">
        {/* Header */}
        <h1 className="text-6xl leading-normal text-center font-bold mb-10 lg:text-[6.6rem] lg:mb-0">
          Your Next <br className="lg:hidden"/> Job <br className="hidden lg:block"/> Starts <br className="lg:hidden"/> with the <br /> Perfect CV
        </h1>

        {/* Centered Magazine */}
        <div className="flex justify-center bg-[#f7f7ff] opacity-80">
          <Magazine width="w-[90%] lg:w-[100%]" />
        </div>
      </div>
    </>
  );
};
export default Footer;