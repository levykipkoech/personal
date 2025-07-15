import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectTitle from "./projecttitle";
import moodapp from "../../utils/moodapp.png";
import emmax from "../../utils/emmax.png";
export default function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="mx-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectTitle
            title="mood tracker"
            backgroundImg={moodapp}
            projectUrl="https://moodapp-phi.vercel.app/"
          />
          <ProjectTitle
            title="Inventory Manager"
            backgroundImg={emmax}
            projectUrl="https://emmax.vercel.app/login"
          />
        </div>
      </div>
    </div>
  );
}
