import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import hero_bg from '../../assets/images/hero_bg.svg'

function Home() {
  return (
    <section className='relative'>
      <div className='px-4 h-[62.49rem] bg-[#E1E0F3]    ' >
        <img src={hero_bg} alt="hero background" className='w-[9.56rem] lg:w-3/5 lg:h-[28.31rem] h-[7.31rem]  absolute left-[-2rem] lg:left-[-12rem] z-0' />
        <div className='absolute inset-x-0 '>
        <Header />
        <Hero />
        </div>

    </div>
    </section>
  )
}

export default Home