import {Link, useNavigate} from 'react-router-dom';
import Sidebar from '../Sidebar';
import grey_arrow from "@/assets/images/gray_icon.svg";
import hamburger_menu from "@/assets/images/hamburger_menu.svg";
import TopIcons from './topIcons';
import download_icon from '@/assets/images/download_icon.svg'
import DashboardData from './dashboardData';
import build_icon from '@/assets/images/build_icon.svg'
import arrow_up from '@/assets/images/arrow_up.svg'
import my_template from '@/assets/images/my_template.svg'
import {FaPlus} from "react-icons/fa6";
import CvTemplateCarousel from '@/components/Homepage/cvTemplateCarousel';

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React, {useEffect, useState} from 'react';
import {useAuth} from "@/contexts/AuthenticationContext";


const Dashboard: React.FC = () => {
    const [name, setName] = useState("")

    const { authUser } = useAuth();

    const singleUserData = async () => {
        console.log(authUser);
        const details = authUser?.full_name[0].split(" ")
        if (details.length) {
            return setName(details[0])
        }
    }

    useEffect(() => {
        singleUserData()
    }, [])


    const navigate = useNavigate();

    return (
        <section className='flex font-outfit'>
            <Sidebar/>
            <div className='px-4 md:px-6 pt-8 w-full h-screen overflow-x-auto'>
                <nav className='md:hidden flex justify-between items-center '>
                      <span className='flex items-center gap-2 cursor-pointer' onClick={() => navigate(-1)}>
                            <img src={grey_arrow} alt="back"/>
                            <p className='font-semibold text-[#3D3F4E] leading-[1.7rem] text-center [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.50)]'>Back</p>
                      </span>
                    <img src={hamburger_menu} alt="menu"/>
                </nav>
                <div
                    className='flex flex-col md:flex-row justify-center md:justify-between w-full mt-10 lg:mt-0 gap-3 lg:gap-0 items-center'>
                    <h5 className='font-bold text-[2.8rem] leading-normal sm:text-3xl  lg:text-[3rem] md:leading-[4rem]'>Welcome {name}</h5>
                    <p className='md:hidden text-center text-[0.88rem] leading-normal font-normal'>Pick a template that
                        suits your style, or explore tailored recommendations based on your career goals.</p>
                    <TopIcons/>
                </div>

                <div className='hidden lg:flex gap-4 mt-8 font-semibold text-[0.93rem] leading-[1.73rem] flex-wrap'>
                    <div
                        className='flex gap-4 rounded-[4px] bg-black text-white py-[0.313rem] px-[0.63rem] cursor-pointer w-[8rem] items-center min-w-fit'>
                        <p>Download</p>
                        <img src={download_icon} alt="download icon"/>
                    </div>
                    <div
                        className='flex gap-4 rounded-[4px] border border-black text-black py-[0.313rem] px-[0.63rem] cursor-pointer w-[8rem] items-center justify-center '>
                        <p>Upload</p>
                    </div>
                </div>

                {/* Dashboard Data */}
                <DashboardData/>

                <div className='flex justify-between items-center  mt-12 '>
                    <Collapsible>
                        <CollapsibleTrigger
                            className='flex items-center gap-2  font-semibold text-[1.2rem] leading-normal lg:text-[1.34rem] lg:leading-[1.68rem]'>My
                            Templates
                            <img src={my_template} alt=""/>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                            Yes. Free to use for personal and commercial projects. No attribution
                            required.
                        </CollapsibleContent>
                    </Collapsible>

                    {/* get started button */}
                    <div className="group flex lg:hidden items-center hover:bg-black rounded-full hover:p-2 hover:text-white transition-all delay-300">
                        <span className="hidden items-center text-white gap-2 px-4 cursor-pointer group-hover:flex group-hover:transition-all group-hover:duration-300 group-hover:ease-in">
                            <Link to="/create-cv"><h5 className='font-medium text-[1.125rem]'>Get started</h5></Link>
                        </span>
                        <img
                            src={build_icon}
                            alt="build icon"
                            className='w-[3rem] h-[3rem] cursor-pointer group-hover:transition-all group-hover:duration-300 group-hover:ease-in group-hover:w-[2rem] group-hover:h-[2rem] group-hover:rotate-[40deg]'
                        />
                    </div>
                    <Link to="/create-cv"
                          className='hidden group lg:flex items-center font-semibold lg:text-[1.34rem] leading-[1.68rem] bg-black text-white gap-2 rounded-3xl px-[1.03rem] py-[0.41rem] hover:gap-8 transition-all delay-300'>
                        <p className='font-semibold text-[1.2rem] leading-[1.68rem] '>
                            Get started
                        </p>
                        <img src={arrow_up} alt="arrow up"
                             className='w-[1.9rem] group-hover:rotate-[40deg] transition-all delay-300'/>
                    </Link>
                </div>

                {/* upload cv part */}
                <Link to="/create-cv"
                      className='flex items-center justify-center flex-col gap-[1.35rem] mt-[3.3rem] mb-0'>
                    <div
                        className='flex items-center justify-center px-[1.69rem] py-[1.11rem] h-[12.6rem] w-[12.6rem] rounded-full border-8 border-[#5D6078] group hover:border-black'>
                        <FaPlus className='w-[9.2rem] h-[9.2rem] text-[#5D6078] group-hover:text-black'/>
                    </div>
                    <h5 className='text-center text-[0.88rem] lg:text-lg font-normal leading-normal text-[#1C1D24]'>Your
                        CVs will appear here once you create them. <br/> Get started and build a CV that stands out.
                    </h5>
                </Link>

                {/* template part */}
                <div className="flex justify-between my-8 flex-col">

                    <div className='flex justify-between items-center  mt-12 mb-8'>
                        <Collapsible>
                            <CollapsibleTrigger
                                className='flex items-center gap-2  font-semibold text-base leading-normal lg:text-[1.34rem] lg:leading-[1.68rem]'>Recommended
                                Templates
                                <img src={my_template} alt=""/>
                            </CollapsibleTrigger>
                            <CollapsibleContent>
                                Yes. Free to use for personal and commercial projects. No attribution
                                required.
                            </CollapsibleContent>
                        </Collapsible>

                        {/* get started button */}
                        <div
                            className="group flex lg:hidden items-center hover:bg-black rounded-full hover:p-2 hover:text-white transition-all delay-300">
                            <span
                                className="hidden items-center text-white gap-2 px-4 cursor-pointer group-hover:flex group-hover:transition-all group-hover:duration-300 group-hover:ease-in">
                                <Link to="/create-cv"><h5 className='font-medium text-[1.125rem]'>Get started</h5></Link>
                            </span>
                            <img src={build_icon} alt="build icon"
                                 className='w-[3rem] h-[3rem] cursor-pointer group-hover:transition-all group-hover:duration-300 group-hover:ease-in group-hover:w-[2rem] group-hover:h-[2rem] group-hover:rotate-[40deg]'/>
                        </div>
                        <Link to="/create-cv"
                              className='hidden group lg:flex items-center font-semibold lg:text-[1.34rem] leading-[1.68rem] bg-black text-white gap-2 rounded-3xl px-[1.03rem] py-[0.41rem] hover:gap-8 transition-all delay-300'>
                            <p className='font-semibold text-[1.2rem] leading-[1.68rem] '>
                                Get started
                            </p>
                            <img src={arrow_up} alt="arrow up"
                                 className='w-[1.9rem] group-hover:rotate-[40deg] transition-all delay-300'/>
                        </Link>
                    </div>

                    <CvTemplateCarousel/>
                </div>
            </div>
        </section>
    )
}

export default Dashboard
