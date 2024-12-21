import React from 'react'
import BackButton from '../../SingleComponents/backButton/BackButton'
import DashboardButton from '../../SingleComponents/dashboardButton/DashboardButton'
import data from '../../cvStyles/data.json'
import build_icon from '../../assets/images/build_icon.svg'
import dashboard_icon from '../../assets/images/dashboard_arrow.svg'
import LinkWithTransition from '../../LinkWithTransition'


function Education() {
  return (
    <section className='font-outfit py-20 lg:px-12 px-2 '>
      <div className='grid md:grid-cols-[6.19rem_33.06rem_7.74rem]  justify-between'>
        <BackButton />
        
        <div className='flex flex-col items-center mt-4'>
        <h1 className='font-bold text-[3.34rem] leading-[4.21rem] '>Add your Education</h1>
          <div className='font-normal text-[1rem] leading-[1.26rem] flex flex-col items-center mt-4'>
          <p>Provide details of your education, from your most recent </p>
            <p>or relevant degree to previous academic achievements.</p>
          </div>
        </div>

        <DashboardButton />
        </div>
        <div className='mt-20 grid grid-cols-2 md:grid-cols-[repeat(3,1fr)]  '>
        <ul className='flex flex-col gap-4 '>
            <li className={data.li}>Personal Information</li>
            <li className={data.li}>Work Experience</li>
            <li className={data.li}>Skills</li>
            <li className={data.active}>Education</li>
            <li className={data.li}>Achievements</li>
            <li className={data.li}>Projects/Portfolio</li>
        </ul>

        <div className="flex flex-col w-[19.75rem] gap-10  lg:ml-16">
            <div className='flex flex-col gap-2 w-full '>
                <label className='font-bold text-[1.09rem] leading-[1.31rem]' >Degree Type</label>
                <input type="text" placeholder="Bachelor's" className='text-[#8C8CA1] font-normal text-[0.97rem] leading-[1.16rem] bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4' />
                
            </div>

            <div className='flex flex-col gap-2 w-full '>
                <label className='font-bold text-[1.09rem] leading-[1.31rem]' >Field of Study</label>
                <input type="text" placeholder='Computer Science' className='text-[#8C8CA1] font-normal text-[0.97rem] leading-[1.16rem] bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4' />
                
            </div>

            <div className='flex flex-col gap-2 w-full '>
                <label className='font-bold text-[1.09rem] leading-[1.31rem]' >University/College Name</label>
                <input type="text" placeholder='Stanford University' className='text-[#8C8CA1] font-normal text-[0.97rem] leading-[1.16rem] bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4' />
                
            </div>

            <div className='flex flex-col gap-2 w-full '>
                <label className='font-bold text-[1.09rem] leading-[1.31rem]' >Location</label>
                <input type="text" placeholder='Stanford, CA, United States' className='text-[#8C8CA1] font-normal text-[0.97rem] leading-[1.16rem] bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4' />
                
            </div>

            <div className='flex flex-col gap-2 w-full '>
                <label className='font-bold text-[1.09rem] leading-[1.31rem]' >Start Date</label>
                <input type="text" placeholder='Aug, 2020' className='text-[#8C8CA1] font-normal text-[0.97rem] leading-[1.16rem] bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4' />
                
            </div>

            <div className='flex flex-col gap-2 w-full '>
                <label className='font-bold text-[1.09rem] leading-[1.31rem]' >End Date or Expected Graduation Date</label>
                <input type="text" placeholder='Aug, 2024' className='text-[#8C8CA1] font-normal text-[0.97rem] leading-[1.16rem] bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4' />
                
            </div>

            <div className='flex flex-col gap-2 w-full '>
                <label className='font-bold text-[1.09rem] leading-[1.31rem]' >Class of Degree (Optional)</label>
                <input type="text" placeholder='First Class' className='text-[#8C8CA1] font-normal text-[0.97rem] leading-[1.16rem] bg-[#E8E8E8] rounded-[7.75px] h-[2.91rem] px-4' />
                
            </div>

            <div className="flex justify-center items-center">
        <div className='flex rounded-[28.8px] lg:w-3/4 w-4/5 justify-between py-[0.5rem] px-[1.25rem] bg-white shadow-[2px_4px_28.7px_0px_rgba(0,0,0,0.1)] cursor-pointer group '>
        <h5 className='font-semibold text-[1.125rem] leading-[2.1rem] text-[#3D3F4E]'>Add Experience</h5>
        <img src={dashboard_icon} alt="arrow icon" className='rotate-45 ' />
        </div>
        </div>

            <div className="flex gap-4 justify-center mt-12">

        <LinkWithTransition back>
        <div className='group flex items-center my-4 bg-black rounded-full px-2 pr-3 gap-2 cursor-pointer hover:gap-4 transition-all duration-300 w-[7.8rem]'>
        <img src={build_icon} alt="build icon" className='w-[3.11rem] -rotate-45 h-[3.11rem] group-hover:-rotate-180 group-hover:transition-all group-hover:duration-300 ease-in-out' />
        <h5 className='text-white font-semibold text-[0.93rem] leading-[1.73rem] '>Back</h5>
        </div>
        </LinkWithTransition>
        
        <LinkWithTransition href='/achievements'>
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

export default Education