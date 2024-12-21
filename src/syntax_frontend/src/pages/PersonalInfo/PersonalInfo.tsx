import React from 'react'
import BackButton from '../../SingleComponents/backButton/BackButton'
import DashboardButton from '../../SingleComponents/dashboardButton/DashboardButton'
import build_icon from '../../assets/images/build_icon.svg'
import data from '../../cvStyles/data.json'
import LinkWithTransition from '../../LinkWithTransition'


function PersonalInfo() {
 
  return (
    <section className='font-outfit py-20 lg:px-12 px-2 '>
        <div className='grid md:grid-cols-[6.19rem_49rem_7.74rem]  justify-between '>
        <BackButton />
        <div className='flex flex-col items-center mt-4'>
        <h1 className='font-bold text-[3.34rem] leading-[4.21rem] '>Tell us about yourself!</h1>
        <p className='font-normal text-[1rem] leading-[1.26rem] mt-4 '>These details form the foundation of your CV.</p>
        </div>
        <DashboardButton />
        </div>

    <div className='mt-20 grid grid-cols-2 md:grid-cols-[repeat(3,1fr)]  '>
        <ul className='flex flex-col gap-4 '>
            <li className={data.active}>Personal Information</li>
            <li className={data.li}>Work Experience</li>
            <li className={data.li}>Skills</li>
            <li className={data.li}>Education</li>
            <li className={data.li}>Achievements</li>
            <li className={data.li}>Projects/Portfolio</li>
        </ul>
        <div className='grid md:grid-cols-2 lg:w-[49rem] px-8 gap-8 '>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>First Name</label>
            <input type="text" placeholder='John' className='bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4 outline-none' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>Last Name</label>
            <input type="text" placeholder='Doe' className='bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4 outline-none' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>Enter Email</label>
            <input type="email" placeholder='John@email.com' className='bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4 outline-none' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>Phone Number</label>
            <input type="email" placeholder='+234xxxxxxxx' className='bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4 outline-none' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>Professional Title</label>
            <input type="email" placeholder='Software Engineer' className='bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4 outline-none' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>Nationality</label>
            <input type="email" placeholder='Nationality' className='bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4 outline-none' />
        </div>

        </div>
    </div>

    <div className="flex items-center justify-center mt-12">
    <LinkWithTransition href='/work-experience'>
                <div className='group flex items-center my-4 bg-black rounded-full px-6 pr-3 gap-4 cursor-pointer hover:gap-8 transition-all duration-300'>
                    <h5 className='text-white font-semibold text-[1.5rem] leading-[2.81rem] '>Next</h5>
                     <img src={build_icon} alt="build icon" className='w-[3.11rem]  h-[3.11rem] group-hover:rotate-45 group-hover:transition-all group-hover:duration-300 ease-in-out' />
                </div>
    </LinkWithTransition>
</div>
    


    </section>
  )
}

export default PersonalInfo