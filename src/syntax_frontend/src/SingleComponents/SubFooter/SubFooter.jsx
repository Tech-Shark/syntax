import React from 'react'
import subfooter from '../../assets/images/subfooter_img.png'
// import hexagon_icon from '../../assets/images/hexagon_icon.svg'
import BuildButton from '../BuildButton/BuildButton'

function SubFooter() {
  return (
        <section >

        <section className='mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20'>

        <img src={subfooter} alt="subfooter image" className='h-[25.71rem]  mx-auto' />

        <div className='flex gap-8 items-center justify-center font-normal text-[1.43rem] leading-[2.15rem] text-[#1C1D24] '>
            <ul className=' flex flex-col gap-4 [&>li]:cursor-pointer'>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
                <li>Create Cv</li>
            </ul>
            <ul className='flex flex-col gap-4 mt-12 [&>li]:cursor-pointer'>
                <li>LinkedIn</li>
                <li>Twitter (X)</li>
                <li>Instagram</li>
             
            </ul>
            
        </div>

        <div className='flex flex-col  gap-8 justify-center font-medium text-[1.67rem] leading-[2.1rem]'>
        <p>Let AI do the work. Build a CV that gets you noticed.</p>
        <p>Take the next step in your career with a CV tailored to showcase your strengths."</p>
        

        </div>

        {/* <div className='border border-red-900 w-full lg:60rem h-11 items-center justify-end  flex  '>
        <img src={hexagon_icon} alt="hexagon icon" className='border border-blue-700' />
        </div> */}
       

        </section>

        <div className='flex  items-center mt-8 justify-center lg:px-16 '>
             <BuildButton />
        </div> 
        </section>
   
   
  )
}

export default SubFooter