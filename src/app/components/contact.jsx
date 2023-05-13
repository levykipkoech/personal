import React from "react";
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';
import {AiOutlineMail} from "react-icons/ai"
import {HiOutlineChevronDoubleUp} from "react-icons/hi" 
import Link from "next/link";
import setupImg from "./setup.jpg"
import Image from "next/image";
const Contact =()=>{

    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className="mx-w-[1240px] m-auto px-2 py-16 w-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">Contact</p>
                <h2 className="py-4">Get in touch </h2>
                <div className="grid lg:grid-cols-5 gap-8 ">
                    <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
                        <div className="lg:p-g h-full">
                            <div className="mx-w-[1240px]">
                                <Image className="rounded-xl object-cover h-48  hover:scale-105  ease-in duration-300" src={setupImg} alt="/"/>
                            </div>
                            <div>
                                <h2 className="py-2 ">Levy</h2>
                                <p>Full stack developer</p>
                                <p className="py-4">I am available to freelance or full time position. Let's talk</p>
                            </div>
                            <div>
                            <p className="uppercase">contact with me</p>
                            <div className="flex items-center py-4 ">
                                <a
                                href='https://www.linkedin.com/in/levy-kipkoech-21a736269/'
                                target='_blank'
                                rel='noreferrer'
                                >
                                <div className="rounded-full shadow-lg shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaLinkedinIn/>
                                </div>
                                </a>
                               <a 
                               href='https://github.com/levykipkoech'
                               target='_blank'
                               rel='noreferrer'
                               >
                               <div className="rounded-full shadow-lg shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub/>
                                </div>
                               </a>
                                
                               <a
                                 href='mailto:kipkoechlevy096@gmail.com'
                                 target='_blank'
                                 rel='noreferrer'
                               >
                               <div className="rounded-full shadow-lg shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <AiOutlineMail/>
                                </div>
                               </a>

                               <a
                                 href='phoneto:0115483048'
                                 target='_blank'
                                 rel='noreferrer'
                               >
                                <div className="rounded-full shadow-lg shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
                                        <BsFillPersonLinesFill/>
                                </div>
                               </a>
                                
                            </div>
                        </div>
                        </div>
                       
                    </div>
                     <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
                        <div className="p-4">
                            <form>
                                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">name</label>
                                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="uppercase text-sm py-2">phone number</label>
                                        <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />
                                    </div>
                                </div>
                                <div className="flex flex-col py-2">
                                   <label className="uppercase text-sm py-2">email</label>
                                   <input className="border-2 rounded-lg p-3 flex border-gray-300" type="email" />                           
                                </div>
                                <div className="flex flex-col py-2">
                                   <label className="uppercase text-sm py-2">subject</label>
                                   <input className="border-2 rounded-lg p-3 flex border-gray-300" type="text" />                           
                                </div>
                                <div className="flex flex-col py-2">
                                   <label className="uppercase text-sm py-2">message</label>
                                   <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="5"></textarea>                           
                                </div>
                                <button className="uppercase p-3 text-gray-100 w-full">submit</button>
                            </form>
                        </div>
                     </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
                            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30}/>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Contact;