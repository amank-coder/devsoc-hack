import React, { useState, useEffect } from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'
import MobileSide from '../components/MobileSide'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const user = JSON.parse(localStorage.getItem('user'))
  console.log(user)
  const [show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
        // Remove the loader after 2 seconds
        setShow(false);
    }, 3000); // 2000 milliseconds = 2 seconds

    return () => clearTimeout(timer);
}, []);

  
  return (
    <div className="">
    {/* {show && (<div className="fixed h-screen w-screen load-container z-40 duration-500 ease-in-out">
      <video autoPlay muted loop className="loader-video">
            <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>)} */}
        <MobileSide isOpen={isOpen}/>
      <div className={`${isOpen ? 'absolute top-4 right-4 text-white z-40':'hidden'}`} onClick={()=>setIsOpen(false)}>X</div>
      <div className='flex flex-col items-center'>
  <header className="mx-auto bg-white rounded-lg fixed mt-4 shadow-md hidden md:block z-40">
    <div className="px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16 lg:h-20">
        <div className="flex-shrink-0 mr-72 px-4">
          <a href="#" title="" className="flex">
            <h2 className="text-3xl font-extrabold ">
              Academia
            </h2>
          </a>
        </div>
        <button
          type="button"
          className="inline-flex p-1 text-white transition-all duration-200 border border-white lg:hidden focus:bg-gray-100 hover:bg-gray-100"
          onClick={()=>setIsOpen(!isOpen)}
        >
          <svg
            className="block w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          <svg
            className="hidden w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <div className="hidden ml-auto lg:flex lg:items-center lg:justify-center lg:space-x-10">
          <a
            href="#"
            title=""
            className="text-base font-semibold  transition-all duration-200 hover:text-opacity-80"
          >
            Home
          </a>
          <a
            href="/dashboard"
            title=""
            className="text-base font-semibold transition-all duration-200 hover:text-opacity-80"
          >
            Dashboard
          </a>
          <a
            href="#"
            title=""
            className="text-base font-semibold transition-all duration-200 hover:text-opacity-80"
          >
            About
          </a>
          <a
            href="#"
            title=""
            className="text-base font-semibold transition-all duration-200 hover:text-opacity-80"
          >
            Team
          </a>
          <div className={`${user ? 'hidden' : 'w-px h-5 bg-black/20'}`}></div>
          <a
            href="/login"
            title=""
            className={`${user ? 'hidden' : 'text-base font-semibold transition-all duration-200 hover:text-opacity-80'}`}
          >
            Login
          </a>
          <a
            href="#"
            title=""
            className={`${ user ? 'hidden' : 'inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white'}`}
            role="button"
          >
            Register
          </a>
        </div>
      </div>
    </div>
  </header>
</div>


      <section className="py-10 sm:py-16 lg:py-24 bg-blue-50">
        <div className="px-4 max-w-7xl sm:px-6 lg:px-8 mx-12">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <motion.h1 variants={fadeIn('up', 0.25)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className="text-4xl font-semibold sm:text-6xl lg:text-5xl">
              Empowering Education, Anytime, Anywhere
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0"></span>
                  <h1 className="relative text-4xl font-semibold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 sm:text-6xl lg:text-5xl px-2 mt-2">
                  Learn with AI
                  </h1>
                </div>
              </motion.h1>
              <p className="mt-8 text-base text-gray-400 sm:text-xl">
                Your Gateway to Knowledge and Growth. Discover a world of
                comprehensive learning resources, expert guidance, and
                innovative tools designed to empower students and professionals
                alike on their educational journey.
              </p>
              <div className="mt-10 flex items-center gap-5 md:gap-0 sm:flex sm:items-center sm:space-x-8">
                <a
                  href="/browse"
                  title=""
                  className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white transition-all duration-200 bg-gradient-to-r from-[#0000FF] to-[#4141F2] hover:text-blue-100 hover:relative hover:bottom-1"
                  role="button"
                >
                  Get Started
                </a>
                
              </div>
            </div>
            <div className="flex justify-center md:justify-end mt-12">
              <img
                className="w-[80%]"
                src="/learn.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-white grid grid-cols-2 xl:grid-cols-5 px-8 md:px-36 pt-8 space-y-4 md:space-y-0 mx-auto">
                <div className="bg-orange-100 h-36 w-36 rounded-md p-6">
                  <div className="rounded-full bg-white md:shadow-lg">
                  <img src="/react.png" alt="" className="hover:scale-105 cursor-pointer"/>
                  </div>
                </div>
                <div className="bg-green-100 h-36 w-36 rounded-md p-6">
                  <div className="rounded-full bg-white shadow-lg">
                  <img src="https://www.svgrepo.com/show/376318/flutter.svg" alt="" className="hover:scale-105 cursor-pointer"/>
                  </div>
                </div>
                <div className="bg-orange-100 h-36 w-36 rounded-md p-6 mx-0">
                  <div className="rounded-full bg-white shadow-lg">
                  <img src="/java.png" alt="" className="hover:scale-105 cursor-pointer"/>
                  </div>
                </div>
                <div className="bg-red-100 h-36 w-36 rounded-md p-6">
                  <div className="rounded-full bg-white shadow-lg">
                  <img src="/pytorch.png" alt="" className="hover:scale-105 cursor-pointer"/>
                  </div>
                </div>
                <div className="bg-orange-100 h-36 w-36 rounded-md p-6 mx-0">
                  <div className="rounded-full bg-white shadow-lg">
                  <img src="/cp.png" alt="" className="hover:scale-105 cursor-pointer"/>
                  </div>
                </div>
                
      </div>
      <div className="bg-white px-16 pt-24 font-semibold text-3xl text-center ">Our Services </div>
      <div className="flex flex-col md:flex-row gap-2 bg-white justify-between md:px-24 pt-8 pb-12">

      <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer rounded-md border-black p-2">
                  <img src='/worth.jpg' alt='service-1' className='w-72 mx-auto'/>
                  <p className='text-center font-semibold'>Course Worthiness</p>
                  <p className='w-56 text-center text-sm ml-8'>Know the worth of the course</p>
                </div>
                <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer rounded-md border-black p-2">
    <img src='/s1.jpg' alt='service-1' className='w-72 mx-auto'/>
    <p className='text-center font-semibold'>AI Tutor & Course Navigation</p>
    <p className='text-center w-56 text-sm ml-8'>AI-assisted smart doubt resolution</p>
  </div>
  <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer rounded-md border-black p-2">
    <img src='/multi.jpg' alt='service-1' className='w-72 mx-auto'/>
    <p className='text-center font-semibold'>Multi-lingual</p>
    <p className='w-56 text-center text-sm ml-8'>Supports course content in regional language</p>
  </div>

          
      </div>
      


      {/* <div className="bg-white px-16 pt-24 font-semibold text-2xl text-center ">How it works ? </div> */}
      <div className="flex flex-col md:flex-row gap-4 bg-white justify-between px-12 pt-8 pb-12">

                {/* <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer rounded-md border-black p-2">
                  <img src='/s1.jpg' alt='service-1' className='w-56 mx-auto'/>
                  <p className='text-center font-semibold'>AI Tutor</p>
                  <p className='text-center w-56 text-sm'>AI-assissted smart doubt resolution</p>
                </div>
                <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer rounded-md border-black p-2">
                  <img src='/s2.jpg' alt='service-1' className='w-56 mx-auto'/>
                  <p className='text-center font-semibold'>Price validation</p>
                  <p className='w-56 text-center text-sm'>Validate Course prices according to worthiness of course</p>
                </div>
                <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer rounded-md border-black p-2">
                  <img src='/s3.jpg' alt='service-1' className='w-56 mx-auto'/>
                  <p className='text-center font-semibold'>Course generator</p>
                  <p className='w-56 text-center text-sm'>AI curated personalized course</p>
                </div>
                <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer rounded-md border-black p-2">
                  <img src='/s1.jpg' alt='service-1' className='w-56 mx-auto'/>
                  <p className='text-center font-semibold'>Multi-lingual</p>
                  <p className='w-56 text-center text-sm'>Supports course content in regional language</p>
                </div> */}
          
      </div>
      
      <div className="h-full bg-gradient-to-br from-[#331DAB] to-[#865AEF] -ml-8">
      <div className="custom-shape-divider-top-1710665462">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
    </svg>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-white pl-16 pb-8">
                <div>
                  {/* <div>
                    <p className="font-bold text-2xl mb-4 mx-auto text-center">Academia</p>
                    <p className="text-left">Your Gateway to Knowledge and Growth. Discover a world of comprehensive learning resources, expert guidance, and innovative tools designed to empower students and professionals alike on their educational journey.</p>
                  </div> */}
                    <h2 className="font-bold text-center text-4xl flex items-center justify-between ml-6 mt-8">Academia</h2>
                </div>
                <div className="md:pl-8">
                  {/* <h1 className="font-bold text-center">Quick Links</h1> */}
                  <div className="grid grid-cols-2 mt-4 gap-16 text-left">
           
                    {/* <div>Home</div>
                    <div>About us</div>
                    <div className="mt-4">Recommender</div>
                    <div className="mt-4">Courses</div> */}
                    <div className='-ml-16'>
                      <h2 className='font-bold'>Services</h2>
                      <div className='mt-4'>AI Tutor</div>
                      <div className='py-2'>Learning path generator</div>
                      <div className='py-2'>Multi-lingual Support</div>
                    </div>
                    <div>
                      <h2 className='font-bold'>Company</h2>
                      <div className='mt-4'>About us</div>
                      <div className='py-2'>Policy</div>
                    </div>
                    
                  </div>
                </div>
                <div>
                  <h1 className="font-bold mb-4 text-center mt-6">Contact us</h1>
                  <p className="text-center">
                    +91 7667320067
                  </p>
                  <p className="mt-2 text-center">academia@gmail.com</p>
                </div>
        </div>
      </div>
      </div>

    </div>
  )
}

export default Home