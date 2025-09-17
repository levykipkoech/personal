import Image from "next/image";
import React from "react";
import cssImg from "../../utils/css.png";
//import githubImg from '../../utils/github1.png'
import htmlImg from "../../utils/html.png";
import javascriptImg from "../../utils/javascript.png";
import nextImg from "../../utils/nextjs.png";
import reactImg from "../../utils/react.png";
import tailwindImg from "../../utils/tailwind.png";
import angular from "../../utils/angular.png";

export default function Skills() {
  return (
    <div id="skills" className="p-2">
      <div className="mx-auto flex flex-col justify-ceter">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
          skills
        </p>
        <h2 className="py-4">Technologies</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ml-4">
          <div className="intersect:motion-preset-slide-right intersect:motion-duration-500 group flex items-center p-3 shadow-sm rounded-xl intersect:shadow-orange-400 hover:shadow-orange-400 hover:scale-95 ease-in duration-300 ">
            <Image
              className="m-auto"
              src={htmlImg}
              alt="hypertext markup language logo"
              width="64"
              height="64"
            />
            <h3 className="max-h-0 md:overflow-hidden group-hover:max-h-40 transition-all duration-300 text-orange-400">
              HTML
            </h3>
          </div>

          <div className="intersect:motion-preset-slide-down intersect:motion-duration-500 group flex items-center p-3 shadow-sm rounded-xl intersect:shadow-[#2965f1] md:hover:shadow-[#2965f1] hover:scale-95 ease-in duration-300 ">
            <Image
              className="m-auto"
              src={cssImg}
              alt="cascading style sheet logo"
              width="64"
              height="64"
            />

            <h3 className="max-h-0 md:overflow-hidden group-hover:max-h-40 transition-all duration-300 text-[#2965f1]">
              CSS
            </h3>
          </div>
          <div className="intersect:motion-preset-slide-left intersect:motion-duration-500 group flex items-center p-3 shadow-sm rounded-xl intersect:shadow-yellow-400 md:hover:shadow-yellow-400 hover:scale-95 ease-in duration-300 ">
            <Image
              className="m-auto"
              src={javascriptImg}
              alt="javascript logo"
              width="64"
              height="64"
            />

            <h3 className="max-h-0 md:overflow-hidden group-hover:max-h-40 transition-all duration-300 text-yellow-400">
              Javascript
            </h3>
          </div>
          <div className="intersect:motion-preset-slide-right intersect:motion-duration-500 group flex items-center p-3 shadow-sm rounded-xl shadow-[#82acf0] md:hover:shadow-[#82acf0] hover:scale-95 ease-in duration-300 ">
            <Image
              className="m-auto"
              src={tailwindImg}
              alt="/"
              width="tailwind logo"
              height="64"
            />

            <h3 className=" max-h-0 md:overflow-hidden group-hover:max-h-40 transition-all duration-300 text-[#3B71CA]">
              Tailwind
            </h3>
          </div>
          <div className="intersect:motion-preset-slide-up intersect:motion-duration-500 group flex items-center p-3 shadow-sm rounded-xl intersect:shadow-[#61DAFB] md:hover:shadow-[#61DAFB] hover:scale-95 ease-in duration-300 ">
            <Image
              className="m-auto"
              src={reactImg}
              alt="react logo"
              width="64"
              height="64"
            />

            <h3 className="max-h-0 md:overflow-hidden group-hover:max-h-40 transition-all duration-300 text-[#61DAFB]">
              React
            </h3>
          </div>

          <div className="intersect:motion-preset-slide-left intersect:motion-duration-600 group flex items-center p-3 shadow-sm rounded-xl intersect:shadow-gray-400 md:hover:shadow-gray-400 hover:scale-95 ease-in duration-300 ">
            <Image
              src={nextImg}
              alt="next js logo"
              width="64"
              height="64"
              className="bg-white m-auto"
            />

            <h3 className=" max-h-0 md:overflow-hidden md:group-hover:max-h-40 transition-all duration-300">
              Nextjs
            </h3>
          </div>
          <div className="intersect:motion-preset-slide-up intersect:motion-duration-500 group flex items-center p-3 shadow-sm rounded-xl intersect:shadow-red-400 md:hover:shadow-red-400 hover:scale-95 ease-in duration-300 ">
            <Image
              className="m-auto"
              src={angular}
              alt="react logo"
              width="64"
              height="64"
            />

            <h3 className="max-h-0 md:overflow-hidden group-hover:max-h-40 transition-all duration-300 text-[#ef3737]">
              Angular
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
