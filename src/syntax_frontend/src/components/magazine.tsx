import React from "react";
import magazine1 from "../assets/images/magazine1.svg";
import magazine2 from "../assets/images/magazine2.svg";
import magazine3 from "../assets/images/magazine3.svg";

interface MagazineProps {
  width?: string;
  height?: string;
}

const Magazine: React.FC<MagazineProps> = ({
  width = "w-[25rem]",
  height = "h-48",
}) => {
  return (
    // <div
    //   className={`relative flex items-end justify-center ${width} ${height} group pb-7`}
    // >
    //   {/* First Magazine - Peeks slightly to the right */}
    //   <img
    //     src={magazine1}
    //     alt="magazine 1"
    //     className={`absolute bottom-0 right-8 ${width} ${height} transition-transform duration-500 group-hover:rotate-[6deg] group-hover:translate-y-[-10px]`}
    //   />
    //   {/* Second Magazine - Default in center */}
    //   <img
    //     src={magazine2}
    //     alt="magazine 2"
    //     className={`absolute bottom-0 ${width} ${height} transition-transform right-8 duration-500 group-hover:rotate-[-6deg] group-hover:translate-y-[-15px]`}
    //   />
    //   {/* Third Magazine - Peeks slightly to the left */}
    //   <img
    //     src={magazine3}
    //     alt="magazine 3"
    //     className={`absolute bottom-0 left-8 ${width} ${height} transition-transform duration-500 group-hover:rotate-[3deg] group-hover:translate-y-[-5px]`}
    //   />
    // </div>

    <h1>Magazine</h1>
  );
};

export default Magazine;
