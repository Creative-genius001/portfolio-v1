import React from 'react'
import AnchorLink from "react-anchor-link-smooth-scroll";

const Navbar = () => {
  return (
    <div className='nav fixed backdrop-blur-sm top-0 left-0 z-[1000] bg-[#00000050] flex justify-center items-center w-full h-[70px] py-[20px] '>
      <div className='nav-container w-[90%] flex justify-between items-center'>
        <div className="nav-logo w-[110px] h-[50px] flex items-center ">
            <a href='/' className='text-2xl font-extrabold cursor-pointer'>Ovie.dev</a>
        </div>
        <div className="nav-links w-[30%]">
            <ul className="nav-ul flex justify-between items-center lg:visible sm:invisible">
                <li className='hover:text-tech-blue transition-all duration-500 '><AnchorLink href='#home'>Home</AnchorLink></li>
                <li className='hover:text-tech-blue transition-all duration-500 '><AnchorLink href='#about'>About</AnchorLink></li>
                <li className='hover:text-tech-blue transition-all duration-500 '><AnchorLink href='#projects'>Projects</AnchorLink></li>
                <li className='hover:text-tech-blue transition-all duration-500 '><AnchorLink href='#contact'>Contact</AnchorLink></li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Navbar