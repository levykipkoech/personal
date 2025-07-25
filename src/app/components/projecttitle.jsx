import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProjectTitle({ title, backgroundImg, projectUrl }){
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-lg hover:shadow-gray-500 rounded-xl p-4 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]">
      <Image
        className="rounded-xl group-hover:opacity-10"
        src={backgroundImg}
        alt="screenshot of moodapp"
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center ">sample</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-600 font-bold text-lg cursor-pointer">
            more info
          </p>
        </Link>
      </div>
    </div>
  );
};


