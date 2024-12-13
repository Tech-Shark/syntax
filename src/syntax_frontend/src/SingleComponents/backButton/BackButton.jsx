import React from 'react'
import gray_icon from '../../assets/images/gray_icon.svg'
// import { Link } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";
import LinkWithTransition from '../../LinkWithTransition';



function BackButton() {
  // const navigate = useNavigate();

  // const handleBack = (e) => {
  //   e.preventDefault();
  //   navigate(-1); // Navigate to the previous page
  // };
  return (
    <LinkWithTransition back>
            <div className='flex  justify-between cursor-pointer max-w-[6.19rem]'>
                <img src={gray_icon} alt="gray icon" className='w-[2.5rem] h-7  ' />
                <p className='font-semibold text-[0.9rem] text-[#3D3F4E] leading-[1.68rem] drop-shadow-[0.67px_0.67px_13.28px_rgba(0,0,0,0.5)]' >Back</p>
            </div>
    </LinkWithTransition>
  )
}

export default BackButton