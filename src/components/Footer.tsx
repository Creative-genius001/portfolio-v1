import React from 'react'
import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className="w-full pt-[10rem] pb-8 flex flex-col justify-center items-center">
        <div className='footer-icons flex justify-evenly mb-4 w-[20%]'>
            <a href='https://github.com/Creative-genius001'><FiGithub className='icon text-slate-300 lg:text-[1.3rem] sm:text-[1.1rem] hover:text-tech-blue transition-all duration-300' /></a>
            <a href='https://x.com/kingovie_007'><FiTwitter className='icon text-slate-300 lg:text-[1.3rem] sm:text-[1.1rem] hover:text-tech-blue transition-all duration-300 ' /></a>
            <a href='https://www.linkedin.com/in/ovie-ighosuakpo/'><FiLinkedin className='icon text-slate-300 lg:text-[1.3rem] sm:text-[1.1rem] hover:text-tech-blue transition-all duration-300'/></a>
        </div>
        <span className="code  text-center text-slate-300 lg:text-sm sm:text-xs ">Designed and built by Ovie Ighosuakpo</span>
      </footer> 
  )
}

export default Footer