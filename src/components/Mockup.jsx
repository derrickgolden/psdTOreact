
const Mockup = () =>{
    return(
        <div className="flex flex-col gap-4 w-11/12 sm:w-10/12 font-serif 
        text-white items-center z-20 text-center" >
            <h1 className="font-extrabold text-5xl tracking-wider uppercase">
                <span className="text-blue font-bold tracking-wide text-4xl ">
                    hello!
                </span> <br />
                you're <br />
                now part <br />
                <span className="text-blue font-bold tracking-wide text-4xl ">
                    of our team
                </span>
            </h1>
            <p className="tracking-wide font-normal text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Nulla fuga aut sint perferendis alias, itaque incidunt reprehenderit 
                ducimus et tempore sequi! Ab, maiores 
                possimus mollitia odit aliquid quisquam deleniti. Velit?</p>
            <button className="tracking-wider bg-[#46a1c5] uppercase w-40 py-3 
            rounded-sm font-bold text-lg cursor-pointer">
                get started
            </button>
        </div>
    )
}

export default Mockup;
