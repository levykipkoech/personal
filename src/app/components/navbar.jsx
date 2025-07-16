"use client";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
// import { BsFillPersonLinesFill } from 'react-icons/bs';
import { SiWhatsapp } from "react-icons/si";
import cover from "../../utils/cover.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY > 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
    console.log(handleShadow);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div
      className={
        shadow
          ? "fixed w-full  h-fit shadow-xl shadow-gray-500 z-[100] bg-black"
          : "fixed w-full h-fit items-center z-[100] bg-black"
      }
    >
      <div className=" flex justify-between items-center p-3">
        <Link href="/#main">
          <Image
            className="rounded-3xl motion-preset-seesaw "
            src={cover}
            alt="/"
            height="150"
            width="100"
          />
        </Link>

        <div>
          <ul className="hidden md:flex">
            <Link href="/#main">
              <li className="ml-10 text-sm uppercase hover:underline">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:underline ">
                About
              </li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:underline ">
                Skills
              </li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:underline ">
                Projects
              </li>
            </Link>
            {/* <Link href="">
              <li className="ml-10 text-sm uppercase hover:border-b">Resume</li>
            </Link> */}
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:underline ">
                Contact
              </li>
            </Link>
          </ul>

          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-black ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link className="rounded-md" href="/#main">
                <Image
                  className="rounded-2xl p-2"
                  src={cover}
                  alt="logo"
                  width="120"
                  height="75"
                />
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-800 p-3 m-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>

            <div className="border-b border-gray-300 m-4 ">
              <p className="w-[85%] md:w-[90%] p-4">Time to build</p>
            </div>
          </div>
          <div className="p-4 flex flex-col ">
            <ul className="uppercase ">
              <Link href="/#main">
                <li
                  onClick={() => setNav(false)}
                  className="p-4 text-sm hover hover:underline"
                >
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li
                  onClick={() => setNav(false)}
                  className="p-4 text-sm hover:underline "
                >
                  About
                </li>
              </Link>
              <Link href="/#projects">
                <li
                  onClick={() => setNav(false)}
                  className="p-4 text-sm hover:underline "
                >
                  Projects
                </li>
              </Link>
              <Link href="/#skills">
                <li
                  onClick={() => setNav(false)}
                  className="p-4 text-sm hover:underline "
                >
                  Skills
                </li>
              </Link>
              <Link href="/#contact">
                <li
                  onClick={() => setNav(false)}
                  className="p-4 text-sm hover:underline "
                >
                  Contact
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                let&apos;s connect
              </p>
              <div className="flex items-center justify-between m-4 w-full sm:w-[80%]">
                <a
                  href="https://www.linkedin.com/in/levy-kipkoech-21a736269/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in diration-100">
                    <FaLinkedinIn />
                  </div>
                </a>

                <a
                  href="https://github.com/levykipkoech"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in diration-100">
                    <FaGithub />
                  </div>
                </a>

                <a
                  href="mailto:kipkoechlevy096@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in diration-100">
                    <AiOutlineMail />
                  </div>
                </a>
                <a
                  href="https://wa.me/qr/UI5MFXWWWIT3K1"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in diration-100">
                    <SiWhatsapp />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
