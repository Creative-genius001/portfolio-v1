import { FiTwitter, FiGithub, FiLinkedin } from 'react-icons/fi'

const SocialLinks = () => {
  return (
    <div className='fixed z-[1000] social-link'>
        <hr className='absolute top-[540px] left-[-50px] rotate-90 w-[200px] h-[20px]  '/>
        <div className='absolute top-[285px] left-[50px] flex flex-col justify-evenly h-[150px]'>
            <a href='https://github.com/Creative-genius001' rel="noreferrer" target='_blank'><FiGithub className='icon text-slate-300 text-[1.3rem] hover:text-tech-blue transition-all duration-300' /></a>
            <a href='https://x.com/kingovie_007' rel="noreferrer" target='_blank'><FiTwitter className='icon text-slate-300 text-[1.3rem] hover:text-tech-blue transition-all duration-300 ' /></a>
            <a href='https://www.linkedin.com/in/ovie-ighosuakpo/' rel="noreferrer" target='_blank'><FiLinkedin className='icon text-slate-300 text-[1.3rem] hover:text-tech-blue transition-all duration-300'/></a>
        </div>

    </div>
  )
}

export default SocialLinks