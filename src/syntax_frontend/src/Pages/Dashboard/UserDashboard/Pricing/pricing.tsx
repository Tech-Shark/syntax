import Sidebar from "../../Sidebar";
import TopIcons from "../topIcons";
import purple_arrow_2 from '@/assets/images/purple_arrow_2.svg';
import PricingComponent from "../../pricingComponent";
import hamburger_menu from "@/assets/images/hamburger_menu.svg";

const Pricing: React.FC = () => {
  return (
    <>
      <section className='flex font-outfit'>
        <Sidebar/>
        <div className='px-4 md:px-6 pt-8 w-full h-screen overflow-x-auto'>
          <div className='flex justify-between '>
            <div className="flex items-center gap-36">
              <div className="flex items-center gap-5">
                <img src={purple_arrow_2} alt="back" />
                <p className="text-base text-[#3D3F4E] font-semibold leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer">Back</p>
              </div>
            </div>
            <TopIcons />
            <div className="flex items-center md:hidden">
              <img src={hamburger_menu} alt="menu" />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center lg:gap-[15rem] mt-[3.13rem]">
             <h5 className="text-[2.8rem] md:text-[2.5rem] font-bold leading-normal">Pricing Plans</h5>
            <p className="text-center font-normal text-lg leading-normal">
              Flexible plans to match your needs. Unlock premium <br className="hidden md:block"/> features and elevate your experience.
            </p>
          </div>
          <div>
            <PricingComponent />
          </div>
      </div>
    </section>
    </>
  );
};
export default Pricing;