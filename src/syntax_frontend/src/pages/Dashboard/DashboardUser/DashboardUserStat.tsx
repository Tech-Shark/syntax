import { Link } from "react-router-dom";
import arrow_up from "../../../assets/images/arrow_up.svg";

const DashboardUserStat = () => {
  return (
    <div className="mt-12 flex flex-wrap gap-6">
      {Stats.map((stat) => (
        <div
          className={`flex flex-col rounded-[8.02px] items-center justify-center h-[9.94rem]
            ${
              stat.blackBg ? "bg-[#1C1D24] text-white" : "bg-[#E1E0F3]"
            } w-full max-w-[220px]`}
        >
          <div className="flex items-center gap-4 mb-2">
            <p className="font-bold text-[2.89rem] leading-[3.64rem]">
              {stat.figure}
            </p>

            {typeof stat.link == "string" && (
              <Link to={stat.link} className="rounded-full">
                <img src={arrow_up} alt="arrow up" />
              </Link>
            )}
          </div>

          <p className="text-[1.34rem]  leading-[1.68rem] text-center ">
            {stat.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default DashboardUserStat;

const Stats = [
  {
    figure: "05",
    title: "Total CVs Created",
    link: "",
    blackBg: false,
  },
  {
    figure: "05",
    title: "CVs Shared",
    blackBg: true,
  },
  {
    figure: "97%",
    title: "Current ATS Score (Average)",
    blackBg: true,
  },
  {
    figure: "05",
    title: "Tokens Available",
    blackBg: true,
  },
  {
    figure: "",
    title: "Last Updated CV",
    link: "",
    blackBg: true,
  },
];
