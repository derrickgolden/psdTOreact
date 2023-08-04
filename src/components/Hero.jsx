
import { GoCircle } from 'react-icons/go'
import { sun } from '../assets/shapes'
import { AiOutlinePlus } from 'react-icons/ai'

const Hero = () =>{
    return(
        <>
            <div className="w-8/12 md:w-10/12 lg:w-7/12 bg-ringLine bg-cover bg-no-repeat 
            flex justify-between relative">
                <img src="../src/assets/shapes/heroImg.png" alt="" 
                className="h-auto p-4 z-20"/> 
                <div className='absolute w-2/5 h-2/5 bg-polygon bg-contain bg-no-repeat opacity-50
                -bottom-[6%] left-3/4 flex justify-between place-items-end text-blue'>
                    <GoCircle />
                    <GoCircle size={24}/>
                </div>
                <img src={sun} alt="sun" 
                className='absolute top-0 w-8 h-8 right-0'/>
                <AiOutlinePlus size={30}
                className='absolute text-blue bottom-[5%] left-[10%]'/>
            </div>
            <div className=" flex flex-col gap-4 w-4 self-center ">
                <pre className="bg-white p-1 sm:p-2 rounded-full w-2 hover:py-2 sm:hover:py-3"></pre>
                <pre className="bg-white p-1 sm:p-2 rounded-full w-2 hover:py-2 sm:hover:py-3"></pre>
                <pre className="bg-white p-1 sm:p-2 rounded-full w-2 hover:py-2 sm:hover:py-3"></pre>
                <pre className="bg-white p-1 sm:p-2 rounded-full w-2 hover:py-2 sm:hover:py-3"></pre>
                <pre className="bg-white p-1 sm:p-2 rounded-full w-2 hover:py-2 sm:hover:py-3"></pre>
                <pre className="bg-white p-1 sm:p-2 rounded-full w-2 hover:py-2 sm:hover:py-3"></pre>
            </div>
        </>
    )
}

export default Hero