import { Link } from 'react-router-dom';
import Sidebar from "../../Sidebar";
import purple_arrow_2 from '@/assets/images/purple_arrow_2.svg';
import { FaPlus } from 'react-icons/fa6';
import TopIcons from "../../UserDashboard/topIcons";


const CreatePromotion: React.FC = () => {


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
              <Link to="/promo-management" className="flex gap-[0.4rem] justify-center items-center h-[2.1rem] bg-white text-black rounded-[0.25rem] border-2 border-black px-[0.63rem] py-[0.31rem]"> Promo Management</Link>
            </div>

            <TopIcons />        
          </div>

          <div className="flex justify-between items-center mt-[3.13rem]">
            <h5 className="text-[2.5rem] font-bold leading-normal">Create and Manage <br /> Promotions</h5>
            <p className="text-center font-normal text-lg leading-normal">Design and launch special offers to boost engagement or attract new <br /> users. Track active promotions and their performance.</p>
            <div className='flex gap-[0.81rem]'>
              <button className="flex items-center justify-center px-[1.56rem] py-[0.31rem] bg-white border-2 border-black rounded-[0.25rem] text-[0.98rem] leading-[1.7rem] font-semibold">Preview Promo</button>
            <button className="flex items-center justify-center px-[1.56rem] py-[0.31rem] bg-white border-2 border-black rounded-[0.25rem] text-[0.98rem] leading-[1.7rem] font-semibold">End Existing Promo</button>
            </div>
          </div>

          <div className='flex justify-center'>
            <form>
              <div className='flex flex-col'>
                <label htmlFor="promoName">
                  Promo Name
                </label>
                <input type="text" id="promoName" placeholder='Black Friday Deal, New Year Offer'/>
              </div>
              <div className='flex flex-col'>
                <label htmlFor="promoName">
                  Promo Type
                </label>
                <input type="text" id="promoName" placeholder='Credit Bonus'/>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  )
};
export default CreatePromotion;