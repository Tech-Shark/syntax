import Carousel from "../homepageCarousel";
import { NextButton } from "../welcomeNavButtons";
const HomepageCarousel: React.FC = () => {

  return (
    <section className="homepage-carousel">
       <div className="bg-white h-auto flex flex-col pl-6 lg:pl-[5rem gap-10">
        <div>
          <h1 className="text-4xl font-bold leading-normal">How it works</h1>
          <p className="font-medium text-[1.1rem]">The 3-Step magic trick.</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10">
          <Carousel />
          <NextButton to="/welcome" text="Build CV" />
        </div>
      </div>
    </section>
  );
};
export default HomepageCarousel