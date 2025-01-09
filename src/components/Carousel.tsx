import React from 'react'
import { tech } from '../techStack';
import '../styles/carousel.css'

const Carousel = () => {

    const scrollRef = React.useRef<HTMLDivElement>(null);

    const pauseScroll = () => {
        if (scrollRef.current) {
        scrollRef.current.style.animationPlayState = 'paused';
        }
    };

    const resumeScroll = () => {
        if (scrollRef.current) {
        scrollRef.current.style.animationPlayState = 'running';
        }
    };


  return (
    <div className="carousel-wrapper overflow-hidden">
    <div className='gradient-overlay gradient-overlay-right' />
    <div className="carousel flex " onMouseEnter={pauseScroll} onMouseLeave={resumeScroll}>
        <div className='carousel-track'>
            {tech.map((t, index)=> {
                return(
                    <div key={index} className="carousel-item">
                        <p>{t.name}</p>
                    </div>
                );
            }) }
            {tech.map((t, index)=> {
                return(
                    <div key={index} className="carousel-item">
                        <p>{t.name}</p>
                    </div>
                );
            }) }
        </div>       
    </div>
    <div className='gradient-overlay gradient-overlay-left' />
    </div>
  )
}

export default Carousel