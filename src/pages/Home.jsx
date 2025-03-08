import React from "react";
import ProfilePic from "../assets/pustam.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="py-10 p-10 md:px-44 min-h-screen">
        <div className="flex justify-center">
          <img
            src={ProfilePic}
            alt="profilePic"
            className="w-30 h-auto md:w-50 rounded-full  shadow-2xl shadow-blue-500"
          />
        </div>

        <h1 className="py-6 text-3xl md:text-4xl font-bold text-gray-200 mt-4">
          Hi, I'm <span className="text-blue-600">Pustam Rai</span>
        </h1>
        <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mt-2">
          MERN Stack Developer
        </h2>

        <p className="text-gray-200 mt-4 max-w-lg">
          I'm passionate about building high-performance web applications using
          MongoDB, Express, React, and Node.js. I love solving problems and
          turning ideas into reality.
        </p>

        <div className="mt-6 flex space-x-6">
          <a
            href="https://www.linkedin.com/in/pustamrai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 text-3xl rounded-full shadow-lg hover:text-white transition-all duration-150 ease-in"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/PustamRai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-100 text-3xl rounded-full shadow-lg hover:text-gray-500 transition-all duration-150 ease-in"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
