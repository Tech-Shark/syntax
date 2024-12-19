import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import Slider, { Settings } from "react-slick";
import Sidebar from "../Sidebar";
import DashboardUserStat from "./DashboardUserStat";
import DashboardUserTop from "./DashboardUserTop";
import TemplateCard from "./TemplateCard";

import arrow_up from "../../../assets/images/arrow_up.svg";
import my_template from "../../../assets/images/my_template.svg";
import add from "../../../assets/images/upload_cv_icon.svg";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

function DashboardUser() {
  const settings: Settings = {
    // dots: true,
    infinite: true,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 0,
    cssEase: "linear",
    slidesToShow: 4,
    pauseOnFocus: false,
    pauseOnHover: false,
    pauseOnDotsHover: false,
    responsive: [
      {
        breakpoint: 1650,
        settings: {
          slidesToShow: 3,
          // slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          // slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 930,
        settings: {
          slidesToShow: 1,
          // slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="flex font-outfit">
      <Sidebar />

      <div className="px-4 md:px-6 py-8 w-full h-screen overflow-y-auto">
        <div className="max-w-[1800px]">
          <DashboardUserTop />
          <DashboardUserStat />

          <Collapsible defaultOpen>
            <CollapsibleTrigger className="flex items-center gap-2 mt-12 font-semibold text-[1.34rem] leading-[1.68rem]">
              <p>My Templates</p>
              <img src={my_template} alt="" />
            </CollapsibleTrigger>

            <CollapsibleContent>
              <div className="flex gap-2 flex-wrap my-2">
                {Templates.map((template) => (
                  <TemplateCard key={template.id} Data={template} />
                ))}

                <div
                  className={`centerUtil flex-col flex-1 w-full min-w-[100px]
              ${
                Templates.length ? "max-w-[300px]" : ""
              } max-[900px]:max-w-none`}
                >
                  <button className="rounded-full">
                    <img
                      src={add}
                      alt=""
                      width={200}
                      height={200}
                      className="p-4"
                    />
                  </button>

                  <p
                    className="text-center"
                    style={{ display: Templates.length ? "none" : "" }}
                  >
                    Your CVs will appear here once you create them. <br />
                    Get started and build a CV that stands out.
                  </p>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          <div
            className="flex items-center gap-2 mt-12 font-semibold text-[1.34rem] leading-[1.68rem]
          w-full mb-5"
          >
            <p>Recommended Templates</p>

            <button
              className="centerUtil bg-black text-white gap-5 rounded-3xl 
            py-2 px-4 ml-auto text-sm"
            >
              <p>Visit Templates</p>
              <img
                src={arrow_up}
                alt=""
                height={30}
                width={30}
                style={{ fill: "black" }}
              />
            </button>
          </div>

          <div className="slider-container -ml-6">
            <Slider {...settings} centerMode>
              {Recommended.map((template) => (
                <TemplateCard key={template.id} Data={template} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DashboardUser;
const Templates = [
  {
    image: "",
    id: "first",
    tags: ["hi", "test", "hello"],
    title: "Creative Resume",
    body: "Showcase your creativity with a bold yet \
    structured design. Perfect for creative professionals, \
    it highlights key accomplishments, skills, and portfolio \
    work in a way that stands out.",
  },
];

const Recommended = [
  {
    image: "",
    id: "first",
    tags: ["Minimal", "Professional"],
    title: "Sleek Minimalist Resume",
    body: "Focus on simplicity and elegance. Ideal for professionals \
    in corporate settings, this design emphasizes readability and key \
    details without distractions.",
  },
  {
    image: "",
    id: "second",
    tags: ["Bold"],
    title: "Creative Resume and Most Deserving",
    body: "Showcase your creativity with a bold yet \
    structured design. Perfect for creative professionals, \
    it highlights key accomplishments, skills, and portfolio \
    work in a way that stands out.",
  },
  {
    image: "",
    id: "third",
    tags: ["Modern", "Dynamic"],
    title: "Modern Resume for Innovators",
    body: "A dynamic and forward-thinking layout tailored for \
    tech-savvy individuals and innovators. Highlight your projects, \
    achievements, and expertise with a modern touch.",
  },
  {
    image: "",
    id: "fourth",
    tags: ["Elegant", "Sophisticated"],
    title: "Sophisticated Resume for Executives",
    body: "Designed for executives and senior professionals, this layout \
    conveys authority and sophistication. It emphasizes leadership, \
    achievements, and strategic thinking.",
  },
  {
    image: "",
    id: "fifth",
    tags: ["Creative", "Colorful"],
    title: "Vibrant Resume for Designers",
    body: "Perfect for designers and artists, this colorful and eye-catching \
    design brings your creative flair to life while showcasing your work in a \
    structured format.",
  },
  {
    image: "",
    id: "sixth",
    tags: ["Clean", "Corporate"],
    title: "Corporate Resume for Business Professionals",
    body: "Tailored for corporate professionals, this design combines \
    clarity and structure to highlight your experience and skills in a \
    professional manner.",
  },
  {
    image: "",
    id: "seventh",
    tags: ["Artistic", "Innovative"],
    title: "Artistic Resume for Creatives",
    body: "Let your artistic side shine with a unique, visually appealing \
    design. Great for artists, photographers, and creatives to showcase \
    their portfolio and achievements.",
  },
  {
    image: "",
    id: "eighth",
    tags: ["Timeless", "Classic"],
    title: "Classic Resume for All Industries",
    body: "A timeless design that works for any profession, focusing on \
    a balanced layout to showcase your experience and skills effectively.",
  },
  {
    image: "",
    id: "ninth",
    tags: ["Innovative", "Startup"],
    title: "Dynamic Resume for Startup Enthusiasts",
    body: "Perfect for startup professionals, this design highlights \
    adaptability, creativity, and results-driven achievements in a bold \
    format.",
  },
  {
    image: "",
    id: "tenth",
    tags: ["Functional", "Organized"],
    title: "Functional Resume for Specialists",
    body: "A structured design for specialists, emphasizing skills and \
    accomplishments. Ideal for professionals looking to make a focused \
    impression.",
  },
];
