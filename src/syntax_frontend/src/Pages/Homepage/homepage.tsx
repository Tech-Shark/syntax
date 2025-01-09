import HomepageCarousel from "@/components/Homepage/howItWorks";
import hero_bg from '../../assets/images/hero_bg.svg'
import Header from "@/components/Homepage/Header";
import Hero from "@/components/Homepage/heroSection";
import KeyFeatures from "@/components/Homepage/keyFeatures";
import Pricing from "@/components/Homepage/pricing";
import Faq from "@/components/Homepage/Faqs";
import Testimonials from "@/components/Homepage/testimonials";
import SubFooter from "@/components/Homepage/SubFooter";
import Footer from "@/components/Homepage/footer";


const Homepage: React.FC = () => {

  return (
    <section className="relative">
      <div className='min-h-[53.5rem]  sm:min-h-[46.3rem] md:min-h-[58rem] lg:min-h-[68rem] bg-[#E1E0F3]' >
        <img src={hero_bg} alt="hero background" className='w-[12.2rem] lg:w-3/5 lg:h-[28.31rem] h-[11.6rem] absolute top-[15rem] lg:top-0 left-[-2rem] lg:left-[-14rem] z-0' />
        <div className='absolute inset-x-0 '>
          <Header />
          <Hero />
        </div>
      </div>
      <HomepageCarousel />
      <div className="px-8 lg:px-12">
        <KeyFeatures />
        <Pricing />
         <Faq />
        <Testimonials /> 
        <SubFooter />
      </div>
      <Footer />
    </section>
  );
};
export default Homepage;