import download_icon from "../../../assets/images/download_icon.svg";
import new_cv from "../../../assets/images/new_cv.svg";
import notification from "../../../assets/images/notification.svg";
import plus_icon from "../../../assets/images/plus_icon.svg";
import saved_cv from "../../../assets/images/saved_cv.svg";
import syntax_logo2 from "../../../assets/images/syntax_logo2.svg";
import template from "../../../assets/images/template.svg";

const DashboardAdminTop = () => {
  return (
    <div className="">
      <div className="flex justify-between w-full ">
        <h5 className="font-bold  sm:text-3xl  lg:text-[3rem]  md:leading-[4rem]">
          Welcome Admin
        </h5>
        <ul className="hidden md:flex gap-4 items-center ">
          <li>
            <img
              src={new_cv}
              alt="new cv"
              className="w-[3.01rem] aspect-square cursor-pointer "
            />
          </li>
          <li>
            <img
              src={template}
              alt="template"
              className="w-[3.01rem] aspect-square cursor-pointer"
            />
          </li>
          <li>
            <img
              src={saved_cv}
              alt="saved cv"
              className="w-[3.01rem] aspect-square cursor-pointer"
            />
          </li>
          <li>
            <img
              src={notification}
              alt="notification"
              className="w-[3.01rem] aspect-square cursor-pointer"
            />
          </li>
          <li>
            <img
              src={syntax_logo2}
              alt="syntax logo"
              className="w-[3.01rem] aspect-square cursor-pointer"
            />
          </li>
        </ul>
      </div>

      <div className="flex gap-6 mt-8 font-semibold text-[0.93rem] leading-[1.73rem] flex-wrap">
        <div className="flex gap-4 rounded-[4px] bg-black text-white py-[0.313rem] px-[0.63rem] cursor-pointer w-[8rem] items-center min-w-fit">
          <p>Download</p>
          <img src={download_icon} alt="download icon" />
        </div>
        <button className="text-[0.93rem] leading-[1.73rem] font-semibold border-2 border-black px-[0.625rem] py-[0.313rem] rounded-[4px] flex justify-between items-center gap-2">
          Credit Management
          <img src={plus_icon} alt="add icon" />
        </button>
        <button className="text-[0.93rem] leading-[1.73rem] font-semibold border-2 border-black px-[0.625rem] py-[0.313rem] rounded-[4px] flex justify-between items-center gap-2">
          Promo Management
          <img src={plus_icon} alt="add icon" />
        </button>
        <button className="text-[0.93rem] leading-[1.73rem] font-semibold border-2 border-black px-[0.625rem] py-[0.313rem] rounded-[4px] flex justify-between items-center gap-2">
          Pricing Management
          <img src={plus_icon} alt="add icon" />
        </button>
      </div>
    </div>
  );
};

export default DashboardAdminTop;
