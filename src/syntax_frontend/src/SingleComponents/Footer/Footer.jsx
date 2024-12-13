import React from 'react'
import hero_banner_1 from '../../assets/images/hero_banner_1.svg'
import hero_banner_2 from '../../assets/images/hero_banner_2.svg'
import hero_banner from '../../assets/images/hero_banner.svg'
import star_icon from '../../assets/images/star_icon.svg'
import pentagon_icon from '../../assets/images/pentagon_icon.svg';
import hexagon_icon from '../../assets/images/hexagon_icon.svg';

function Footer() {
  return (
    <footer className='mt-12  bg-gradient-to-b from-slate-100 to-[#B3B2FB]/10  '>
        <div className="grid grid-cols-1 relative">
        <img src={star_icon} alt="star icon" className='absolute top-[8rem] left-12'  />
        <img src={pentagon_icon} alt="pentagon icon" className='absolute bottom-[6rem] left-16'  />
        <img src={hexagon_icon} alt="hexagon icon" className='absolute top-[24rem] right-16'  />
        <img src={hexagon_icon} alt="hexagon icon" className='absolute bottom-[6rem] right-16'  />
            <h5 className='font-bold text-[11rem] leading-[13rem] text-center -mt-10'>Your Next Job Starts with the Perfect CV</h5>
            <div className='group relative h-[28.35rem] group-hover:h-auto group-hover:w-auto w-full  overflow-y-hidden  cursor-pointer pt-10 -mt-16'>
          <img src={hero_banner_1} alt="hero banner" className='h-full w-full absolute group-hover:-translate-y-4 transition-all duration-300 ease-in-out  ' />
          <img src={hero_banner_2} alt="hero banner" className='h-full w-full absolute  translate-x-[-8rem] -translate-y-5 group-hover:-translate-y-5 group-hover:-rotate-12 transition-all duration-300 ease-in-out ' />
          <img src={hero_banner} alt="hero banner" className='h-full w-full absolute translate-x-[8rem] group-hover:rotate-12 transition-all duration-300 ease-in-out' />
            </div>
            
        </div>
    </footer>
  )
}

export default Footer