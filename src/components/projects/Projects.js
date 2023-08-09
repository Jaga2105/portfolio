import React from 'react'
import ProjectsCard from './ProjectsCard';
import {projects} from "../../helpers/projectsData"

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full pt-10 pb-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
      <h3 className="text-4xl md:text-4xl text-gray-300 font-bold capitalize mb-10">My Projects</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 place-content-center justify-items-center">
        {projects.map((project)=>(
            <ProjectsCard title={project.title} des={project.des} src={project.src} git={project.git} link={project.link}/>
        ))}
      </div>
    </section>
  );
}

export default Projects
