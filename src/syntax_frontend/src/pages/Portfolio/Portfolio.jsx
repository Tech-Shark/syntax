import React from 'react'
import BackButton from '../../SingleComponents/backButton/BackButton'
import DashboardButton from '../../SingleComponents/dashboardButton/DashboardButton'
import data from '../../cvStyles/data.json'
import { Textarea } from "@/components/ui/textarea"
import build_icon from '../../assets/images/build_icon.svg'
import LinkWithTransition from '../../LinkWithTransition'


function Portfolio() {
  return (
    <section className='font-outfit py-20 lg:px-12 px-2 '>
      <div className='grid md:grid-cols-[6.19rem_49rem_7.74rem]  justify-between'>
      <BackButton />
      <div className='flex flex-col items-center mt-4'>
        <h1 className='font-bold text-[3.34rem] leading-[4.21rem] '>Show Your Projects & Portfolio</h1>
          <div className='font-normal text-[1rem] leading-[1.26rem] flex flex-col items-center mt-4'>
          <p>Showcase your awards, certifications, or milestones. Our </p>
          <p>AI can refine and enhance your descriptions.</p>
          </div>
      </div>
      <DashboardButton />
      </div>

      <div className='mt-20 grid grid-cols-2 md:grid-cols-[repeat(3,1fr)]  '>
        <ul className='flex flex-col gap-4 '>
            <li className={data.li}>Personal Information</li>
            <li className={data.li}>Work Experience</li>
            <li className={data.li}>Skills</li>
            <li className={data.li}>Education</li>
            <li className={data.li}>Achievements</li>
            <li className={data.active}>Projects/Portfolio</li>
        </ul>
        <div className='grid  lg:w-[24rem] px-8  gap-8 '>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>Link to Project/Portfolio (Optional)</label>
            <input type="text" placeholder='https//' className='bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4 outline-none' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>Project Description:</label>
            <Textarea placeholder="I ...."  />

        </div>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>Skills/Technologies Used</label>
            <input type="text" placeholder='JavaScript' className='bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4 outline-none' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>Role in the Project</label>
            <input type="email" placeholder='Lead Developer' className='bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4 outline-none' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>Outcome/Impact</label>
            <input type="email" placeholder='Reduced processing time by 30%' className='bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4 outline-none' />
        </div>
        <div className='flex flex-col gap-4'>
            <label className={data.label}>Project Duration</label>
            <input type="email" placeholder='May, 2024 - Oct, 2023' className='bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4 outline-none' />
        </div>

        

        <div className="flex gap-4 justify-center">

      <LinkWithTransition back>

      <div className='group flex items-center my-4 bg-black rounded-full px-2 pr-3 gap-2 cursor-pointer hover:gap-4 transition-all duration-300 w-[7.8rem]'>
        <img src={build_icon} alt="build icon" className='w-[3.11rem] -rotate-45 h-[3.11rem] group-hover:-rotate-180 group-hover:transition-all group-hover:duration-300 ease-in-out' />
        <h5 className='text-white font-semibold text-[0.93rem] leading-[1.73rem] '>Back</h5>
        </div>
      </LinkWithTransition>

        <div className='group flex items-center my-4 bg-black rounded-full px-6 pr-3 gap-2 cursor-pointer hover:gap-4 transition-all duration-300 w-[7.8rem]'>
        <h5 className='text-white font-semibold text-[0.93rem] leading-[1.73rem] '>Done</h5>
        <img src={build_icon} alt="build icon" className='w-[3.11rem]  h-[3.11rem] group-hover:rotate-45 group-hover:transition-all group-hover:duration-300 ease-in-out' />
        
        </div>

        </div>

        </div>
      </div>
       
    </section>
  )
}

export default Portfolio