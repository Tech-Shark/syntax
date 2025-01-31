import { Link, useNavigate } from 'react-router-dom';
import Sidebar from "../../Sidebar";
import purple_arrow_2 from '@/assets/images/purple_arrow_2.svg';
import TopIcons from "../../UserDashboard/topIcons";
import pentagon_icon from "@/assets/images/pentagon_icon.svg";
import green_dot from "@/assets/images/greenDot.svg";
import plus_icon from "@/assets/images/white_add_icon.svg";
import profile_icon from "@/assets/images/admin_view_icon.svg";
import disable_icon from "@/assets/images/admin_disable_icon.svg";



const ManagePromotion: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <section className='flex font-outfit'>
        <Sidebar />
        <div className='px-4 md:px-6 pt-8 w-full h-screen overflow-x-auto flex-1'>
          <div className='flex justify-between w-full '>
            <div className="flex items-center gap-36">
              <div className="flex items-center gap-5" onClick={() => navigate(-1)}>
                <img src={purple_arrow_2} alt="back" />
                <p className="text-base text-[#3D3F4E] font-semibold leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer">Back</p>
              </div>
              <Link to="/pricing-management" className="flex gap-[0.4rem] justify-center items-center h-[2.1rem] bg-white text-black rounded-[0.25rem] border-2 border-black px-[0.63rem] py-[0.31rem]"> Pricing Management</Link>
            </div>

            <TopIcons />        
          </div>

          <div className="flex justify-between items-baseline mt-[3.13rem]">
            <h5 className="text-[2.5rem] font-bold leading-normal">Manage <br /> Promotions</h5>
            <p className="text-center font-normal text-lg leading-normal">Design and launch special offers to boost engagement or attract new <br /> users. Track active promotions and their performance.</p>
            <Link to="/create-promotion" className="flex items-center justify-center px-[1.56rem] py-[0.31rem] bg-white border-2 border-black rounded-[0.25rem] text-[0.98rem] leading-[1.7rem] font-semibold cursor-pointer">Create New</Link>
          </div>

        
          <div className='flex mt-[3.13rem] pb-12 gap-[2.5rem]'>
            <div className='flex justify-between items-center pl-[1.4rem] pr-[0.5rem] pt-[0.63rem] pb-[1.13rem] gap-[3.8rem] bg-[#E1E0F3] rounded-[0.31rem]'>
              <span className='flex flex-col gap-3'>
                <h5 className='font-semibold text-[1.3rem] leading-normal text-center'>Black Friday Deal</h5>
                <p className='font-semibold flex gap-1'>Type: <span className='font-normal'>Credit Bonus</span></p>
              </span>
              <img src={pentagon_icon} alt="pentagon icon" className='w-10 h-10'/>
            </div>
            <div className='flex flex-col items-center justify-center bg-[rgba(179,178,251,0.10)] px-[0.63rem] py-4' >
              <h5 className='text-black text-base font-bold leading-[1.7rem] text-center'>Promo Status</h5>
              <span className='flex gap-2 items-center'>
                <p className='text0base leading-[1.7rem] text-center '>Active</p>
                <img src={green_dot} alt="green shot" />
              </span>
            </div>
            <div className='flex items-center justify-center flex-col'>
              <h5 className='text-center font-bold text-base leading-[1.7rem]'>Start Date - End Date</h5>
              <p className='leading-[1.7rem] text-[0.9rem] text-center'>6th, Dec - 6th, Jan</p>
            </div>
            <div className='flex items-center justify-center flex-col'>
              <h5 className='text-center font-bold text-base leading-[1.7rem]'>Time Left</h5>
              <p className='leading-[1.7rem] text-[0.9rem] text-center'>29 days</p>
            </div>
            <div className='flex items-center justify-center flex-col'>
              <h5 className='text-center font-bold text-base leading-[1.7rem]'>Redemptions</h5>
              <p className='leading-[1.7rem] text-[0.9rem] text-center'>25 Users</p>
            </div>
            <div className='flex items-center justify-center flex-col'>
              <h5 className='text-center font-bold text-base leading-[1.7rem]'>Limit</h5>
              <p className='leading-[1.7rem] text-[0.9rem] text-center'>75</p>
            </div>

            <div className='flex items-center gap-[0.62rem]'>
              <button className='flex items-center gap-3 justify-center bg-black text-white py-[0.31rem] px-4 rounded-[3.13rem] text-xs leading-[1.7rem] font-semibold'>Edit
                <img src={plus_icon} alt="edit" />
              </button>
              <button className='flex items-center gap-3 justify-center bg-black text-white py-[0.31rem] px-4 rounded-[3.13rem] text-xs leading-[1.7rem] font-semibold'>
                  Share
                <img src={profile_icon} alt="share" />
              </button>
              <button className='flex items-center gap-3 justify-center bg-black text-white py-[0.31rem] px-4 rounded-[3.13rem] text-xs leading-[1.7rem] font-semibold'>
                 Disable
                <img src={disable_icon} alt="disable" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
};
export default ManagePromotion;