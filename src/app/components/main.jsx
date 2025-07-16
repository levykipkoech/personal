import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiWhatsapp } from "react-icons/si";
import { AiOutlineMail } from "react-icons/ai";

export default function Main() {
  return (
    <div className="text-center pt-20 items-center">
      <p
       
        className="uppercase text-sm tracking-widest text-gray-600"
      >
        LET&apos;S BUILD SOMETHING
      </p>
      <h1  className=" py-4 overflow-hidden whitespace-nowrap border-r-2 border-gray-500 animate-typing">
        Hey I&apos;m <span className="text-[#5651e5]">Levy</span>
      </h1>
      <h1 className="py-2 ">A web developer</h1>
      <p className="py-4 max-w-[70%] m-auto motion-preset-slide-right  ">
        I am software engineer graduate with passion for software engineering. I
        am seeking a software engineering position that will allow me to apply
        my skills and knowledge to contribute to the development of cutting edge
        software solutions. I am a quick learner, detail-oriented, and committed
        to delivering high-quality code.
      </p>
      <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
        <a
          href="https://www.linkedin.com/in/levy-kipkoech-21a736269/"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg hover:shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-100">
            <FaLinkedinIn />
          </div>
        </a>
        <a
          href="https://github.com/levykipkoech"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg hover:shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-100">
            <FaGithub />
          </div>
        </a>
        <a
          href="mailto:kipkoechlevy096@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <div className="rounded-full shadow-lg hover:shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-100">
            <AiOutlineMail />
          </div>
        </a>

        <a href="https://wa.me/254115483048" target="_blank" rel="noreferrer">
          <div className="rounded-full shadow-lg hover:shadow-gray-400 p-5 cursor-pointer hover:scale-105 ease-in duration-100">
            <SiWhatsapp />
          </div>
        </a>
      </div>
    </div>
  );
}
