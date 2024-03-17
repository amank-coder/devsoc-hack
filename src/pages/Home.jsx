import React from 'react'
import {motion} from 'framer-motion'
import {fadeIn} from '../components/variants'

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-[#04016C] to-blue-[#4A16BD]">
      <header className="">
        <div className="px-4 mx-auto sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <div className="flex-shrink-0">
              <a href="#" title="" className="flex">
                <h2 className="text-3xl font-extrabold tracking-widest font-sans-serif text-white">
                  Academia
                </h2>
              </a>
            </div>
            <button
              type="button"
              className="inline-flex p-1 text-black transition-all duration-200 border border-black lg:hidden focus:bg-gray-100 hover:bg-gray-100"
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
                className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"
              >
                Home
              </a>
              <a
                href="/dashboard"
                title=""
                className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"
              >
                Dashboard
              </a>
              <a
                href="#"
                title=""
                className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"
              >
                About
              </a>
              <a
                href="#"
                title=""
                className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"
              >
                Team
              </a>
              <div className="w-px h-5 bg-black/20"></div>
              <a
                href="/sign-in"
                title=""
                className="text-base font-semibold text-white transition-all duration-200 hover:text-opacity-80"
              >
                Login
              </a>
              <a
                href="#"
                title=""
                className="inline-flex items-center justify-center px-5 py-2.5 text-base font-semibold text-white border-2 border-black hover:bg-black hover:text-white transition-all duration-200 focus:bg-black focus:text-white"
                role="button"
              >
                Register
              </a>
            </div>
          </div>
        </div>
      </header>
      <section className="py-10 sm:py-16 lg:py-24">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <motion.h1 variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount:0.7}} className="text-4xl font-bold text-white sm:text-6xl lg:text-5xl">
              Empowering Education, Anywhere, Anytime
                <div className="relative inline-flex">
                  <span className="absolute inset-x-0 bottom-0"></span>
                  <h1 className="relative text-4xl font-bold bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 sm:text-6xl lg:text-5xl px-2 mt-2">
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
                <a
                  href="#"
                  title=""
                  className="inline-flex items-center mt-6 text-base font-semibold transition-all duration-200 sm:mt-0 hover:opacity-80"
                >
                  <svg
                    className="w-10 h-10 mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      fill="#F97316"
                      stroke="#F97316"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  Watch video
                </a>
              </div>
            </div>
            <div className="flex justify-center md:justify-end">
              <img
                className="w-[70%]"
                src="https://freepngimg.com/thumb/girl/168680-woman-young-free-clipart-hd.png"
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
                  <img src="/react.png" alt="" className="hover:scale-105 cursor-pointer"/>
                  </div>
                </div>
                <div className="bg-red-100 h-36 w-36 rounded-md p-6">
                  <div className="rounded-full bg-white shadow-lg">
                  <img src="/pytorch.png" alt="" className="hover:scale-105 cursor-pointer"/>
                  </div>
                </div>
                <div className="bg-orange-100 h-36 w-36 rounded-md p-6 mx-0">
                  <div className="rounded-full bg-white shadow-lg">
                  <img src="/react.png" alt="" className="hover:scale-105 cursor-pointer"/>
                  </div>
                </div>
      </div>
      <div className="bg-white px-16 pt-24 font-semibold text-2xl text-center ">Our Services </div>
      <div className="flex flex-col md:flex-row gap-4 bg-white justify-between px-12 pt-8">
                {/* <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer">
                  <img src="/v1.png" />
                </div>
                <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer">
                  <img src="/v2.png" />
                </div>
                <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer">
                  <a href="/browse/clsw3xffg04ku07obojcgyagu/Gravitation"><img src="/v7.png" /></a>
                </div>
                <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer">
                  <img src="/v4.png" />
                </div> */}
                <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer">
                  
                </div>
                <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer">
                  
                </div>
                <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer">
                  
                </div>
                <div className="shadow-lg hover:scale-105 hover:shadow-blue-500 cursor-pointer">
                  
                </div>
          
      </div>
      
      <div className="h-full md:h-72 bg-gradient-to-br from-[#331DAB] to-[#865AEF] -ml-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-8 text-white pl-16">
                <div>
                  <div>
                    <p className="font-bold text-2xl mb-4 mx-auto text-center">Academia</p>
                    <p className="text-center">Your Gateway to Knowledge and Growth. Discover a world of comprehensive learning resources, expert guidance, and innovative tools designed to empower students and professionals alike on their educational journey.</p>
                  </div>
                </div>
                <div className="md:pl-8">
                  <h1 className="font-bold text-center">Quick Links</h1>
                  <div className="grid grid-cols-2 mt-4 text-center">
                    <div>Home</div>
                    <div>About us</div>
                    <div className="mt-4">Recommender</div>
                    <div className="mt-4">Courses</div>
                  </div>
                </div>
                <div>
                  <h1 className="font-bold mb-4 text-center">Contact us</h1>
                  <p className="text-center">
                    +91 9876543210
                  </p>
                  <p className="mt-2 text-center">aiguru@gmail.com</p>
                </div>
        </div>
      </div>

    </div>
  )
}

export default Home