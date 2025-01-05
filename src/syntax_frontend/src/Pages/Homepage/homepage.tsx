import HeroSection from "@/components/Homepage/heroSection";
import HomepageCarousel from "@/components/Homepage/homeCarousel";
import KeyFeatures from "@/components/Homepage/keyFeatures";
import Pricing from "@/components/Homepage/pricing";
import Testimonials from "@/components/Homepage/testimonials";
import Footer from "@/components/Homepage/footer";
import greenDot from "../../assets/images/greenDot.svg";


const Homepage: React.FC = () => {

  return (
    <section className="flex flex-col gap-24 w-screen">
      <HeroSection />
      <HomepageCarousel />
      <KeyFeatures />
      <Pricing />

      <div className="flex items-center justify-center gap-10">
        <p>98% of users say they felt more <br className="lg:hidden"/> confident applying for jobs with <br className="lg:hidden"/>  our AI resumes.</p>
        <span>
          <img src={greenDot} alt="green dot"/>
        </span>
      </div>
      <Testimonials />

      {/* footer section */}
      <Footer />
    </section>
  );
};
export default Homepage;