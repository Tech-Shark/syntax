import Sidebar from '../Sidebar';

import syntax_logo2 from '@/assets/images/syntax_logo2.svg';
import new_cv from '@/assets/images/new_cv.svg';
import template from '@/assets/images/template.svg';
import saved_cv from '@/assets/images/saved_cv.svg';
import notification from '@/assets/images/notification.svg';
import download_icon from '@/assets/images/download_icon.svg'
import arrow_up from '@/assets/images/arrow_up.svg'
import my_template from '@/assets/images/my_template.svg'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";




const Dashboard: React.FC = () => {
 
  return (
    <section className='flex font-outfit'>
        <Sidebar />
        <div className='px-4 md:px-6 py-8 w-full h-screen overflow-x-auto'>

          <div className='flex justify-between w-full '>
            <h5 className='font-bold  sm:text-3xl  lg:text-[3rem]  md:leading-[4rem]'>Welcome Seyi</h5>
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

          <Collapsible>
            <CollapsibleTrigger className='flex items-center gap-2 mt-12 font-semibold text-[1.34rem] leading-[1.68rem]'>My Templates
            <img src={my_template} alt="" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              Yes. Free to use for personal and commercial projects. No attribution
              required.
            </CollapsibleContent>
          </Collapsible>



   
        </div>
    </section>
  )
}

export default Dashboard