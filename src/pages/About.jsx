import React from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaJsSquare } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb } from "react-icons/si";
import MetaData from "../components/metadata/MetaData";

function About() {
  return (
    <div className="bg-gray-900 text-white  px-6 md:px-44 min-h-screen flex flex-col py-6">
      <MetaData
        title="About Me | Pustam Rai"
        description="I'm Pustam Rai, a MERN Stack Developer passionate about building scalable web apps using React, Node, MongoDB, and more."
        keywords="Pustam Rai, MERN Developer, React, Node, MongoDB, Portfolio"
        image="https://www.pustamrai.com.np/logo2.jpg"
      />

      <div className="py-10 flex items-center gap-10">
        <div className="text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-blue-500 mb-2 inline-block pb-1">
            About Me
          </h2>

          <p className="text-gray-300 md:text-[20px] mt-3 leading-relaxed text-center">
            I am a dedicated <b>MERN Stack Developer</b> specializing in
            MongoDB, Express.js, React, and Node.js. I am passionate about
            developing high-performance and scalable web applications with clean
            and maintainable code. I enjoy problem-solving and continuously
            learning new technologies to stay ahead in the industry.
          </p>

          <div className="mt-12">
            <h3 className="text-2xl md:text-4xl font-bold text-blue-500 mb-2  inline-block pb-1">
              Code:Skills
            </h3>
            <div className="mt-3 grid grid-cols-3  md:grid-cols-4 gap-6 text-center">
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-blue-500 transition-all duration-200 ease-in">
                <FaReact className="text-blue-400 text-3xl mx-auto" />
                <p className="mt-2 text-sm">React.js</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-gray-600 transition-all duration-200 ease-in">
                <SiExpress className="text-gray-500 text-3xl mx-auto" />
                <p className="mt-2 text-sm">Express.js</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-green-500 transition-all duration-200 ease-in">
                <FaNodeJs className="text-green-400 text-3xl mx-auto" />
                <p className="mt-2 text-sm">Node.js</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-green-500 transition-all duration-200 ease-in">
                <SiMongodb className="text-green-500 text-3xl mx-auto" />
                <p className="mt-2 text-sm">MongoDB</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-yellow-500 transition-all duration-200 ease-in">
                <FaJsSquare className="text-yellow-400 text-3xl mx-auto" />
                <p className="mt-2 text-sm">Javascript</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-blue-500 transition-all duration-200 ease-in">
                <SiTailwindcss className="text-blue-400 text-3xl mx-auto" />
                <p className="mt-2 text-sm">Tailwind CSS</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-orange-500 transition-all duration-200 ease-in">
                <FaGitAlt className="text-orange-400 text-3xl mx-auto" />
                <p className="mt-2 text-sm">Git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
