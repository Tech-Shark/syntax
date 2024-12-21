import React from 'react'
import BackButton from '../../SingleComponents/backButton/BackButton'
import DashboardButton from '../../SingleComponents/dashboardButton/DashboardButton'
import data from '../../cvStyles/data.json'
import add_skills from '../../assets/images/add_skills.svg'
import build_icon from '../../assets/images/build_icon.svg'
import LinkWithTransition from '../../LinkWithTransition'


function Skills() {
  return (
    <section className='font-outfit py-20 lg:px-12 px-2 '>
      <div className='grid md:grid-cols-[6.19rem_33.06rem_7.74rem]  justify-between'>
        <BackButton />
        
        <div className='flex flex-col items-center mt-4'>
        <h1 className='font-bold text-[3.34rem] leading-[4.21rem] '>Add Your Skills</h1>
          <div className='font-normal text-[1rem] leading-[1.26rem] flex flex-col items-center mt-4'>
          <p>List your key skills, and we’ll help you prioritize and </p>
            <p>organize them for maximum impact.</p>
          </div>
        </div>

        <DashboardButton />
        </div>
        <div className='mt-20 grid grid-cols-2 md:grid-cols-[repeat(3,1fr)]  '>
        <ul className='flex flex-col gap-4 '>
            <li className={data.li}>Personal Information</li>
            <li className={data.li}>Work Experience</li>
            <li className={data.active}>Skills</li>
            <li className={data.li}>Education</li>
            <li className={data.li}>Achievements</li>
            <li className={data.li}>Projects/Portfolio</li>
        </ul>

        <div className="flex flex-col w-[19.38rem] gap-12  lg:ml-16">
            <div className='flex flex-col gap-2 w-full '>
                <label className='font-bold text-[1.09rem] leading-[1.31rem]' >Technical Skill</label>
                <input type="text" placeholder='Advanced JavaScript Development' className='text-[#8C8CA1] font-normal text-[0.97rem] leading-[1.16rem] bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4' />
                <img src={add_skills} alt="add skills icon" className='self-center mt-3' />
            </div>

            <div className='flex flex-col gap-2 w-full '>
                <label className='font-bold text-[1.09rem] leading-[1.31rem]' >Soft Skill</label>
                <input type="text" placeholder='Problem Solving' className='text-[#8C8CA1] font-normal text-[0.97rem] leading-[1.16rem] bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4' />
                <img src={add_skills} alt="add skills icon" className='self-center mt-3' />
            </div>
            <div className='flex flex-col gap-2 w-full '>
                <label className='font-bold text-[1.09rem] leading-[1.31rem]' >Industry-Specific Skills</label>
                <input type="text" placeholder='Typography' className='text-[#8C8CA1] font-normal text-[0.97rem] leading-[1.16rem] bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4' />
                <img src={add_skills} alt="add skills icon" className='self-center mt-3' />
            </div>
            <div className='flex flex-col gap-2 w-full '>
                <label className='font-bold text-[1.09rem] leading-[1.31rem]' >Additional Skills</label>
                <input type="text" placeholder='Presentation Skills' className='text-[#8C8CA1] font-normal text-[0.97rem] leading-[1.16rem] bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4' />
                <img src={add_skills} alt="add skills icon" className='self-center mt-3' />
            </div>

            <div className="flex gap-4 justify-center mt-12">

      <LinkWithTransition back>
      <div className='group flex items-center my-4 bg-black rounded-full px-2 pr-3 gap-2 cursor-pointer hover:gap-4 transition-all duration-300 w-[7.8rem]'>
        <img src={build_icon} alt="build icon" className='w-[3.11rem] -rotate-45 h-[3.11rem] group-hover:-rotate-180 group-hover:transition-all group-hover:duration-300 ease-in-out' />
        <h5 className='text-white font-semibold text-[0.93rem] leading-[1.73rem] '>Back</h5>
        </div>
      </LinkWithTransition>

      <LinkWithTransition href='/education'>
      <div className='group flex items-center my-4 bg-black rounded-full px-6 pr-3 gap-2 cursor-pointer hover:gap-4 transition-all duration-300 w-[7.8rem]'>
        <h5 className='text-white font-semibold text-[0.93rem] leading-[1.73rem] '>Next</h5>
        <img src={build_icon} alt="build icon" className='w-[3.11rem]  h-[3.11rem] group-hover:rotate-45 group-hover:transition-all group-hover:duration-300 ease-in-out' />
        
        </div>
      </LinkWithTransition>


        </div>

        </div>

        </div>

        
    </section>
  )
}

export default Skills