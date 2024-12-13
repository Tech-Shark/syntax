import React from 'react'
import gray_icon from '../../assets/images/gray_icon.svg'
import welcome1 from '../../assets/images/welcome_image1.png'
import welcome2 from '../../assets/images/welcome_image2.png'
import { Link } from 'react-router-dom'
import build_icon from '../../assets/images/build_icon.svg'
import black_icon from '../../assets/images/black_arrow.svg'
import DashboardButton from '../../SingleComponents/dashboardButton/DashboardButton'
import LinkWithTransition from '../../LinkWithTransition'


function WelcomeScreen() {
  return (
    <section className='lg:px-12 px-2 py-20 font-outfit'>
        <div className="grid grid-cols-[6.19rem_30.62rem_7.74rem] justify-between ">

            <LinkWithTransition href='/'>
            <div className='flex  justify-between cursor-pointer'>
                <img src={gray_icon} alt="gray icon" className='w-[2.5rem] h-7  ' />
                <p className='font-semibold text-[0.9rem] text-[#3D3F4E] leading-[1.68rem] drop-shadow-[0.67px_0.67px_13.28px_rgba(0,0,0,0.5)]'>Home</p>
            </div>
            </LinkWithTransition>

            <div className='flex flex-col items-center '>
                <h5 className='font-bold lg:text-[3rem] text-xl md:text-3xl leading-[3.78rem] mb-4'>Welcome to Syntax!</h5>
                <p className='font-normal text-[1rem] leading-[1.26rem]  text-center '>Upload your current resume or start fresh—we’ll help you craft a CV that stands out!</p>

                <div className="relative mt-20">
                    <img src={welcome1} alt="welcome1" className='absolute top-8 right-4' />
                    <img src={welcome2} alt="welcome2"  />
                </div>

                <div className='flex items-center  justify-center px-16 mt-16'>

                <LinkWithTransition href='/upload-cv'>
                <div className='group flex items-center my-4 bg-black rounded-full px-6 pr-3 gap-4 cursor-pointer hover:gap-8 transition-all duration-300'>
                    <h5 className='text-white font-semibold text-[1.5rem] leading-[2.81rem] '>Upload CV</h5>
                     <img src={build_icon} alt="build icon" className='w-[3.11rem]  h-[3.11rem] group-hover:rotate-45 group-hover:transition-all group-hover:duration-300 ease-in-out' />
                </div>
                </LinkWithTransition>

                
                </div> 

                <LinkWithTransition href='/personal-info'>
                <div className='flex items-center  justify-center px-16  mt-4'>

<div className='group flex items-center my-4 py-4  shadow-[-15px_-8px_24px_3px_rgba(0,0,0,0.1)]  rounded-full px-12  gap-6 cursor-pointer hover:gap-10 transition-all duration-300'>
    <h5 className=' font-semibold text-[1.5rem] leading-[2.81rem] '>Build New CV</h5>
     <img src={black_icon} alt="build icon" className='w-[3.11rem]  h-[3.11rem] group-hover:-rotate-45 group-hover:transition-all group-hover:duration-300 ease-in-out' />
</div>

</div> 
                </LinkWithTransition>



            </div>
            
           <DashboardButton />
           
            
        </div>
    </section>
  )
}

export default WelcomeScreen