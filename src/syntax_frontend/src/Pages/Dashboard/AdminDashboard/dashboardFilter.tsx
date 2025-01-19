import my_template from '@/assets/images/my_template.svg'
import admin_download from '@/assets/images/admin_download.svg';

const DashboardFilter: React.FC = () => {

  return (
    <>
      <div className="flex items-center justify-between mt-12 lg:pr-12">
          <div className='flex items-center gap-2  font-semibold text-[1.34rem] leading-[1.68rem] bg-[#E1E0F3] max-w-fit py-4 px-6 '>All Users
            <img src={my_template} alt="" />
          </div> 
          <button className="flex items-center gap-4 bg-black text-white py-[0.413rem] px-[1.03rem] rounded-[24.05px]">
          Download  
          <img src={admin_download} alt="download icon" />
          </button>    
        </div>
    </>
  );

};
export default DashboardFilter;