import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div id="about" className="w-full p-4 py-16 items-center">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="py-4 uppercase text-xl tracking-widest text-[#5651e5] ">
            ABOUT
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 intersect:motion-preset-slide-right intersect:motion-delay-75 intersect:motion-duration-[1s]">
            Growing up I have always admired technology and it has always been
            my goal to someday work in the industry. I have been pushing towards
            my goal and I recently graduated from a bootcamp with a certificate
            in software development. I have aquired the skills necessary to help
            me get to this field and thrive
          </p>
          <p className="py-2 intersect:motion-preset-slide-left intersect:motion-delay-100 intersect:motion-duration-[2s] ">
            Aside from software I&apos;m into basketball. I find the game
            interesting and good for exercising, after all all work and no
            play... When it&apos;s not about the game I&apos;m drawing. Art has
            always been my mate. I&apos;m good at drawing. Safe to say I&apos;m
            talented in it.{" "}
          </p>
          <p className="py-2  cursor-pointer intersect:motion-preset-slide-up intersect:motion-delay-200 intersect:motion-duration-[3s]">
            Hit me up and I will be more than glad to share more about me
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl intersect:motion-preset-bounce intersect:motion-duration-500 intersect:motion-delay-[] hover:shadow-gray-400 rounded-xl flex items-center justify-center p-2 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded-xl object-cover h-48 w-96  "
            src="https://i.pinimg.com/originals/f4/53/9b/f4539beb3f31966094fce9f98ebd997e.jpg"
            alt="/"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}
