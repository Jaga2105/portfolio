import React from 'react'
import ProjectsCard from './ProjectsCard';
import {projects} from "../../helpers/projectsData"

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full pt-10 pb-20 border-b-[1px] border-b-black px-4 md:px-10 lg:px-20"
    >
      <div className="flex justify-center items-center text-center">
      <h3 className="text-2xl md:text-3xl text-gray-300 font-bold capitalize mb-10">My Projects</h3>
      </div>
      
      <div className="mx-4 lg:mx-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14 place-content-center justify-items-center">
        {projects.map((project)=>(
            <ProjectsCard title={project.title} des={project.des} src={project.src} git={project.git} link={project.link}/>
        ))}
      </div>
    </section>
  );
}

export default Projects
