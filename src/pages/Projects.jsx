import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { projects } from "../utils/projects.js";

function Projects() {
  return (
    <div className=" bg-gray-900 text-white  px-6 md:px-44 min-h-screen">
      <h2 className="flex justify-center py-4 text-2xl mb-">My recent work</h2>

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
              <h2 className="font-bold text-2xl mb-2">{project.title}</h2>
              <p className="text-[15px]">{project.description}</p>
            </div>

            <div className="flex gap-2 px-4 mt-3">
              {project.technologies.map((technology, idx) => (
                <span
                  key={idx}
                  className="bg-green-500 rounded-2xl p-1 text-[12px]"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center px-4 p-2 mt-3">
              <div className="flex justify-center items-center gap-2 hover:text-gray-300">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2"
                >
                  <BsGithub size={20} className="transition-all duration-150 ease-in cursor-pointer" />
                  <p className="text-sm">view code</p>
                </a>
              </div>

              <div className="flex justify-center items-center gap-2 hover:text-blue-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2"
                >
                  <p className="text-sm">live demo</p>
                  <TbExternalLink size={20} className="transition-all duration-150 ease-in cursor-pointer" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
