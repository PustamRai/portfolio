import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { projects } from "../utils/projects.js";

function Projects() {
  return (
    <div className=" bg-gray-900 text-white  px-6 md:px-44 min-h-screen">
      <h2 className="flex justify-center py-4 text-2xl mb-">
        My recent work
      </h2>

      <div className="md:w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div 
          key={idx}
          className=" border-3 border-gray-800  rounded-2xl  overflow-hidden shadow-sm hover:shadow-blue-300 transition-all duration-150 ease-in"
          >
            <img
              src={project.image}
              alt={`image of ${project.title}`}
              className="h-52 w-full object-fill"
            />

            <div className="px-4 mt-3">
              <h2 className="font-bold text-2xl mb-2">
                {project.title}
              </h2>
              <p className="text-[15px]">
                {project.description}
              </p>
            </div>

            <div className="flex gap-2 px-4 mt-3">
              {project.technologies.map((technology, idx) => (
                <span key={idx}
                className="bg-gray-500 rounded-2xl p-1 text-[12px]"
                >
                  {technology}1
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center px-4 p-2 mt-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black p-2 rounded-2xl cursor-pointer font-bold hover:bg-blue-600 transition-all duration-150 ease-in"
              >
                github
              </a>
              <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer">
                <TbExternalLink  
                className="text-3xl hover:text-blue-500 transition-all duration-150 ease-in"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
      </div>
  );
}

export default Projects;
