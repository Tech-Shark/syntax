import { Link, useNavigate } from "react-router-dom";
import backwardsArrow from "../assets/images/backwardsArrow.svg";
import nextArrow from "../assets/images/nextArrow.svg";


interface WelcomeHeaderProps {
  leftLabel?: string;
  leftLink?: string;
}

const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({
  leftLabel = "Home",
  leftLink = "/",
}) => {
  const navigate = useNavigate();

  const prevPage = () => {
    navigate(-1);
  };
  return (
    <>
      <header className="flex justify-between items-center pt-[0.9375rem] pr-[0.8125rem] pb-0 pl-3.5 bg-white h-20 fixed w-full z-50">
          <div className="flex items-center gap-5">
            <div className="flex items-center justify-center bg-[#d2d2d2] w-8 h-8 rounded-full shadow-[0.67px_0.67px_13.28px_rgba(61,63,78,0.5)]" onClick={prevPage}>
              <img src={backwardsArrow} alt="Previous page" />
            </div>
            <Link to={leftLink} className="text-center text-base text-[#3D3F4E] font-medium leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)]">{leftLabel}</Link>
          </div>
        <div className="flex items-center gap-5">
          <Link to="/user-dashboard" className="text-center text-base text-[#3D3F4E] font-medium leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)]">Dashboard</Link>
          <div className="flex items-center justify-center bg-[#3D3F4E] w-8 h-8 rounded-full shadow-[0.67px_0.67px_13.28px_rgba(61,63,78,0.5)]">
            <img src={nextArrow} alt="Next page" />
          </div>
        </div>
    </header>
    </>
  );

};
export default WelcomeHeader;