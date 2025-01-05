import WelcomeDescription from "@/components/welcomeDescription";
import DashboardCarousel from "@/components/Dashboard/dashboardCarousel";
import UploadCvPlus from "@/components/uploadcvPlus";
import arrow3 from "@/assets/images/arrow3.svg";
import filterIcon from "@/assets/images/filterIcon.svg"
import star4 from "@/assets/images/star3.svg";
import Magazine from "@/components/magazine";

const UserDashBoard: React.FC = () => {
  return (
    <>
      {/* navbutton */}
      <nav></nav>
      <div className="flex flex-col h-auto pt-11 pb-11 gap-[3.75rem]">
        <WelcomeDescription heading="Welcome Seyi" subheading="Pick a template that suits your style, or explore tailored recommendations based on your career goals." />

        <div className="pl-7"><DashboardCarousel /></div>

        <div className="flex justify-between items-center pl-7 pr-7">
          <span className="flex items-center gap-2">
            <h1 className="font-semibold text-[1.18rem] leading-normal">My Templates</h1>
            <img src={filterIcon} alt="filter Icon" />
          </span>

          <div className="flex items-center justify-center gap-2 bg-black w-[3.8rem] h-[3.8rem] rounded-full">
            <div className="flex items-center justify-center gap-2 bg-white w-[2.3rem] h-[2.3rem] rounded-full">
              <img src={arrow3} alt="arrow 3" className="rotate-[-45deg]"/>
            </div>
          </div>
        </div>

        <UploadCvPlus supportedFileText={`Your CVs will appear here once you create them. \n  Get started and build a CV that stands out. `}
        iconWidth="w-16"
        iconHeight="h-16"/>

        <div className="flex justify-between items-center pl-7 pr-7">
          <span className="flex items-center gap-1">
            <h1 className="font-semibold text-[1rem] leading-normal">Recommended Templates </h1>
            <img src={filterIcon} alt="filter Icon" />
          </span>

          <div className="flex items-center justify-center gap-2 bg-black w-[3.8rem] h-[3.8rem] rounded-full">
            <div className="flex items-center justify-center gap-2 bg-white w-[2.3rem] h-[2.3rem] rounded-full">
              <img src={arrow3} alt="arrow 3" className="rotate-[-45deg]"/>
            </div>
          </div>
        </div>

        <div className=" pr-7 pl-7 ">
          <div className="bg-black h-[34rem] rounded-[0.4rem] py-4 px-4">
            <div className="bg-[#E1E0F3] w-full h-[15rem]">
              {/* <Magazine /> */}
            </div>
            <div className="flex justify-center flex-col items-center gap-5">
              <div>
                <div></div>
                <div className="flex gap-4">
                  <span className="w-auto py-[0.4rem] px-[0.62rem] bg-white text-black flex items-center justify-center rounded-[0.2rem]">Bold</span>
                  <span className="w-auto py-[0.4rem] px-[0.62rem] bg-white text-black flex items-center justify-center rounded-[0.2rem]">Visual</span>
                  <span className="w-auto py-[0.4rem] px-[0.62rem] bg-white text-black flex items-center justify-center rounded-[0.2rem]">Unique</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2 bg-white">
                <h1>Creative Resume</h1>
                <img src={star4} alt="star 4" />
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserDashBoard;