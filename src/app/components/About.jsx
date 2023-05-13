import React from "react";

const About =()=> {
    return(
        <div id="about" className="w-full md:h-screen p-4 py-16 items-center">
            <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
                <div className="col-span-2">
                    <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5] ">ABOUT</p>
                    <h2 className="py-4">Who I Am</h2>
                    <p className="py-2 text-gray-600">remember to put some text here</p>
                    <p className="py-2 text-gray-600">and here</p>
                    <p className="py-2 text-gray-600 underline cursor-pointer" >amd here</p>
                </div>
                <div className="w-full h-auto m-auto shadoy-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
                    <img className="rounded-xl" src="" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default About;