import {Link, useNavigate} from 'react-router-dom';
import Sidebar from '../Dashboard/Sidebar';
import backwardsArrow from "@/assets/images/backwardsArrow.svg";
import nextArrow from "@/assets/images/nextArrow.svg";
import TopIcons from '../Dashboard/UserDashboard/topIcons';
import {CiSearch} from "react-icons/ci";
import my_template from '@/assets/images/my_template.svg';
import build_icon from '@/assets/images/build_icon.svg';
import arrow_up from '@/assets/images/arrow_up.svg'
import CvTemplateCarousel from '@/components/Homepage/cvTemplateCarousel';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";


const CvTemplate: React.FC = () => {
    const navigate = useNavigate();

    return (
        <section className='flex font-outfit'>
            <Sidebar/>
            <div className='px-4 md:px-6 pt-8 w-full h-screen overflow-x-auto'>
                <nav className='md:hidden flex justify-between items-center '>
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center justify-center gap-4"
                    >
                        <div
                            className='flex items-center justify-center bg-[#d2d2d2] w-8 h-8 rounded-full shadow-[0.67px_0.67px_13.28px_rgba(61,63,78,0.5)]'>
                            <img src={backwardsArrow} alt="Go Back"/></div>
                        <p className='font-semibold text-[#3D3F4E] text-center [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.50)]'>Back</p>
                    </button>

                    <div className="flex items-center gap-3" onClick={() => navigate("/user-dashboard")}>
                        <p

                            className="text-base text-[#3D3F4E] font-medium leading-6 [text-shadow:0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer"
                        >
                            Dashboard
                        </p>
                        <div
                            className="flex items-center justify-center bg-[#3D3F4E] w-8 h-8 rounded-full shadow-[0.67px_0.67px_13.28px_rgba(61,63,78,0.5)] cursor-pointer">
                            <img src={nextArrow} alt="Next page"/>
                        </div>
                    </div>
                </nav>
                <div className='mt-6 md:mt-0 flex justify-center md:justify-between w-full '>
                    <h5 className='font-bold text-[2.5rem] text-center md:text-left sm:text-3xl lg:text-[3rem]  md:leading-[4rem]'>Choose
                        the Perfect Template</h5>
                    <TopIcons/>
                </div>

                <div
                    className='flex gap-4 mt-1 md:mt-8 font-semibold text-[0.93rem] leading-[1.73rem] flex-wrap justify-center md:justify-start'>
                    <p className='color-black text-center text-[0.88rem] md:text-left md:text-base font-normal leading-normal'>Pick
                        a template that suits your style, or explore tailored <br
                            className='lg:hidden'/> recommendations <br className='hidden md:block'/> based on your
                        career goals.</p>
                </div>


                <div className="flex justify-between my-8 flex-col">
                    <div
                        className='flex md:hidden justify-between items-center gap-2 border-black border-2 rounded-[2.25rem] px-[1.3rem] md:px-[1.88rem] py-[0.94rem]'>
                        <input type="text"
                               className='outline-none placeholder-shown:opacity-[0.4] text-black text-[1.1rem] md:text-[1.2rem] font-normal leading-normal'
                               placeholder='Search Templates'/>
                        <CiSearch className='h-[1.7rem] w-[1.7rem] md:w-7 md:h-7 text-black'/>
                    </div>


                    <div className='flex justify-between items-center my-14 md:my-[5rem] md:gap-20'>
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


                        <div
                            className='hidden md:flex items-center gap-2 border-black border-2 rounded-[2.25rem] px-[1.88rem] py-[0.94rem]'>
                            <input type="text"
                                   className='outline-none placeholder-shown:opacity-[0.4] text-black text-[1.2rem] font-normal leading-normal'
                                   placeholder='Search Templates'/>
                            <CiSearch className='w-7 h-7 text-black'/>
                        </div>

                        {/* get started button */}
                        <div
                            className="group flex lg:hidden items-center hover:bg-black rounded-full hover:p-2 hover:text-white transition-all delay-300">
                            <span
                                className="hidden items-center text-white gap-2 px-4 cursor-pointer group-hover:flex group-hover:transition-all group-hover:duration-300 group-hover:ease-in">
                                <Link to="/welcome"><h5 className='font-medium text-[1.125rem]'>Get started</h5></Link>
                            </span>
                            <img src={build_icon} alt="build icon"
                                 className='w-[3rem] h-[3rem] cursor-pointer group-hover:transition-all group-hover:duration-300 group-hover:ease-in group-hover:w-[2rem] group-hover:h-[2rem] group-hover:rotate-[40deg]'/>
                        </div>
                        <Link to="/welcome"
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

                <div className='hidden md:flex justify-between items-center my-[5rem] gap-20'>
                    <Collapsible>
                        <CollapsibleTrigger
                            className='flex items-center gap-2  font-semibold text-[1.34rem] leading-[1.68rem]'> Popular
                            Templates
                            <img src={my_template} alt="filter items"/>
                        </CollapsibleTrigger>
                    </Collapsible>


                    <Link to="/templates"
                          className='group flex items-center font-semibold text-[1.34rem] leading-[1.68rem] bg-black text-white gap-2 rounded-3xl px-[1.03rem] py-[0.41rem] hover:gap-8 transition-all delay-300'>
                        <p className='font-semibold text-[1.2rem] leading-[1.68rem] '>
                            Visit Templates
                        </p>
                        <img src={arrow_up} alt="arrow up"
                             className='w-[1.9rem] group-hover:rotate-[40deg] transition-all delay-300'/>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default CvTemplate;
