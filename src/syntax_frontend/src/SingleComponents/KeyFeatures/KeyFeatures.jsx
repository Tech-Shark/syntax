import React from 'react'
import hero_banner_1 from '../../assets/images/hero_banner_1.svg'
import hero_banner_2 from '../../assets/images/hero_banner_2.svg'
import hero_banner from '../../assets/images/hero_banner.svg'
import star_icon from '../../assets/images/star_icon.svg';
import rhombus_icon from '../../assets/images/rhombus_icon.svg';
import indicator_icon from '../../assets/images/indicator_icon.svg';
import pentagon_icon from '../../assets/images/pentagon_icon.svg';
import hexagon_icon from '../../assets/images/hexagon_icon.svg';
import BuildButton from '../BuildButton/BuildButton';

function KeyFeatures() {
  return (
    <section>
        <h5 className='font-bold text-4xl md:text-[3.1rem] leading-[4.42rem]'>Key Features</h5>
        <p className='font-medium text-xl md:text-[1.5rem] mb-8'>Why Choose Our AI Resume Builder?</p>
    <div className=' h-[32.73rem]  flex items-end justify-center  relative'>
    <div className='group relative h-full  group-hover:h-auto group-hover:w-auto w-4/5 mt-8 overflow-y-hidden  cursor-pointer  '>
          <img src={hero_banner_1} alt="hero banner" className='h-full w-full absolute group-hover:-translate-y-4 transition-all duration-300 ease-in-out  ' />
          <img src={hero_banner_2} alt="hero banner" className='h-full w-full absolute  translate-x-[-8rem] -translate-y-5 group-hover:-translate-y-5 group-hover:-rotate-12 transition-all duration-300 ease-in-out ' />
          <img src={hero_banner} alt="hero banner" className='h-full w-full absolute translate-x-[8rem] group-hover:rotate-12 transition-all duration-300 ease-in-out' />
      </div>
      <div className='absolute inset-0 bg-[#EEEEFF]/70 pointer-events-none rounded-xl ' >
        <div className='h-full flex flex-col items-right justify-center gap-6 pl-12 md:w-2/3 pr-8  '>
            <img src={star_icon} alt="star icon" className='w-[3.42rem] h-[3.42rem]' />
            <h5 className='font-bold text-[2.05rem] h-[3.16rem] text-[#000006]'>AI-Powered CV Generation</h5>
            <p className='font-normal text-[1.5rem] leading-[1.89rem] h-[7.5rem]'>Syntax’s AI evaluates and scores your CV for ATS compatibility, suggesting improvements that help you get through automated filters. Tailored to your industry, Syntax’s AI highlights essential keywords and formatting tips to make your CV more competitive.</p>
        </div>
        
      </div>
      

    </div>
    <div className="flex items-center justify-between mt-8 flex-col lg:flex-row ">
    <div className=" flex gap-4">
           <img src={rhombus_icon} alt="rhombus icon" className='w-[3.34rem] h-[3.34rem] cursor-pointer' /> 
           <img src={indicator_icon} alt="indicator icon" />
           <img src={pentagon_icon} alt="rhombus icon" className='w-[3.34rem] h-[3.34rem] cursor-pointer' /> 
           <img src={hexagon_icon} alt="rhombus icon" className='w-[3.34rem] h-[3.34rem] cursor-pointer' /> 
    </div>
    <div className='flex items-center  justify-center px-16'>
       <BuildButton />
    </div> 
    </div>
    </section>
  )
}

export default KeyFeatures