import { Link, useNavigate } from "react-router-dom";
import backwardsArrow from "../assets/images/backwardsArrow.svg";
import nextArrow from "../assets/images/nextArrow.svg";

interface WelcomeHeaderProps {
  leftLabel?: string;
  leftLink?: string;

  children?: React.ReactNode;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({
  leftLabel = "Home",
  leftLink = "/",
  children,
}) => {
  const navigate = useNavigate();

  const prevPage = () => {
    navigate(-1);
  };

  return (
    <header className="bg-white flex items-center justify-between px-4 min-h-full">
      {/* Left Section */}
      <div className="flex items-center gap-5 self-start absolute left-4 z-50 mt-9 md:mt-12 sm:ml-11">
        {/* Back Button */}
        <button
          onClick={prevPage}
          className="flex items-center justify-center bg-[#d2d2d2] w-8 h-8 rounded-full shadow-[0.67px_0.67px_13.28px_rgba(61,63,78,0.5)]"
        >
          <img src={backwardsArrow} alt="Previous page" />
        </button>

        {/* Left Link */}
        <Link
          to={leftLink}
          className="text-base text-[#3D3F4E] font-medium leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)]"
        >
          {leftLabel}
        </Link>
      </div>

      {/* Middle Section (children) */}
      <div className="flex-1 flex justify-center z-10">
        {children}
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-5 self-start absolute right-4 z-50 mt-9 md:mt-12 sm:mr-11">
        <Link
          to="/user-dashboard"
          className="text-base text-[#3D3F4E] font-medium leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)]"
        >
          Dashboard
        </Link>
        <div className="flex items-center justify-center bg-[#3D3F4E] w-8 h-8 rounded-full shadow-[0.67px_0.67px_13.28px_rgba(61,63,78,0.5)]">
          <img src={nextArrow} alt="Next page" />
        </div>
      </div>
    </header>
  );
};

export default WelcomeHeader;
