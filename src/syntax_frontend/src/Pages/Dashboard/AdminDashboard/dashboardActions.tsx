import { useNavigate } from "react-router-dom";

const DashBoardAction: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='flex gap-6 mt-8 font-semibold text-[0.93rem] leading-[1.73rem] flex-wrap'>
            <button className='text-[0.93rem] leading-[1.73rem] font-semibold border-2 border-black px-[0.625rem] py-[0.313rem] rounded-[4px] flex justify-between items-center gap-2' >Credit Management
            </button>
            <button className='text-[0.93rem] leading-[1.73rem] font-semibold border-2 border-black px-[0.625rem] py-[0.313rem] rounded-[4px] flex justify-between items-center gap-2' onClick={()=>{navigate("/create-promotion")}}>Promo Management
            </button>
        <button className='text-[0.93rem] leading-[1.73rem] font-semibold border-2 border-black px-[0.625rem] py-[0.313rem] rounded-[4px] flex justify-between items-center gap-2' onClick={()=>{navigate("/pricing-management")}}>Pricing Management
        </button>
      </div>

      <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-[#E1E0F3] h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.5rem] leading-[3rem]'>10,542</p>

                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Total Users</p>
            </div>

            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.5rem] leading-[3rem]'>7,654</p>
                
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Active Users</p>
            </div>
            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.5rem] leading-[3rem]'>2,888</p>
                
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Inactive Users</p>
                
            </div>
            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.5rem] leading-[3rem]'>25,642</p>
                
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Templates Created</p>
            </div>
            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                <p className='font-bold text-[2.5rem] leading-[3rem]'>4,320,000</p>
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Last Updated CV</p>
            </div>

          </div>
    </>
  );
};
export default DashBoardAction;