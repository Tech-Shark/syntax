import syntax_logo2 from "../../../assets/images/syntax_logo2.svg";
import new_cv from "../../../assets/images/new_cv.svg";
import template from "../../../assets/images/template.svg";
import saved_cv from "../../../assets/images/saved_cv.svg";
import notification from "../../../assets/images/notification.svg";
import download_icon from "../../../assets/images/download_icon.svg";
import { Link } from "react-router-dom";

function DashboardUserTop() {
  return (
    <div>
      <div className="flex justify-between w-full ">
        <h5 className="font-bold sm:text-3xl lg:text-[3rem] md:leading-[4rem] text-[#1C1D24]">
          Welcome Seyi
        </h5>
        <div className="hidden md:flex gap-4 items-center ">
          {Actions.map((action, index) =>
            action.link ? (
              <Link to={action.link} key={action.title + index}>
                <img
                  src={action.icon}
                  alt={action.title}
                  className="w-[3.01rem] aspect-square "
                />
              </Link>
            ) : (
              <button
                key={action.title + index}
                className={`centerUtil h-fit ${
                  action.square ? "" : "rounded-full"
                }`}
                title={action.title}
              >
                <img
                  src={action.icon}
                  alt={action.title}
                  className="w-[3.01rem] aspect-square "
                />
              </button>
            )
          )}
        </div>
      </div>

      <div className="flex gap-4 mt-8 font-semibold text-[0.93rem] leading-[1.73rem] flex-wrap">
        <button className="flex gap-4 rounded-[4px] bg-black text-white py-[0.313rem] px-[0.63rem] w-[8rem] items-center min-w-fit">
          <p>Download</p>
          <img src={download_icon} alt="download icon" />
        </button>
        <button className="flex gap-4 rounded-[4px] border border-black text-black py-[0.313rem] px-[0.63rem] w-[8rem] items-center justify-center ">
          <p>Upload</p>
        </button>
      </div>
    </div>
  );
}

export default DashboardUserTop;

const Actions = [
  {
    title: "New CV",
    icon: new_cv,
  },
  {
    title: "Template",
    icon: template,
  },
  {
    title: "Saved CV",
    icon: saved_cv,
  },
  {
    title: "Notification",
    icon: notification,
  },
  {
    title: "Exit",
    icon: syntax_logo2,
    square: true,
    link: "/",
  },
];
