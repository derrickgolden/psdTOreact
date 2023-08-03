
import { AiOutlineInstagram, AiOutlineFacebook, AiOutlineTwitter, AiOutlineWhatsApp } from 'react-icons/ai'

const Footer = () =>{
    return(
        <div className="w-full h-full flex flex-row justify-start items-end
        gap-2 pb-4 pl-8">
            <div className='bg-white rounded-full p-1 cursor-pointer 
            text-blue-500 hover:text-blue'>
                <AiOutlineInstagram />    
            </div>
            <div className='bg-white rounded-full p-1 cursor-pointer 
            text-blue-500 hover:text-blue'>
                <AiOutlineFacebook />
            </div>
            <div className='bg-white rounded-full p-1 cursor-pointer 
            text-blue-500 hover:text-blue'>
                <AiOutlineTwitter />
            </div>
            <div className='bg-white rounded-full p-1 cursor-pointer 
            text-blue-500 hover:text-blue'>
                <AiOutlineWhatsApp />
            </div>
        </div>
    )
}

export default Footer;