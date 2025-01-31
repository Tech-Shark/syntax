import { Link, useNavigate } from "react-router-dom";
import Sidebar from "../Sidebar";
import TopIcons from "../UserDashboard/topIcons";
import purple_arrow_2 from '@/assets/images/purple_arrow_2.svg';
import AdminPricing from "./pricingManagement/adminPricing";



const PricingManagement = () => {
  const navigate = useNavigate();

  return (
    <>
    <section className='flex font-outfit'>
        <Sidebar />
        <div className='px-4 md:px-6 pt-8 w-full h-screen overflow-x-auto'>

          <div className='flex justify-between w-full '>
            <div className="flex items-center gap-36">
              <div className="flex items-center gap-5" onClick={() => navigate(-1)}>
                <img src={purple_arrow_2} alt="back" />
                <p className="text-base text-[#3D3F4E] font-semibold leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer">Back</p>
              </div>
              <Link to="/create-promotion" className="flex gap-[0.4rem] justify-center items-center h-[2.1rem] bg-white text-black rounded-[0.25rem] border-2 border-black px-[0.63rem] py-[0.31rem]"> Promo Management</Link>
            </div>

            <TopIcons />        
          </div>
          {/* <div className="flex justify-between items-center mt-[3.13rem] mr-24">
            <h5 className="text-[2.5rem] font-bold leading-normal">Manage Pricing Plans</h5>
            <p className="text-center font-normal text-lg leading-normal">Track, edit, and analyze active and past coupons. Stay in <br /> control of user engagement and promo effectiveness.</p>
            <button className="flex items-center justify-center px-[1.56rem] py-[0.31rem] bg-white border-2 border-black rounded-[0.25rem] text-[0.98rem] leading-[1.7rem] font-semibold">Preview Pricing</button>
          </div> */}

          <div>
            <AdminPricing />
          </div>
      </div>
    </section>
    </>
  );
};
export default PricingManagement;