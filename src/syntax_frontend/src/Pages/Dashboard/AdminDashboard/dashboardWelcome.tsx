import template from '@/assets/images/template.svg';
import saved_cv from '@/assets/images/saved_cv.svg';
import notification from '@/assets/images/notification.svg';
import syntax_logo2 from '@/assets/images/syntax_logo2.svg';
import new_cv from '@/assets/images/new_cv.svg';

const DashboardWelcome: React.FC = () => {

  return (
    <>
      <div className='flex justify-between w-full '>
            <h5 className='font-bold  sm:text-3xl  lg:text-[3rem]  md:leading-[4rem]'>Welcome Admin</h5>
            <ul className="hidden md:flex gap-4 items-center ">
              <li>
                <img src={new_cv} alt="new cv" className='w-[3.01rem] aspect-square cursor-pointer ' />
              </li>
              <li>
                <img src={template} alt="template" className='w-[3.01rem] aspect-square cursor-pointer' />
              </li>
              <li>
                <img src={saved_cv} alt="saved cv" className='w-[3.01rem] aspect-square cursor-pointer' />
              </li>
              <li>
                <img src={notification} alt="notification" className='w-[3.01rem] aspect-square cursor-pointer' />
              </li>
              <li>
                <img src={syntax_logo2} alt="syntax logo" className='w-[3.01rem] aspect-square cursor-pointer' />
              </li>
            </ul>
            
          </div>
    </>
  );
};
export default DashboardWelcome;