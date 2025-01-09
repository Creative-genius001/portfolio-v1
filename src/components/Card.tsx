import React from 'react'
import { data } from './data'

const Card = () => {
  return (

    <>
      {data?.map(d=>{
          return(
            <div className="w-full flex sm:flex-col lg:flex-row justify-between items-center mb-12">
                <div className='lg:w-[48%] sm:w-full sm:h-[210px] lg:h-[300px] overflow-hidden rounded-md sm:mb-4 lg:mb-0'>
                  <img src={d.image} alt={d.name} className='w-full h-full' />
                </div>
                <div className='lg:w-[48%] sm:w-full flex flex-col justify-start'>
                  <h1 className='font-bold sm:text-[1.9rem] lg:text-[2.7rem] '>{d.name}</h1>
                  <hr className='hr-stroke' />
                  <p className='md:text-lg sm:text-base text-[#f5f5f5cd]'>{d.desc}</p>
                  
                  <div className='lg:mt-4 sm:mt-8'>
                    <a className='project-btn' href={d.gitLink}>Github</a>
                    <a className='project-btn' href={d.demoLink}>Live</a>
                  </div>
                </div>
            </div>
          )
      })}
    </>
  )
}

export default Card