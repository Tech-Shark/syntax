import React from 'react'
import pricing_icon from '../../assets/images/pricing_icon.svg'
import star_icon from '../../assets/images/star_icon.svg';
import pentagon2_icon from '../../assets/images/pentagon2_icon.svg';
import hexagon_icon from '../../assets/images/hexagon_icon.svg';
import build_icon from '../../assets/images/build_icon.svg'

  


function Pricing() {
  return (
    <section className='mt-16'>
        <h5 className='font-bold text-4xl md:text-[3.1rem] leading-[4.42rem] lg:mb-2'>Pricing</h5>
        <p className='font-medium text-[1.67rem] leading-[2.1rem]'>Flexible Pricing for Every Need!</p>

            <div className='flex  justify-center'>
                <img src={pricing_icon} alt="pricing icon" />
            </div>

            <div className='flex justify-between  gap-16'>
            <div className='w-5/12 pr-10'>
                <h5 className='font-bold text-[1.67rem] leading-[2.1rem]'>Free Plan:</h5>
                <p className='font-normal text-[1.5rem] leading-[1.89rem]text-justify'>Access essential tools, basic CV templates, and AI-powered ATS scoring to improve your CV's visibility. Earn tokens with each use, gaining insights into your CV’s performance</p>
            </div>
            <div className='w-1/3'>
                <h5 className='font-bold text-[1.67rem] leading-[2.1rem]' >Premium Plan:</h5>
                <p className='font-normal text-[1.5rem] leading-[1.89rem] text-justify'>Unlock all features, including advanced templates, in-depth AI suggestions, and higher token rewards. Customize your CV with the drag-and-drop builder and access exclusive features designed to maximize your job search success.</p>
            </div>
            
            </div>

            <div className='mt-16 flex justify-between'>

                <div className='p-4 h-[38.07rem] shadow-xl w-[30%] rounded-lg flex flex-col gap-6 mt-8 group cursor-pointer hover:shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] hover:border-2 hover:border-black '>
                <div className="w-full min-h-[9.6rem] bg-black rounded-lg">

                </div>

                <div className=''>
                    <div className='flex justify-between pr-2'>
                        <h5 className='font-semibold text-[2.51rem] leading-[3.3rem] h-[3.31rem]'>$2/ Resume</h5>
                        <img src={star_icon} alt="star icon" className='group-hover:rotate-180 transition-all ease-in-out duration-300' />
                    </div>
                    <ul className='list-disc p-8 font-normal text-[1.34rem] leading-[1.68rem]'>
                        <li >Pay as you go</li>
<li>Basic CV templates with ATS compatibility</li>
<li>Limited AI-powered CV scoring and optimization tips</li>
<li>Basic token earnings per action (e.g., CV uploads, ATS analysis)</li>
<li>Access to standard interactive CV suggestions
</li>
<li>Limited country-specific templates</li>
                    </ul>

                </div>
                </div>



                <div className='px-4 pt-4 h-[43.08rem] shadow-xl w-[30%] rounded-lg flex flex-col gap-6 bg-black text-white group cursor-pointer hover:shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] hover:border-2 hover:border-black'>
                <div className="w-full min-h-[9.6rem] bg-[#E1E0F3] rounded-lg">

                </div>

                <div className=''>
                    <div className='flex justify-between pr-2'>
                        <h5 className='font-semibold text-[2.51rem] leading-[3.3rem] h-[3.31rem]'>$5/Month</h5>
                        <img src={pentagon2_icon} alt="star icon" className='group-hover:rotate-180 transition-all ease-in-out duration-300' />
                    </div>
                    <ul className='list-disc p-8 font-normal text-[1.34rem] leading-[1.68rem]'>
                        <li >All Free Plan features, plus:</li>
<li>Access to advanced CV templates and layout options</li>
<li>Unlimited AI recommendations and ATS scoring</li>
<li>Higher token earnings for each interaction</li>
<li>Full access to drag-and-drop CV builder (desktop-only)
</li>
<li>In-depth country-specific customization</li>
<li>Priority support and in-app notifications</li>
                    </ul>

                </div>
                </div>




                <div className='p-4 h-[41.41rem] shadow-xl w-[30%] rounded-lg bg-[#E1E0F3] text-black flex flex-col gap-8 mt-16 group cursor-pointer hover:shadow-[10px_10px_5px_1px_rgba(0,0,0,0.75)] hover:border-2 hover:border-black'>
                <div className="w-full min-h-[9.6rem] bg-black rounded-lg">

                </div>

                <div className=''>
                    <div className='flex justify-between pr-2'>
                        <h5 className='font-semibold text-[2.51rem] leading-[3.3rem] h-[3.31rem]'>$20/Month</h5>
                        <img src={hexagon_icon} alt="star icon" className='group-hover:rotate-180 transition-all ease-in-out duration-300' />
                    </div>
                    <ul className='list-disc p-8 font-normal text-[1.34rem] leading-[1.68rem]'>
                        <li >All Premium Plan features, plus:</li>

<li>Exclusive templates tailored to specific industries (e.g., tech, finance, etc.)</li>

<li>Personalized CV feedback from AI for targeted roles</li>

<li>Enhanced token rewards for maximum earning</li>

<li>Access to a career resources library and tutorials
</li>
<li>Priority feature updates and new template releases</li>
                    </ul>

                </div>
                </div>

                
                

            </div>

            
            <div className='flex items-center  justify-center px-16'>
            <div className='group flex items-center my-4 bg-black rounded-full px-6 pr-3 gap-4 cursor-pointer hover:gap-8 transition-all duration-300'>
        <h5 className='text-white font-semibold text-[1.5rem] leading-[2.81rem] '>Get Started</h5>
        <img src={build_icon} alt="build icon" className='w-[3.11rem] h-[3.11rem] group-hover:rotate-45 group-hover:transition-all group-hover:duration-300 ease-in-out' />
            </div>
            </div>
     
    </section >
  )
}

export default Pricing