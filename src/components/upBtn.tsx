import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { HiArrowSmUp } from 'react-icons/hi'

const UpBtn = () => {
  return (
    <AnchorLink href='#home'>
        <div className='fixed z-[1000] bottom-12 lg:right-12 sm:right-6 cursor-pointer rounded-[50%] w-12 h-12 bg-tech-blue flex justify-center items-center '>
            <HiArrowSmUp className='text-[white] text-[1.4rem]  '/>
        </div>
    </AnchorLink>
  )
}

export default UpBtn