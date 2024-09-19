import React, { useState } from "react";
import { Link } from "react-scroll";

function Nav() {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);

  return (
    <nav className="bg-gradient-to-r from-zinc-800 to-zinc-700 flex justify-between items-center py-2 p-2 border-b-2 border-zinc-300">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-zinc-400 to-zinc-300 font-bold text-xl md:text-2xl lg:text-4xl xl:text-5xl pl-10">
        {" "}
        Manoel Ferreira Matos{" "}
      </h1>
      <button
        className="md:hidden flex justify-center items-center w-8 h-8 bg-gray-800 text-white rounded-full"
        aria-label="Menu"
        aria-expanded={click}
        onClick={() => setClick(!click)}
      >
        <i className="fas fa-bars" />
      </button>
      <ul
        className={`flex flex-row space-x-4 pr-10 md:flex md:justify-center md:items-center ${
          click ? "block" : "hidden"
        }`}
      >
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white">
          <Link
            to="Home"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
            type="button"
            className="cursor-pointer"
          >
            Home
          </Link>
        </li>
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white">
          <Link
            to="About"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
            type="button"
            className="cursor-pointer"
          >
            About
          </Link>
        </li>
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white">
          <Link
            to="Project"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
            type="button"
            className="cursor-pointer"
          >
            Project
          </Link>
        </li>
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white">
          <Link
            to="Contact"
            spy={true}
            smooth={true}
            offset={50}
            duration={500}
            onClick={closeMenu}
            type="button"
            className="cursor-pointer"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
