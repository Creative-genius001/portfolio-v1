import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Bg from '../src/assets/bg.jpg'
import SocialLinks from "./components/SocialLinks";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { animation } from "./utils/gsap";
import { tech } from "./techStack";
import { BrowserRouter as Router } from 'react-router-dom';
import UpBtn from "./components/upBtn";
import Footer from "./components/Footer";
import Photo from '../src/assets/photo.jpg'
import Carousel from "./components/Carousel";
const List = require('./assets/list.svg')

gsap.registerPlugin(ScrollTrigger);


function App() {

  useEffect(()=>{
       animation()
  },[])

  return (
    <Router>
    <div className="relative bg-black w-full">
        <div className=" h-[100vh] absolute top-0 right-0">
          <img src={Bg} alt=""  className="w-full h-full object-cover"/>
        </div>
       <Navbar />
        <SocialLinks />
        <UpBtn />

      <section id="home" className="hero-section relative z-100 w-full h-[calc(100vh-70px)] lg:px-[200px] sm:px-[25px] flex lg:justify-center sm:items-start  lg:items-center">
        <div className="hero-section-content lg:pt-0 sm:pt-[6rem] ">
          <h3 id="name-intro" className="code font-semibold text-tech-blue lg:text-lg sm:text-base ">Hi, my name is</h3>
          <h1 id="name" className="font-bold lg:text-[3.8rem] sm:text-[2rem] mt-0">Ovie Ighosuakpo,</h1>
          <h1 id="name-desc" className="font-bold lg:text-[3.8rem] sm:text-[2rem] lg:mt-[-10px] sm:mt-0 text-slate-300 leading-tight ">I build things for the web.</h1>
          <p id="name-desc2" className="text-slate-100 lg:w-[70%] sm:w-full mt-4 lg:text-base sm:text-sm ">I am a Frontend Developer that specialize in building (and occasionally designing) exceptional web applications and digital experiences.</p>
          <button id="resume-button" className="code relative btn-main w-[230px] px-[20px] py-[15px] bg-tech-purple mt-12 ">
            <a href="https://docs.google.com/document/d/1z8HKrAoCnWiz__dg3CH78TM3OBxXHGHy/edit?usp=drive_link&ouid=112585428787449489995&rtpof=true&sd=true" target="_blank" rel="noreferrer">Check out my Resume</a>
          </button>
        </div>

      </section>
      

      <section id="about" className="about-section overflow-hidden w-full lg:px-[200px] sm:px-[25px] py-[4rem]  flex lg:flex-row sm:flex-col flex-1 justify-between items-center ">
        <div className=" lg:w-1/2 sm:w-full">
          <h1 className="lg:text-[2rem] sm:text-[1.5rem] font-bold lg:mb-6 sm:mb-2 ">About Me</h1>
          <p className="lg:text-base sm:text-sm ">As a Frontend Developer, I excel in designing and maintaining responsive websites that offer a smooth user experience. My expertise lies in 
            crafting dynamic, engaging interfaces through writing clean and optimized code and utilizing cutting-edge development tools and techniques. 
            I am also a team player who thrives in collaborating with cross-functional teams to produce outstanding results.</p>
          <p className="mt-8 lg:text-base sm:text-sm mb-2 ">Here are a few technologies I have worked with:</p>
          <div className="flex flex-row flex-wrap lg:w-[500px] sm:w-full h-auto">
            {tech?.map(t => {
               return(
                <span className="bg-[#1973e198] border border-tech-purple text-white sm:text-[0.7rem] lg:text-[0.9rem] mr-2 w-auto py-1 px-4 mt-4 rounded-[50px]">{t.name}</span>
               );
            })}
          </div>
          
        </div>
        <div className="about-image lg:w-1/2 sm:w-full h-auto flex justify-center lg:mt-0 sm:mt-8" >
          <div className="relative image-container md:w-[250px] sm:w-[220px] md:h-[250px] sm:h-[220px] bg-tech-blue rounded-[12px] lg:left-07 ">
            <img src={Photo} alt="myPhoto" className="w-full h-full rounded-[12px]" />
          </div>
        </div>

      </section>
      
      {/* <div className="mt-20 flex justify-center flex-col items-center">
        <h1 className="lg:text-[2rem] sm:text-[1.5rem] font-bold lg:mb-4 sm:mb-2 ">Tech Stack</h1>
        <Carousel />
      </div> */}

      <section id="projects" className="project-section  w-full lg:px-[200px] sm:px-[25px] py-[4rem] flex flex-1 justify-between items-center">
          <div className="project-container w-full h-auto flex flex-col items-center">
            <h1 className="lg:text-[2rem] sm:text-[1.5rem] font-bold lg:mb-4 sm:mb-2 ">Projects</h1>
            <div className=" flex flex-col w-full mt-8">
              <Card />
            </div>
          </div>
      </section>

      <section id="contact" className="contact-section  w-full lg:px-[200px] sm:px-[25px] flex flex-1 justify-between items-center">
          <div className="w-full flex justify-center flex-col items-center">
            <h3 className="code code font-medium text-tech-blue text-lg text-center  ">What's Next?</h3>
            <h1 className="font-[700] lg:text-[3.2rem] sm:text-[2.3rem] text-center">Get In Touch</h1>
            <p className="text-slate-300 lg:w-[60%] sm:w-full text-center mt-4 lg:text-base sm:text-sm ">I am open to work on web projects for both frontend and backend development. Send me a message and let's begin!</p>
            <button className="code btn-main  px-[20px] py-[15px] bg-tech-purple mt-12 ">
              <a href= " mailto:ovieighosuakpo@gmail.com "> Say Hello </a>
            </button> 
          </div>
      </section>

      <Footer />
    </div>
   
    </Router>
  );
}

export default App;
