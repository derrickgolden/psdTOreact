import { useState } from 'react'
import './App.css'

import { mockupBackground } from './assets/shapes'

import NavBar from './components/NavBar'
import Mockup from './components/Mockup'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { logo } from './assets/shapes'

function App() {

  return (
    <div className='w-full min-h-screen bg-mockUp bg-contain bg-no-repeat'>
      <div className=' bg-topdownLine -z-0 min-h-screen 
         bg-contain bg-no-repeat'>
      <div className='flex flex-row z-20 gap-4 justify-between'>
        <div className='w-[24%] h-20 sm:h-auto sm:w-[16%] md:w-[14%] z-10 justify-start 
        bg-logoShape bg-cover bg-center bg-no-repeat '>
          <img src={logo} alt="logo" 
          className='overflow-hidden object-contain'/>
        </div>
        <NavBar />
        <div className='w-[24%] h-20 sm:h-auto sm:w-[16%] md:w-[14%]  uppercase relative 
        bg-signUpShape bg-cover bg-center bg-no-repeat'>
          <button className='absolute top-5 text-white left-0 right-0  
          text-lg md:text-2xl font-normal hover:font-bold text-
          cursor-pointer uppercase'>sign up</button>
        </div>
      </div>
      <div className='flex flex-col-reverse md:flex-row gap-20 md:gap-4 pb-8 md:pb-1
      place-items-start border border-red-600'> 
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <Mockup/>
        </div>
        <div className='w-full md:w-1/2 lg:w-5/12 flex justify-center items-center '>
          <Hero />
        </div>
      </div>
      <div className='md:absolute bottom-0 bg-socialShape bg-cover w-full 
      sm:w-[50%] md:w-[30%] lg:w-[21%] h-32'>
        <Footer />
      </div>
      </div>
    </div>
  )
}

export default App
