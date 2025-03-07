import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { RxHamburgerMenu, RxCross2} from "react-icons/rx";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
    className='bg-gray-900 text-gray-300'
    >
      <div
      className='p-6 md:px-52 flex justify-between'
      >
        <NavLink
        to="/"
        >
          <h2>logo</h2>
        </NavLink>

        {/* desktop menu */}
        <div className="hidden md:flex md:items-center">
        <ul className="flex items-center space-x-6 font-bold">
            <li>
              <NavLink
              to="/"
              className={({isActive}) => isActive ? "text-orange-500" : "hover:bg-gray-800 p-3 rounded-b-2xl"}
              onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/about"
              className={({isActive}) => isActive ? "text-orange-500" : "hover:bg-gray-800 p-3 rounded-b-2xl"}
              onClick={() => setIsOpen(false)}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/projects"
              className={({isActive}) => isActive ? "text-orange-500" : "hover:bg-gray-800 p-3 rounded-b-2xl"}
              onClick={() => setIsOpen(false)}
              >
                Projects
              </NavLink>
            </li>
            
          </ul>
        </div>

        {/* mobile menu button */}
        <button
        className="text-2xl md:hidden"
        onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <RxCross2 /> : <RxHamburgerMenu />}
        </button>
      </div>


      {/* mobile dropdown menu */}
      {isOpen && (
        <div 
        className="md:hidden transition-all duration-300 ease-in-out transform scale-95"
        >
          <ul 
          className="flex flex-col items-center space-y-4 py-4 font-bold"
          >
            <li>
              <NavLink
              to="/"
              className={({isActive}) => isActive ? "text-orange-500" : "hover:bg-gray-700 p-3 rounded-b-2xl"}
              onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/about"
              className={({isActive}) => isActive ? "text-orange-500" : "hover:bg-gray-700 p-3 rounded-b-2xl"}
              onClick={() => setIsOpen(false)}
              >
                about
              </NavLink>
            </li>
            <li>
              <NavLink
              to="/projects"
              className={({isActive}) => isActive ? "text-orange-500" : "hover:bg-gray-700 p-3 rounded-b-2xl"}
              onClick={() => setIsOpen(false)}

              >
                Projects
              </NavLink>
            </li>
            
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar