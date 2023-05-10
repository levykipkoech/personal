"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import {AiOutlineClose, AiOutlineMenu, AiOutlineMail} from "react-icons/ai"
import {FaGithub, FaLinkedinIn} from "react-icons/fa";
import { BsFillPersonLinesFill } from 'react-icons/bs';

const Navbar =()=>{

    const [nav, setNav] = useState(false);

    const handleNav=()=>{
        setNav(true);
    }
    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            <div className=" flex justify-between items-center w-full h-full px-2 2xl:px-16">
              <Image src="" alt="" height="125" width="35"/>
              <div>
                <ul className="hidden md:flex" >
                <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/'>Home</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/#about'>About</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/#skills'>Skills</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/#projects'>Projects</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/resume'>Resume</Link>
                </li>
                <li className='ml-10 text-sm uppercase hover:border-b'>
                <Link href='/#contact'>Contact</Link>
                </li>
                </ul>

                <div onClick={handleNav} className="md:hidden">
                    <AiOutlineMenu size={25}/>
                    
                </div>
            </div>
            </div>
            <div className={nav ? 'fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
              <div className={nav ? "fixed left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500": "fixed left-[-100%] w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] ease-in duration-500"}>
                <div>
                    <div className="flex w-full items-center justify-between">
                        <Image src= "" alt="" width="87" height="35" />
                        <div onClick={handleNav} className="rounded-full shadow-lg shadow-gray-400 p-3 m-3 cursor-pointer">
                          <AiOutlineClose/>
                        </div>
                    </div>

                    <div className="border-b border-gray-300 m-4 ">
                        <p className="w-[85%] md:w-[90%] p-4">
                            Time to build 
                        </p>
                    </div>
                </div>
                <div className="p-4 flex flex-col">
                    <ul className="uppercase">
                        <Link href="">
                            <li className="p-4 text-sm">Home</li>
                        </Link>
                        <Link href="">
                            <li className="p-4 text-sm">About</li>
                        </Link>
                        <Link href="">
                            <li className="p-4 text-sm">Projects</li>
                        </Link>
                        <Link href="">
                            <li className="p-4 text-sm">Skills</li>
                        </Link>
                        <Link href="">
                            <li className="p-4 text-sm">Contact</li>
                        </Link>
                    </ul>
                    <div className="pt-40">
                        <p className="uppercase tracking-widest text-[#5651e5]">let's connect</p>
                        <div className="flex items-center justify-between m-4 w-full sm:w-[80%]">
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in diration-100">
                            <FaLinkedinIn/>
                            </div> 
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in diration-100">
                            <FaGithub />
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in diration-100">
                            <AiOutlineMail />
                            </div>
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in diration-100">
                            <BsFillPersonLinesFill />

                            </div>
                            
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>
    )

}
export default Navbar;