
import { AiOutlinePlus } from 'react-icons/ai';
import { sun } from '../assets/shapes';

const Mockup = () =>{
    return(
        <div className="flex flex-col gap-4 w-11/12 sm:w-10/12 font-serif 
        text-white items-center z-20 text-center" >
            <h1 className="relative font-extrabold text-5xl tracking-wider uppercase">
                <span className="text-blue font-bold tracking-wide text-4xl ">
                    hello!
                </span> <br />
                you're <br />
                now part <br />
                <span className="text-blue font-bold tracking-wide text-4xl ">
                    of our team
                </span>
                <AiOutlinePlus size={30}
                className='absolute text-blue top-[30%] right-[5%]'/>
                <img src={sun} alt="sun" 
                className='absolute top-[10%] w-6 h-6 left-0'/>
            </h1>
            <p className="tracking-wide font-normal text-base relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nulla fuga aut sint perferendis alias, itaque incidunt reprehenderit 
                ducimus et tempore sequi! Ab, maiores 
                possimus mollitia odit aliquid quisquam deleniti. Velit?
                <img src={sun} alt="sun" 
                className='absolute top-0 w-8 h-8 -left-8'/>
                <img src={sun} alt="sun" 
                className='absolute right-0 w-4 h-4'/>
            </p>
            <button className="tracking-wider bg-[#46a1c5] uppercase w-40 py-3 
            rounded-sm font-bold text-lg cursor-pointer">
                get started
            </button>
        </div>
    )
}

export default Mockup;
