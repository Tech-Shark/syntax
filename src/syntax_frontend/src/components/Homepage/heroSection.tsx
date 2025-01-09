import hero_banner_1 from '../../assets/images/hero_banner_1.svg'
import hero_banner_2 from '../../assets/images/hero_banner_2.svg'
import hero_banner from '../../assets/images/hero_banner.svg'
import BuildButton from "../BuildButton";

const Hero: React.FC = () => {
  return (
    <div className='flex items-center flex-col justify-center mt-16 md:mt-[8rem] text-[#1C1D24] text-center px-5 md:px-16'>
      <div className='flex flex-col gap-[2.9rem]'>
        <h3 className='font-bold leading-normal text-[2.8rem] md:text-6xl lg:text-center lg:text-[4.71rem] lg:leading-[8.35rem] md:leading-[5rem] text-left'>AI-Powered Resumes, Tailored to You</h3>
        <p className='font-normal text-left lg:text-center md:text-3xl lg:text-[2.34rem] md:leading-10 lg:leading-[3.51rem] lg:mb-4'>Generate a professional, tailored resume in minutes. Just share your skills and job details, and let our AI build a standout CV designed to impress.</p>
        <div className='flex justify-center'>
          <BuildButton />
        </div>
      </div>

      <div className='group relative h-[15.35rem] sm:h-[15rem] lg:h-[24.2rem] group-hover:h-auto group-hover:w-auto min-w-full md:w-4/5 mt-8 overflow-hidden  cursor-pointer pt-10'>
          <img src={hero_banner_1} alt="hero banner" className='h-full w-4/5 md:w-full absolute group-hover:-translate-y-6 lg:group-hover:-translate-y-4 transition-all duration-300 ease-in-out  left-7 md:left-0' />
          <img src={hero_banner_2} alt="hero banner" className='h-full w-4/5 md:w-full absolute md:translate-x-[-4rem] lg:translate-x-[-8rem] -translate-y-5 group-hover:-translate-y-7 lg:group-hover:-translate-y-5 group-hover:-rotate-12 transition-all duration-300 ease-in-out  -left-0 md:left-0' />
          <img src={hero_banner} alt="hero banner" className='h-full w-4/5 md:w-full absolute  md:translate-x-[3rem] lg:translate-x-[8rem] group-hover:rotate-[18deg]  lg:group-hover:rotate-12 transition-all duration-300 ease-in-out left-14 md:left-0' />
    </div>
    </div>
  )
}

export default Hero