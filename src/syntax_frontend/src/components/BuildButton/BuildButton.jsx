import React from 'react'
import build_icon from '../../assets/images/build_icon.svg'

function BuildButton() {
  return (
    <div className='group flex items-center my-4 bg-black rounded-full px-6 pr-3 gap-4 cursor-pointer hover:gap-8 transition-all duration-300'>
        <h5 className='text-white font-semibold text-[1.5rem] leading-[2.81rem] '>Build CV</h5>
        <img src={build_icon} alt="build icon" className='w-[3.11rem] h-[3.11rem] group-hover:rotate-45 group-hover:transition-all group-hover:duration-300 ease-in-out' />
      </div>
  )
}

export default BuildButton