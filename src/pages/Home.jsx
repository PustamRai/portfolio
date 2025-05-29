import React from "react";
import ProfilePic from "../assets/pustam.png";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import MetaData from "../components/metadata/MetaData";

function Home() {
  return (
    <div className="bg-gray-900 text-white pt-24">
      <MetaData
        title="Pustam Rai | MERN Stack Developer Portfolio"
        description="Welcome to the portfolio of Pustam Rai, a passionate MERN Stack Developer specializing in MongoDB, Express, React, and Node.js. Discover my projects, skills, and contact information."
        keywords="Pustam Rai, MERN Stack Developer, Full Stack Developer, React Developer, Node.js, MongoDB, Express.js, Portfolio, Web Developer Nepal"
        image="https://www.pustamrai.com.np/logo2.jpg"
      />

      <div className="py-10 p-10 md:px-44 min-h-screen">
        {/* mobile view */}
        <div className="flex justify-center lg:hidden">
          <img
            src={ProfilePic}
            alt="profilePic"
            className="w-30 h-30 md:w-52 md:h-52 rounded-full  shadow-2xl shadow-blue-500 object-cover"
          />
        </div>

        <div className="lg:hidden">
          <h1 className="py-6 text-3xl md:text-4xl font-bold text-gray-200 mt-4">
            Hi, I'm <span className="text-blue-600">Pustam Rai</span>
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mt-2">
            MERN Stack Developer
          </h2>

          <p className="text-gray-200 mt-4 max-w-lg">
            I'm passionate about building high-performance web applications
            using MongoDB, Express, React, and Node.js. I love solving problems
            and turning ideas into reality.
          </p>

          <div className="mt-6 flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/pustamrai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 text-3xl rounded-full shadow-lg hover:text-blue-300 transition-all duration-150 ease-in cursor-pointer"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/PustamRai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-100 text-3xl rounded-full shadow-lg hover:text-gray-500 transition-all duration-150 ease-in cursor-pointer"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:pustamrai.info@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-red-400 text-3xl rounded-full shadow-lg hover:text-red-500 transition-all duration-150 ease-in cursor-pointer"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* web view */}
        <div className="hidden lg:block sm:mt-16">
          <div className="flex gap-12 justify-center items-center ">
            {/* left */}
            <div className="">
              <h1 className="py-6 text-3xl md:text-4xl font-bold text-gray-200 mt-4">
                Hi, I'm <span className="text-blue-600">Pustam Rai</span>
              </h1>
              <h2 className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 bg-clip-text text-transparent mt-2">
                MERN Stack Developer
              </h2>

              <p className="text-gray-200 mt-4 max-w-lg">
                I'm passionate about building high-performance web applications
                using MongoDB, Express, React, and Node.js. I love solving
                problems and turning ideas into reality.
              </p>

              <div className="mt-6 flex items-center space-x-6">
                <a
                  href="https://www.linkedin.com/in/pustamrai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 text-3xl rounded-full shadow-lg hover:text-blue-300 transition-all duration-150 ease-in cursor-pointer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/PustamRai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-100 text-3xl rounded-full shadow-lg hover:text-gray-500 transition-all duration-150 ease-in cursor-pointer"
                >
                  <FaGithub />
                </a>
                <a
                  href="mailto:pustamrai.info@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-400 text-3xl rounded-full shadow-lg hover:text-red-500 transition-all duration-150 ease-in cursor-pointer"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>

            {/* right */}
            <div className="flex justify-center">
              <img
                src={ProfilePic}
                alt="profilePic"
                className="sm:w-52 sm:h-52 rounded-full  shadow-2xl shadow-blue-500 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
