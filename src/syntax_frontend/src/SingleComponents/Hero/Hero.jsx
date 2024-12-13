import React from 'react'
import hero_banner_1 from '../../assets/images/hero_banner_1.svg'
import hero_banner_2 from '../../assets/images/hero_banner_2.svg'
import hero_banner from '../../assets/images/hero_banner.svg'
import BuildButton from '../BuildButton/BuildButton'

function Hero() {
  return (
    <div className='flex items-center flex-col justify-center lg:mt-[8rem] text-[#1C1D24] text-center px-16 '>
      <h3 className=' font-bold lg:text-[4.71rem] leading-[8.35rem] '>AI-Powered Resumes, Tailored to You</h3>
      <p className='font-normal text-[2.34rem] leading-[3.51rem] mb-4'>Generate a professional, tailored resume in minutes. Just share your skills and job details, and let our AI build a standout CV designed to impress.</p>
      <BuildButton />
      <div className='group relative h-[22.35rem] lg:h-[24.2rem] group-hover:h-auto group-hover:w-auto w-4/5 mt-8 overflow-y-hidden  cursor-pointer pt-10 '>
          <img src={hero_banner_1} alt="hero banner" className='h-full w-full absolute group-hover:-translate-y-4 transition-all duration-300 ease-in-out  ' />
          <img src={hero_banner_2} alt="hero banner" className='h-full w-full absolute  translate-x-[-8rem] -translate-y-5 group-hover:-translate-y-5 group-hover:-rotate-12 transition-all duration-300 ease-in-out ' />
          <img src={hero_banner} alt="hero banner" className='h-full w-full absolute translate-x-[8rem] group-hover:rotate-12 transition-all duration-300 ease-in-out' />
      </div>
    </div>
  )
}

export default Hero