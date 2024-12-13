import React from 'react'

import dashboard_icon from '../../assets/images/dashboard_arrow.svg'
import upload_cv from '../../assets/images/upload_cv_icon.svg';
import { Link } from 'react-router-dom'
import build_icon from '../../assets/images/build_icon.svg'

import BackButton from '../../SingleComponents/backButton/BackButton';


function UploadCv() {
  return (
    <section className='lg:px-12 px-2 py-20 font-outfit'>
        <div className="grid grid-cols-[6.19rem_30.62rem_7.74rem]  justify-between ">

            <BackButton />

            <div className='flex flex-col items-center '>
                <h5 className='font-bold lg:text-[3rem] text-2xl md:text-3xl leading-[3.78rem] mb-4'>Upload CV</h5>
                <p className='font-normal text-[1rem] leading-[1.26rem]  text-center '>Drop your file here or browse to upload. We'll analyze it and provide suggestions to improve.</p>

                <div className=" mt-20">
                    <img src={upload_cv} alt="upload cv icon" className='' />
                   
                </div>

                <div className='flex items-center  justify-center px-16 mt-16'>

                <Link to='/upload-cv'>
                <div className='group flex items-center my-4 bg-black rounded-full px-6 pr-3 gap-4 cursor-pointer hover:gap-8 transition-all duration-300'>
                    <h5 className='text-white font-semibold text-[1.5rem] leading-[2.81rem] '>Upload CV</h5>
                     <img src={build_icon} alt="build icon" className='w-[3.11rem]  h-[3.11rem] group-hover:rotate-45 group-hover:transition-all group-hover:duration-300 ease-in-out' />
                </div>
                </Link>

                
                </div> 



            </div>
            
            <Link to='/dashboard'>
                    <div className='flex justify-between cursor-pointer '>
                        <p className='font-semibold text-[0.9rem] text-[#3D3F4E] leading-[1.68rem] drop-shadow-[0.67px_0.67px_13.28px_rgba(0,0,0,0.5)]'>Dashboard</p>
                        <img src={dashboard_icon} alt="dashboard arrow" className='w-[1.86rem] h-7' />
                    </div>
            </Link>
           
            
        </div>
    </section>
  )
}

export default UploadCv