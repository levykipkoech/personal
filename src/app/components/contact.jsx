import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import { AiOutlineMail } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import setupImg from "../../utils/setup.jpg";
import Image from "next/image";

export default function Contact() {
  return (
    <div id="contact" className="m-auto px-2 py-16 max-w-screen ">
      <p className="text-xl tracking-widest uppercase text-[#5651e5]">
        Contact
      </p>
      <h2 className="py-4">Get in touch </h2>

      <div className="grid gap-8 lg:p-5 col-span-3 lg:col-span-2 rounded-xl p-4 justify-items-center">
        <div className="w-fit">
          <Image
            className="rounded-xl object-cover h-48  hover:scale-105  ease-in duration-300"
            src={setupImg}
            alt="/"
          />
        </div>
        <div className="text-center">
          <h2 className="py-2 ">Levy</h2>
          <p>Web developer</p>
          <p className="py-4">
            I am available to freelance or full time position. let&apos;s talk
          </p>
        </div>

        {/* <p className="uppercase">contact me:kipkoechlevy096@gmail.com</p> */}
        <div className="flex items-center justify-between m-auto py-4">
          <a
            href="https://www.linkedin.com/in/levy-kipkoech-21a736269/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaLinkedinIn />
            </div>
          </a>
          <a
            href="https://github.com/levykipkoech"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
              <FaGithub />
            </div>
          </a>

          <a
            href="mailto:kipkoechlevy096@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
              <AiOutlineMail />
            </div>
          </a>

          <a
            href="https://wa.me/qr/UI5MFXWWWIT3K1"
            target="_blank"
            rel="noreferrer"
          >
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 m-2 cursor-pointer hover:scale-105 ease-in duration-300">
              <SiWhatsapp />
            </div>
          </a>
        </div>
      </div>

      <div className="flex justify-center py-12">
        <Link href="/#main">
          <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300">
            <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
          </div>
        </Link>
      </div>
    </div>
  );
}
