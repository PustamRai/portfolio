import React from "react";
import { TbExternalLink } from "react-icons/tb";
import { BsGithub } from "react-icons/bs";
import { projects } from "../utils/projects.js";
import MetaData from "../components/metadata/MetaData.jsx";

function Projects() {
  return (
    <div className=" bg-gray-900 text-white  px-6 py-4 md:px-44 min-h-screen pt-24">
      <MetaData
        title="Projects | Pustam Rai - MERN Stack Developer"
        description="Explore the web development projects built by Pustam Rai using the MERN stack (MongoDB, Express, React, Node.js). From full-stack applications to creative frontend designs."
        keywords="Pustam Rai projects, MERN stack projects, React apps, Node.js projects, MongoDB applications, web development portfolio, frontend projects, full stack portfolio"
        image="https://www.pustamrai.com.np/logo2.jpg"
      />

      <h2 className="flex justify-center py-4 text-2xl mb-">My recent work</h2>

      {/* card section */}
      <div className="md:w-3xl grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className=" border-3 border-gray-800  rounded-4xl  overflow-hidden shadow-sm hover:shadow-blue-300 transition-all duration-150 ease-in"
          >
            <img
              src={project.image}
              alt={`image of ${project.title}`}
              className="h-52 w-full object-fill"
            />

          {/*  */}
          <div className="bg-gray-300 text-black py-2 backdrop-blur-sm h-full">

          
            <div className="px-4 mt-3">
              <h2 className="font-bold text-2xl mb-2">{project.title}</h2>
              <p className="text-[15px]">{project.description}</p>
            </div>

            <div className="flex gap-2 px-4 mt-3">
              {project.technologies.map((technology, idx) => (
                <span
                  key={idx}
                  className="bg-black text-white p-1 text-[12px] rounded-sm"
                >
                  {technology}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center px-4 p-2 mt-3">
              <div className="flex justify-center items-center gap-2 hover:text-gray-300 bg-black rounded-4xl text-black py-4 px-6 hover:bg-blue-900 transition-colors cursor-pointer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 text-white"
                >
                  <BsGithub size={20} className="transition-all duration-150 ease-in  text-bold" />
                  <p className="text-sm">view code</p>
                </a>
              </div>

              <div className="flex justify-center items-center gap-2 hover:text-gray-300 bg-black rounded-4xl text-black py-4 px-6 hover:bg-blue-900 transition-colors cursor-pointer">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center items-center gap-2 text-white"
                >
                  <p className="text-sm">live demo</p>
                  <TbExternalLink size={20} className="transition-all duration-150 ease-in" />
                </a>
              </div>
            </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
