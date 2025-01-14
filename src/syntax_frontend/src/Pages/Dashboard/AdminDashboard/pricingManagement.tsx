import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";
import { FaPlus } from "react-icons/fa6";
import TopIcons from "./topIcons";
import purple_arrow_2 from '@/assets/images/purple_arrow_2.svg';
import PricingComponent from "../pricingComponent";
import arrow1 from "@/assets/images/arrow1.svg";
import arrow2 from "@/assets/images/arrow2.svg";


const PricingManagement = () => {

  return (
    <>
    <section className='flex font-outfit'>
        <Sidebar />
        <div className='px-4 md:px-6 pt-8 w-full h-screen overflow-x-auto'>

          <div className='flex justify-between w-full '>
            <div className="flex items-center gap-36">
              <div className="flex items-center gap-5">
                <img src={purple_arrow_2} alt="back" />
                <p className="text-base text-[#3D3F4E] font-semibold leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer">Back</p>
              </div>
              <Link to="/promo-management" className="flex gap-[0.4rem] justify-center items-center h-[2.1rem] bg-white text-black rounded-[0.25rem] border-2 border-black px-[0.63rem] py-[0.31rem]"> Promo Management <FaPlus /></Link>
            </div>

            <TopIcons />        
          </div>
          <div className="flex justify-between items-center mt-[3.13rem] mr-24">
            <h5 className="text-[2.5rem] font-bold leading-normal">Manage Pricing Plans</h5>
            <p className="text-center font-normal text-lg leading-normal">Track, edit, and analyze active and past coupons. Stay in <br /> control of user engagement and promo effectiveness.</p>
            <button className="flex items-center justify-center px-[1.56rem] py-[0.31rem] bg-white border-2 border-black rounded-[0.25rem] text-[0.98rem] leading-[1.7rem] font-semibold">Preview Pricing</button>
          </div>

          <div>
            <PricingComponent />
          </div>

          <div className="flex flex-col gap-5 items-center justify-center mt-[5.12rem] mb-10">
            <Link to="/upload-cv" className="flex items-center justify-center gap-2 py-[0.41rem] px-[1.03rem] bg-[#000006] rounded-3xl">
              <p className="text-white text-center font-semibold leading-7 text-[0.928rem] lg:text-[1.2rem]">Save Changes</p>
                <img src={arrow1} alt="Upload CV" className="w-[1.92rem] h-[1.92rem]"/>
            </Link>
            <Link to="/personal-information" className="flex items-center justify-center gap-2 rounded-[1.8rem] py-[0.65rem] px-5 bg-white [box-shadow:-2px_-4px_25.7px_0_rgba(0,0,0,0.1),_2px_4px_28.7px_0_rgba(0,0,0,0.1)] hover:gap-8 transition-all duration-300">
              <p className="text-[#3D3F4E] text-center text-lg font-semibold leading-8">Revert back to default</p>
              <div className="flex items-center justify-center bg-[#3D3F4E] w-[2.33rem] h-[2.33rem] rounded-full"><img src={arrow2} alt="Build new cv" /></div>
            </Link>
          </div>
      </div>
    </section>
    </>
  );
};
export default PricingManagement;