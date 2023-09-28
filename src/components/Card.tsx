import React from 'react'
import { data } from './data'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { Tooltip } from 'antd';
import { Link } from 'react-router-dom';

const Card = () => {
  return (

    <>
      {data?.map(d=>{
          return(
            <Link to={d.demoLink} target='_blank'>
            <div key={d.id} className='relative h-[300px] overflow-hidden rounded-[15px] flex md:flex-row sm:flex-col justify-between items-center mt-12 bg-red-400 mb-4 cursor-pointer'>
             <div className='card'>   
                <div className='card-image'>
                  <img className='card-img' src={d.image} alt="" />
                </div>
              <div className="card-content-wrapper w-full px-8 ">
                  <h3 className='card-name text-[1.7rem] font-black mb-1'>{d.name}</h3>
                  <div className='card-desc  md:text-base sm:text-sm '>
                    {d.desc}
                  </div>
                  <div className="tech-stack w-full mt-4 mb-4 flex flex-wrap ">
                    {d.stack?.map(s=>{ return (
                    <span className='mr-2 bg-transparent text-white border-white border-2 py-1 px-4 rounded-[2rem] text-[0.7rem] mb-2'>{s}</span>
                  )})}
                  </div>
                </div>
              </div>
              </div>
            </Link>
          )
      })}
    </>
  )
}

export default Card