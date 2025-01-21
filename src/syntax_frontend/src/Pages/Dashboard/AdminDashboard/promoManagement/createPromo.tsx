import { Link, useNavigate } from 'react-router-dom';
import Sidebar from "../../Sidebar";
import purple_arrow_2 from '@/assets/images/purple_arrow_2.svg';
import arrow from "@/assets/images/arrow1.svg"
import TopIcons from "../../UserDashboard/topIcons";
import dropdown_arrow from "@/assets/images/drop_down_arrow.svg";


const CreatePromotion: React.FC = () => {
  const navigate = useNavigate();


  return (
    <>
      <section className='flex font-outfit'>
        <Sidebar />
        <div className='px-4 md:px-6 pt-8 w-full h-screen overflow-x-auto flex-1'>
          <div className='flex justify-between w-full '>
            <div className="flex items-center gap-36">
              <div className="flex items-center gap-5">
                <img src={purple_arrow_2} alt="back" />
                <p className="text-base text-[#3D3F4E] font-semibold leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer">Back</p>
              </div>
              <Link to="/pricing-management" className="flex gap-[0.4rem] justify-center items-center h-[2.1rem] bg-white text-black rounded-[0.25rem] border-2 border-black px-[0.63rem] py-[0.31rem]"> Pricing Management</Link>
            </div>

            <TopIcons />        
          </div>

          <div className="flex justify-between items-baseline mt-[3.13rem]">
            <h5 className="text-[2.5rem] font-bold leading-normal">Create and Manage <br /> Promotions</h5>
            <p className="text-center font-normal text-lg leading-normal">Design and launch special offers to boost engagement or attract new <br /> users. Track active promotions and their performance.</p>
            <div className='flex gap-[0.81rem]'>
              <button className="flex items-center justify-center px-[1.56rem] py-[0.31rem] bg-white border-2 border-black rounded-[0.25rem] text-[0.98rem] leading-[1.7rem] font-semibold">Preview Promo</button>
            <button className="flex items-center justify-center px-[1.56rem] py-[0.31rem] bg-white border-2 border-black rounded-[0.25rem] text-[0.98rem] leading-[1.7rem] font-semibold">End Existing Promo</button>
            </div>
          </div>

          <div className='flex justify-center mt-[3.13rem] pb-12'>
            <form className='flex flex-col gap-10'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="promoName" className="font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]">
                  Promo Name
                </label>
                <input type="text" id="promoName" placeholder='Black Friday Deal, New Year Offer' className='w-[19.4rem] bg-[#E8E8E8] px-[0.98rem] py-[0.73rem] rounded-[0.5rem] text-base leading-[1.2rem] placeholder-shown:text-[#8C8CA1] text-[#000006]'/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="promoType" className="font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]">
                  Promo Type
                </label>
                <select id="promoType" className='bg-[#E1E0F3] h-[2.9rem] w-44 text-[1.1rem] text-[#1C1D24] font-semibold leading-normal px-3'  style={{backgroundImage: `url(${dropdown_arrow})`,backgroundRepeat: "no-repeat", backgroundPosition: "calc(100% - 10px) center"}}>
                  <option value="percentage" >Credit Bonus</option>
                  <option value="fixed">Ats Increase</option>
                </select>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="audience" className="font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]">
                  Target Audience
                </label>
                <select id="promoType" className='bg-[#E1E0F3] h-[2.9rem] w-44 text-[1.1rem] text-[#1C1D24] font-semibold leading-normal px-3'  style={{backgroundImage: `url(${dropdown_arrow})`,backgroundRepeat: "no-repeat", backgroundPosition: "calc(100% - 10px) center"}}>
                  <option value="percentage" >All Users</option>
                  <option value="fixed">Premium Users</option>
                  <option value="fixed">Standard Users</option>
                  <option value="fixed">Basic Users</option>
                </select>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="date" className="font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]">
                  Duration (Start/End Dates)
                </label>
                <input type="text" id="promoName" placeholder='4th, Aug 2025 - Present' className='w-[19.4rem] bg-[#E8E8E8] px-[0.98rem] py-[0.73rem] rounded-[0.5rem] text-base leading-[1.2rem] placeholder-shown:text-[#8C8CA1] text-[#000006]'/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="date" className="font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]">
                 Limit
                </label>
                <div className='flex items-center gap-2 w-[19.4rem] bg-[#E8E8E8] px-[0.98rem] py-[0.73rem] rounded-[0.5rem] text-base leading-[1.2rem] text-[#000006]'>
                  <input type="number" id="promoName" placeholder='75' className='bg-[#E8E8E8] w-10 flex items-center justify-center focus:outline-none placeholder-shown:text-[##8C8CA1]' />
                  <span className='text-[#000006] font-normal leading-[1.2rem] text-base'>Users</span>
                </div>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="promo code" className="font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]">
                  Promo Code (Optional)
                </label>
                <input type="text" id="promoName" placeholder='PROMOSYNTAX1' className='w-[19.4rem] bg-[#E8E8E8] px-[0.98rem] py-[0.73rem] rounded-[0.5rem] text-base leading-[1.2rem] placeholder-shown:text-[#8C8CA1] text-[#000006]'/>
              </div>
              
              <div className='flex flex-col gap-2'>
                <label htmlFor="promo code" className="font-bold text-[1.1rem] leading-[1.3rem] text-[#030A00]">
                  Promo Code (Optional)
                </label>
                <textarea placeholder="Enjoy 20% off all Premium plans this weekend!" className='w-[19.4rem] h-[5.2rem] bg-[#E8E8E8] px-[0.98rem] py-[0.73rem] rounded-[0.5rem] text-base leading-[1.2rem] placeholder-shown:text-[#8C8CA1] text-[#000006] '></textarea>
              </div>

              <button onClick={() => navigate("/manage-promotion")}type="submit" className='flex self-center items-center justify-center px-4 py-[0.4rem] bg-black text-white rounded-3xl w-[75%] text-base font-semibold leading-[1.7rem] text-center gap-[1.3rem]'>
                Save and Continue
                <img src={arrow} alt="save and continue" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
};
export default CreatePromotion;