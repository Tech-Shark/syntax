import React from 'react'
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// import './index.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules'


import 'swiper/css';
import BuildButton from '../BuildButton/BuildButton';


function HowItWorks() {

    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1
    //   };
  return (
    <section className=' py-12 overflow-x-hidden'>
        <h5 className='font-bold text-4xl md:text-[3.1rem] leading-[4.42rem]'>How it works</h5>
        <p className='font-medium text-xl md:text-[1.5rem] mb-8'>The 3-Step magic trick.</p>

    <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        loop={true}
        speed={2000}
        autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
        
        >
        <SwiperSlide style={{ }}>
            {/* <div> */}
                    <div className=' w-[20.39rem] h-[24.5rem] bg-[#000006] rounded-[7.64px] p-4 flex flex-col gap-4'>
                        <div className='bg-white w-full h-1/2 rounded-[7.64px] '></div>

                        <div className='text-white'>
                            <h5 className='font-semibold md:text-[1.88rem] text-[1.5rem] leading-[2.47rem] mb-4 '>Upload or Create</h5>
                            <p className='font-normal text-lg '>Start with your existing CV or build one from scratch using our drag-and-drop builder</p>
                        </div>

                    </div>
                    {/* </div> */}
        </SwiperSlide>

        <SwiperSlide style={{width: '40rem', marginLeft: '-3rem' }}>
        
                    <div className='w-full md:w-[40rem] bg-white shadow-lg h-[24.5rem] rounded-[7.64px] flex  p-6 mt-8'>
                        <div className='w-1/2 flex flex-col justify-center  px-8'>
                            <h5 className='font-semibold md:text-[1.88rem] text-[1.5rem] leading-[2.47rem] mb-4 '>AI Optimization</h5>
                            <p className='font-normal text-lg  pr-1  '>Receive tailored suggestions for keywords, formatting, and <span className='whitespace-nowrap'>country-specific </span>standards.</p>
                        </div>
                        <div className='w-1/2 h-full bg-[#000006] rounded-[7.64px]  '>

                        </div>


                    </div>
                
        </SwiperSlide>

        <SwiperSlide style={{  marginLeft: '16rem'}}>
        
                    <div className='w-full md:w-[20.39rem] h-[24.5rem] bg-[#000006] rounded-[7.64px] p-4 flex flex-col justify-between mt-20'>

    <div className='text-white mt-2'>
        <h5 className='font-semibold md:text-[1.88rem] text-[1.5rem] leading-[2.47rem] mb-4 '>TS Scoring</h5>
        <p className='font-normal text-lg '>Receive tailored suggestions for keywords, formatting, and country-specific standards.</p>
    </div>

    <div className='bg-white w-full h-1/2 rounded-[7.64px] '></div>


    </div>
                    
        </SwiperSlide>
        <SwiperSlide style={{ }}>
            {/* <div> */}
                    <div className=' w-[20.39rem] h-[24.5rem] bg-[#000006] rounded-[7.64px] p-4 flex flex-col gap-4'>
                        <div className='bg-white w-full h-1/2 rounded-[7.64px] '></div>

                        <div className='text-white'>
                            <h5 className='font-semibold md:text-[1.88rem] text-[1.5rem] leading-[2.47rem] mb-4 '>Upload or Create</h5>
                            <p className='font-normal text-lg '>Start with your existing CV or build one from scratch using our drag-and-drop builder</p>
                        </div>

                    </div>
                    {/* </div> */}
        </SwiperSlide>

        <SwiperSlide style={{width: '40rem', marginLeft: '-3rem' }}>
        
                    <div className='w-full md:w-[40rem] bg-white shadow-lg h-[24.5rem] rounded-[7.64px] flex  p-6 mt-8'>
                        <div className='w-1/2 flex flex-col justify-center  px-8'>
                            <h5 className='font-semibold md:text-[1.88rem] text-[1.5rem] leading-[2.47rem] mb-4 '>AI Optimization</h5>
                            <p className='font-normal text-lg  pr-1  '>Receive tailored suggestions for keywords, formatting, and <span className='whitespace-nowrap'>country-specific </span>standards.</p>
                        </div>
                        <div className='w-1/2 h-full bg-[#000006] rounded-[7.64px]  '>

                        </div>


                    </div>
                
        </SwiperSlide>

        <SwiperSlide style={{  marginLeft: '16rem'}}>
        
                    <div className='w-full md:w-[20.39rem] h-[24.5rem] bg-[#000006] rounded-[7.64px] p-4 flex flex-col justify-between mt-20'>

    <div className='text-white mt-2'>
        <h5 className='font-semibold md:text-[1.88rem] text-[1.5rem] leading-[2.47rem] mb-4 '>TS Scoring</h5>
        <p className='font-normal text-lg '>Receive tailored suggestions for keywords, formatting, and country-specific standards.</p>
    </div>

    <div className='bg-white w-full h-1/2 rounded-[7.64px] '></div>


    </div>
                    
        </SwiperSlide>
        
    </Swiper>
    <div className='flex items-center  justify-center lg:mt-[6rem] px-16'>
        <BuildButton />
    </div>      
</section>
  )
}




export default HowItWorks