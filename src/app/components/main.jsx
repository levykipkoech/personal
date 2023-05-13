import React from "react";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {AiOutlineMail} from "react-icons/ai"

const Main = () =>{
    return(
       <div id="main" className="w-full h-screen text-center">
        <div className="max-w-[1240px w-full h-full mx-auto p-2 flex justify-center items-center">
            <div>
                <p className="uppercase text-sm tracking-widest text-gray-600">LET'S BUILD SOMETHING</p>
                <h1 className="py-4 text-gray-700">Hey I'm <span className="text-[#5651e5]">Levy</span></h1>
                <h1 className="py-2 text-gray-700">A software developer</h1>
                <p className="py-4 text-gray-600 max-w-[70%] m-auto">
                    As a recent software developer graduate with passion for software development, I am
                    seeking a software developer position that will allow me to apply my skills and knowledge
                    to contribute to the development of cutting-edge software solutions. I am a quick learner,
                    detail-oriented, and committed to delivering high-quality code.
                </p>
                <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                    <a
                     href='https://www.linkedin.com/in/levy-kipkoech-21a736269/'
                     target='_blank'
                     rel='noreferrer'
                    
                    >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaLinkedinIn/>
                    </div>

                    </a>
                    <a
                    href='https://github.com/levykipkoech'
                    target='_blank'
                    rel='noreferrer'
                    >
                    <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                        <FaGithub/>
                    </div>
                    </a>
                   <a 
                     href='mailto:kipkoechlevy096@gmail.com'
                     target='_blank'
                     rel='noreferrer'
                   >
                   <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                        <AiOutlineMail/>
                    </div>
                   </a>
                    
                   <a
                    href='phoneto:0115483048'
                    target='_blank'
                    rel='noreferrer'
                   >
                   <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-300">
                        <BsFillPersonLinesFill/>
                    </div>
                   </a>
                    

                </div>
            </div>
        </div>
       </div>
    )
}


export default Main;