import React from 'react'
import Header from '../../SingleComponents/Header/Header'
import Hero from '../../SingleComponents/Hero/Hero'
import hero_bg from '../../assets/images/hero_bg.svg'
import HowItWorks from '../../SingleComponents/HowItWorks/HowItWorks'
import KeyFeatures from '../../SingleComponents/KeyFeatures/KeyFeatures'
import Pricing from '../../SingleComponents/Pricing/Pricing'
import Faqs from '../../SingleComponents/FAQs/Faqs'
import Testimonials from '../../SingleComponents/Testimonials/Testimonials'
import SubFooter from '../../SingleComponents/SubFooter/SubFooter'
import Footer from '../../SingleComponents/Footer/Footer'

function Home() {
  return (
    <section className='relative font-outfit'>
      <div className='px-4 min-h-[62.49rem] bg-[#E1E0F3]    ' >
        <img src={hero_bg} alt="hero background" className='w-[9.56rem] lg:w-3/5 lg:h-[28.31rem] h-[7.31rem]  absolute left-[-2rem] lg:left-[-12rem] z-0' />
        <div className='absolute inset-x-0 '>
        <Header />
        <Hero />
        </div>

    </div>
    <div className="px-12">
    <HowItWorks />
    <KeyFeatures />
    <Pricing />
    <Faqs />
    <Testimonials />
    <SubFooter />
    </div>
    <Footer />
    </section>
  )
}

export default Home