import { Link } from 'react-router-dom';
import Sidebar from '../Sidebar';
import TopIcons from './topIcons';
import syntax_logo2 from '@/assets/images/syntax_logo2.svg';
import new_cv from '@/assets/images/new_cv.svg';
import template from '@/assets/images/template.svg';
import saved_cv from '@/assets/images/saved_cv.svg';
import notification from '@/assets/images/notification.svg';
import download_icon from '@/assets/images/download_icon.svg'
import arrow_up from '@/assets/images/arrow_up.svg'
import my_template from '@/assets/images/my_template.svg'
import { FaPlus } from "react-icons/fa6";
import CvTemplateCarousel from '@/components/Homepage/cvTemplateCarousel';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";




const Dashboard: React.FC = () => {
 
  return (
    <section className='flex font-outfit'>
        <Sidebar />
        <div className='px-4 md:px-6 pt-8 w-full h-screen overflow-x-auto'>

          <div className='flex justify-between w-full '>
            <h5 className='font-bold  sm:text-3xl  lg:text-[3rem]  md:leading-[4rem]'>Welcome Seyi</h5>
            <TopIcons />
          </div>

          <div className='flex gap-4 mt-8 font-semibold text-[0.93rem] leading-[1.73rem] flex-wrap'>
            <div className='flex gap-4 rounded-[4px] bg-black text-white py-[0.313rem] px-[0.63rem] cursor-pointer w-[8rem] items-center min-w-fit'>
              <p>Download</p>
              <img src={download_icon} alt="download icon" />
            </div>
            <div className='flex gap-4 rounded-[4px] border border-black text-black py-[0.313rem] px-[0.63rem] cursor-pointer w-[8rem] items-center justify-center '>
              <p>Upload</p>
            </div>
          </div>


          <div className="mt-12 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">

            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-[#E1E0F3] h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.89rem] leading-[3.64rem]'>05</p>
                  <img src={arrow_up} alt="arrow up" />
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Total CVs Created</p>
            </div>

            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.89rem] leading-[3.64rem]'>05</p>
                
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>CVs Shared</p>
            </div>
            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.89rem] leading-[3.64rem]'>05</p>
                
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Current ATS Score</p>
                <p className='text-[1.34rem]  leading-[1.68rem] '>(Average)</p>
            </div>
            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                  <p className='font-bold text-[2.89rem] leading-[3.64rem]'>05</p>
                
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Tokens Available</p>
            </div>
            <div className="flex flex-col rounded-[8.02px] items-center justify-center bg-black text-white h-[9.94rem]">
                <div className='flex items-center gap-4 mb-2'>
                <img src={arrow_up} alt="arrow up" /> 
                </div>
                <p className='text-[1.34rem]  leading-[1.68rem] '>Last Updated CV</p>
            </div>

          </div>

          <div className='flex justify-between items-center  mt-12 '>
            <Collapsible>
            <CollapsibleTrigger className='flex items-center gap-2  font-semibold text-[1.34rem] leading-[1.68rem]'>My Templates
            <img src={my_template} alt="" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              Yes. Free to use for personal and commercial projects. No attribution
              required.
            </CollapsibleContent>
          </Collapsible>

          {/* get started button */}
          <Link to="/welcome" className='group flex items-center font-semibold text-[1.34rem] leading-[1.68rem] bg-black text-white gap-2 rounded-3xl px-[1.03rem] py-[0.41rem] hover:gap-8 transition-all delay-300'>
            <p className='font-semibold text-[1.2rem] leading-[1.68rem] '>
               Get started
            </p>
            <img src={arrow_up} alt="arrow up" className='w-[1.9rem] group-hover:rotate-[40deg] transition-all delay-300'/>
          </Link>
          </div>  
       
        {/* upload cv part */}
        <Link to="/welcome" className='flex items-center justify-center flex-col gap-[1.35rem] mt-[3.3rem] mb-0'>
          <div className='flex items-center justify-center px-[1.69rem] py-[1.11rem] h-[12.6rem] w-[12.6rem] rounded-full border-8 border-[#5D6078] group hover:border-black'>
          <FaPlus className='w-[9.2rem] h-[9.2rem] text-[#5D6078] group-hover:text-black'/>
          </div>
          <h5 className='text-center text-lg font-normal leading-normal text-[#1C1D24]'>Your CVs will appear here once you create them. <br /> Get started and build a CV that stands out.</h5>
        </Link>

        {/* template part */}
         <div className="flex justify-between  my-8 flex-col">

          <div className='flex justify-between items-center my-[5rem] gap-20'>
            <Collapsible>
            <CollapsibleTrigger className='flex items-center gap-2  font-semibold text-[1.34rem] leading-[1.68rem]'>My Templates
            <img src={my_template} alt="filter items" />
            </CollapsibleTrigger>
          </Collapsible>


          <Link to="/cv-templates" className='group flex items-center font-semibold text-[1.34rem] leading-[1.68rem] bg-black text-white gap-2 rounded-3xl px-[1.03rem] py-[0.41rem] hover:gap-8 transition-all delay-300'>
            <p className='font-semibold text-[1.2rem] leading-[1.68rem] '>
              Visit Templates
            </p>
            <img src={arrow_up} alt="arrow up" className='w-[1.9rem] group-hover:rotate-[40deg] transition-all delay-300'/>
          </Link>
          </div>

          <CvTemplateCarousel />
        </div> 
      </div>
    </section>
  )
}

export default Dashboard