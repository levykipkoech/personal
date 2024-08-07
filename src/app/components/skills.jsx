import Image from 'next/image';
import React from 'react';
import cssImg from './css.png';
import githubImg from './github1.png';
import htmlImg from './html.png';
import javascriptImg from './javascript.png';
import nextImg from './nextjs.png';
import reactImg from './react.png';
import tailwindImg from './tailwind.png';

const skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-ceter h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5] ">
          skills
        </p>
        <h2 className="py-4">what I can do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image src={htmlImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image src={cssImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image src={javascriptImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Javascript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image src={tailwindImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image src={reactImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/73/Ruby_logo.svg"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>RUBY</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/6/62/Ruby_On_Rails_Logo.svg"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>RUBY ON RAILS</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.svg"
                  alt="/"
                  width="64"
                  height="64"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image src={nextImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nextjs</h3>
              </div>
            </div>
          </div>

          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image src={githubImg} alt="/" width="64" height="64" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default skills;
