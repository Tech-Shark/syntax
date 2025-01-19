import { Link } from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import syntax_logo2 from '@/assets/images/syntax_logo2.svg';
import new_cv from '@/assets/images/new_cv.svg';
import template from '@/assets/images/template.svg';
import saved_cv from '@/assets/images/saved_cv.svg';
import notification from '@/assets/images/notification.svg';
import { CiSearch } from "react-icons/ci";
import my_template from '@/assets/images/my_template.svg';
import arrow_up from '@/assets/images/arrow_up.svg'
import CvTemplateCarousel from '@/components/Homepage/cvTemplateCarousel';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";




const CvTemplate: React.FC = () => {
 
  return (
    <section className='flex font-outfit'>
        <Sidebar />
        <div className='px-4 md:px-6 pt-8 w-full h-screen overflow-x-auto'>

          <div className='flex justify-between w-full '>
            <h5 className='font-bold  sm:text-3xl  lg:text-[3rem]  md:leading-[4rem]'>Choose the Perfect Template</h5>
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

          <div className='flex gap-4 mt-8 font-semibold text-[0.93rem] leading-[1.73rem] flex-wrap'>
           <p className='color-black text-base font-normal leading-normal'>Pick a template that suits your style, or explore tailored recommendations <br /> based on your career goals.</p>
          </div>


        <div className="flex justify-between  my-8 flex-col">

          <div className='flex justify-between items-center my-[5rem] gap-20'>
            <Collapsible>
            <CollapsibleTrigger className='flex items-center gap-2  font-semibold text-[1.34rem] leading-[1.68rem]'>My Templates
            <img src={my_template} alt="filter items" />
            </CollapsibleTrigger>
          </Collapsible>

          <div className='flex items-center gap-2 border-black border-2 rounded-[2.25rem] px-[1.88rem] py-[0.94rem]'>
            <input type="text" className='outline-none placeholder-shown:opacity-[0.4] text-black text-[1.2rem] font-normal leading-normal' placeholder='Search Templates'/>
            <CiSearch className='w-7 h-7 text-black'/>
          </div>

          <Link to="/templates" className='group flex items-center font-semibold text-[1.34rem] leading-[1.68rem] bg-black text-white gap-2 rounded-3xl px-[1.03rem] py-[0.41rem] hover:gap-8 transition-all delay-300'>
            <p className='font-semibold text-[1.2rem] leading-[1.68rem] '>
              Visit Templates
            </p>
            <img src={arrow_up} alt="arrow up" className='w-[1.9rem] group-hover:rotate-[40deg] transition-all delay-300'/>
          </Link>
          </div>

          <CvTemplateCarousel />
        </div>  
        
        <div className='flex justify-between items-center my-[5rem] gap-20'>
            <Collapsible>
            <CollapsibleTrigger className='flex items-center gap-2  font-semibold text-[1.34rem] leading-[1.68rem]'> Popular Templates
            <img src={my_template} alt="filter items" />
            </CollapsibleTrigger>
          </Collapsible>

        

          <Link to="/templates" className='group flex items-center font-semibold text-[1.34rem] leading-[1.68rem] bg-black text-white gap-2 rounded-3xl px-[1.03rem] py-[0.41rem] hover:gap-8 transition-all delay-300'>
            <p className='font-semibold text-[1.2rem] leading-[1.68rem] '>
              Visit Templates
            </p>
            <img src={arrow_up} alt="arrow up" className='w-[1.9rem] group-hover:rotate-[40deg] transition-all delay-300'/>
          </Link>
          </div>
        </div>
    </section>
  )
}

export default CvTemplate;