import { Link } from "react-router-dom";
import defaultImage from "../../../assets/images/template-default-bg.svg";
import templateStar from "../../../assets/images/template-star.svg";
import arrow45 from "../../../assets/images/white-arrow-45.svg";
import { HTMLAttributes } from "react";

interface ITemplateCard {
  Data: { image?: string; tags: string[]; title: string; body: string };
  className?: HTMLAttributes<HTMLDivElement>["className"];
}

const TemplateCard = ({ Data, className }: ITemplateCard) => {
  return (
    <div
      className={
        "bg-[#000006] w-full max-w-[313px] py-4 px-3 rounded-md text-white " +
        className
      }
    >
      <img
        src={Data.image || defaultImage}
        alt=""
        width={287}
        height={241}
        className="rounded"
      />

      <div className="w-full h-fit my-2 flex justify-between">
        <Link to={""} className="">
          <img
            src={arrow45}
            alt=""
            width={30}
            height={25}
            className="p-2 bg-[#B3B2FB] rounded"
          />
        </Link>

        <div className="flex gap-2 text-black">
          {Data.tags.map((tag) => (
            <div key={tag} className="bg-white py-1 px-2 rounded">
              <p className="">{tag}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between my-5">
        <p className="font-semibold text-2xl">{Data.title}</p>

        <img src={templateStar} alt="" width={30} height={30} className="" />
      </div>

      <p className="text-lg">{Data.body}</p>
    </div>
  );
};

export default TemplateCard;
