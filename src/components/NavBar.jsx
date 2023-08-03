
import { useState } from 'react'

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const NavBar  = () =>{
    const [isOpen, setIsOPen] = useState(true)
    const handleToggleMenu = () =>{
        console.log(isOpen)
        setIsOPen(!isOpen)
    }
    return(
    <div className=' w-[73%] absolute  sm:right-[17%] z-30 md:right-[14%] pt-4 md:pt-0'>
        <div onClick={() =>{handleToggleMenu()}}
            className="md:hidden text-white text-3xl cursor-pointer h-fit 
            flex justify-end">
                {isOpen? <AiOutlineClose className="text-3xl"/>
                : <AiOutlineMenu className="text-3xl"/>}
        </div>
        <div className={`${isOpen? "grid-rows-1 " : "grid-rows-0 "} md:grid-rows-1 h-fit 
        grid overflow-hidden transition-gridRow duration-1000 md:pt-5 w-[100%] md:justify-end
        md:p-4`}>  
            <nav className={`${isOpen? "visible " : "invisible "} md:visible bg-[#46a1c5] md:bg-transparent px-6 md:px-0
            min-h-0 transition-visibility duration-1000 md:flex flex-row gap-4 font-serif w-full
            rounded-md`}>
                <li className="text-lg md:text-2xl text-white font-normal hover:font-bold 
                cursor-pointer list-none uppercase h-fit py-4 md:py-0" >
                    home
                </li>
                <li className="text-lg md:text-2xl text-white font-normal hover:font-bold 
                cursor-pointer list-none uppercase h-fit pb-4 md:pb-0">
                    about
                </li>
                <li className="text-lg md:text-2xl text-white font-normal hover:font-bold 
                cursor-pointer list-none uppercase h-fit pb-4 md:pb-0">
                    campaign
                </li>
                <li className="text-lg md:text-2xl text-white font-normal hover:font-bold 
                cursor-pointer list-none uppercase h-fit pb-8 md:pb-0" >
                    contact
                </li>
            </nav>
        </div>
    </div>
    )
}

export default NavBar
