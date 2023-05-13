import Image from "next/image";
import React from "react";

const skills = ()=>{

    return (
        <div id="skills" className="w-full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-ceter h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5] ">skills</p>
                <h2 className="py-4">what I can do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 justify-center items-center">
                            <div className="m-auto">
                                <Image src="" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 justify-center items-center">
                            <div className="m-auto">
                                <Image src="" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 justify-center items-center">
                            <div className="m-auto">
                                <Image src="" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JAVASCRIPT</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 justify-center items-center">
                            <div className="m-auto">
                                <Image src="" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>TAILWIND</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 justify-center items-center">
                            <div className="m-auto">
                                <Image src="" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>REACT</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 justify-center items-center">
                            <div className="m-auto">
                                <Image src="" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>RUBY</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 justify-center items-center">
                            <div className="m-auto">
                                <Image src="" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>RUBY ON RAILS</h3>
                            </div>
                        </div>
                    </div>
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 justify-center items-center">
                            <div className="m-auto">
                                <Image src="" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>SQL</h3>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 justify-center items-center">
                            <div className="m-auto">
                                <Image src="" alt="/" width="64" height="64"/>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Github</h3>
                            </div>
                        </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )

}

export default skills;