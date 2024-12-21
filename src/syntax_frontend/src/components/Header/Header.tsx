import React from 'react'
import logo from '../../assets/images/logo_place_holder.svg'
import build_icon from '../../assets/images/build_icon.svg'
import { Link } from 'react-router-dom'
import menu_icon from '../../assets/images/menu_icon.svg'

function Header() {

    

    const navLinks = [
        {
            name: 'Features',
            path: '/features',
            id: 0
        },
        {
            name: 'Workflow',
            path: '/workflow',
            id: 1
        },
        {
            name: 'Pricing',
            path: '/pricing',
            id: 2
        },
        {
            name: 'FAQ',
            path: '/faq',
            id: 3
        },
        {
            name: 'Templates',
            path: '/templates',
            id: 4
        },
    ]
  return (
    <header className='flex justify-center pt-8 z-40'>
    <nav className='flex items-center w-4/5 md:w-auto rounded-full bg-white px-4 lg:px-[1.25rem] py-[0.5rem] justify-between'>
        <Link to='/'>
        <img src={logo} alt="logo icon" className='w-8 lg:w-[3.75rem] h-8 lg:h-[3.75rem]  cursor-pointer md:mr-4 lg:mr-8' />
        </Link>
    <ul className='hidden md:flex items-center justify-center gap-4 lg:gap-12 '>
        {navLinks.map((link) => (
            <Link to={link.path} key={link.id}>
                <li   className='cursor-pointer font-semibold text-[1.125rem] hover:text-[1.5rem] transition-all duration-300 ease-in hover:px-2' >{link.name}</li>
            </Link>
        ))}

    </ul>
     
    <nav className='flex gap-2 items-center ml-4 lg:ml-8 bg-black rounded-full text-white'>
    {/* Group wrapper to control hover states */}
    <div className=" group  flex items-center ">
       
        <span className="hidden items-center gap-2 px-4 cursor-pointer group-hover:flex group-hover:transition-all group-hover:duration-300 group-hover:ease-in">
            <h5 className='font-medium text-[1.125rem]'>Build CV</h5>
          
        </span>
        
        <img src={build_icon} alt="build icon" className='w-8 lg:w-[3.75rem] h-8 lg:h-[3.75rem] cursor-pointer group-hover:transition-all group-hover:duration-300 group-hover:ease-in group-hover:w-4 group-hover:lg:w-[2.75rem]  group-hover:lg:h-[2.75rem] group-hover:h-4 group-hover:rotate-45' />
        </div>
    </nav>

    <nav className='md:hidden block'>
        <img src={menu_icon} alt="menu icon" className='w-8  h-8  cursor-pointer ' />
    </nav>

    </nav>

    </header>
  )
}

export default Header