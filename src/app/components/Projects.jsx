import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import ProjectTitle from './projecttitle';
import childrenImg from './children.jpg';
import shopImg from './shop.jpg';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="mx-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8 ">
          <ProjectTitle
            title="children's home"
            backgroundImg={childrenImg}
            projectUrl="https://childrens-home-app.vercel.app/login"
          />
          <ProjectTitle
            title="online shop"
            backgroundImg={shopImg}
            projectUrl="https://phase-4-project-ten.vercel.app/signup"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
