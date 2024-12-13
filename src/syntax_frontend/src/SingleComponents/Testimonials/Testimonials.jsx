import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import build_icon from '../../assets/images/black_arrow.svg'


const testimonialClass = {
    p: 'font-normal text-[1.34rem] leading-[1.68rem]'
}
function Testimonials() {
  return (
    <section className='mt-[8rem]'>
        <h5 className='text-center font-medium text-[1.5rem] leading-[1.89rem] '>98% of users say they felt more confident applying for jobs with our AI resumes.</h5>
        <h5 className='font-bold text-4xl md:text-[3.1rem] leading-[4.42rem] mt-8'>Testimonials</h5>
        <p className='font-medium text-[1.67rem] leading-[2.1rem]'>Hear from Our Users</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-20 mt-16">
        
        <div className="flex flex-col ">
            <p className={testimonialClass.p}>“Syntax transformed my CV in minutes! The AI suggestions helped me add key terms I hadn’t considered, and I started getting interview calls almost immediately.”</p>

            
            <div className="flex items-center gap-4 mt-4">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Syntax</AvatarFallback>
            </Avatar>
            <div className='font-medium'>
            <p>Alex S.</p>
            <p>Marketing Specialist</p>
            </div>
            </div>
        </div>
        <div className="flex flex-col ">
            <p className={testimonialClass.p}>“The drag-and-drop builder is a game-changer. I was able to organize my CV exactly how I wanted, and it looks so much more professional now.”</p>

            
            <div className="flex items-center gap-4 mt-4">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Syntax</AvatarFallback>
            </Avatar>
            <div className='font-medium'>
            <p>Sarah G.</p>
            <p>Software Engineer</p>
            </div>
            </div>
        </div>
        <div className="flex flex-col ">
            <p className={testimonialClass.p}>“I’ve used other CV builders before, but Syntax’s AI-driven ATS optimization really makes a difference. My CV has never performed better!”</p>

            
            <div className="flex items-center gap-4 mt-4">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Syntax</AvatarFallback>
            </Avatar>
            <div className='font-medium'>
            <p>Alex S.</p>
            <p>Marketing Specialist</p>
            </div>
            </div>
        </div>

        </div>

       
      <div className="flex items-center  justify-center lg:px-16 mt-8">
            <div className='group flex items-center my-4 shadow-[-15px_-8px_24px_3px_rgba(0,0,0,0.1)] rounded-full px-6 py-1 pr-3 gap-4 cursor-pointer hover:gap-8 transition-all duration-300'>
                <h5 className=' font-semibold text-[1.5rem] text-[#3D3F4E] leading-[2.81rem] '>Show More</h5>
                <img src={build_icon} alt="build icon" className='w-[3.11rem] h-[3.11rem] group-hover:-rotate-45 group-hover:transition-all group-hover:duration-300 ease-in-out' />
            </div>
      </div>
    </section>
  )
}

export default Testimonials