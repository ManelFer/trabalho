import React from "react";
import { MdOutlineMailOutline } from "react-icons/md";

function Navbar() {
  return (
    <nav className="px-12 pb-4 flex justify-between items-center bg-zinc-800">
      <a href="../about" className="flex  gap-2  mt-3 text-white font-bold">
        Manoel Ferreira Matos
      </a>

      {/* DDiv da navBar*/}
      <div className="flex  gap-12  mt-3 ">
        <ul>
          <li className="font-bold text-white hover:text-green-700 hover:scale-110 duration-300">
            <a href="../home"> Home </a>
          </li>
        </ul>

        <ul>
          <li className="font-bold text-white hover:text-green-700 hover:scale-110 duration-300">
            <a href="../about"> About </a>
          </li>
        </ul>

        <ul>
          <li className="font-bold text-white hover:text-green-700 hover:scale-110 duration-300">
            <a href="../project"> Project </a>
          </li>
        </ul>

        <ul>
          <li className="font-bold text-white hover:text-green-700 hover:scale-110 duration-300">
            <a href="..contact"> Contact </a>
          </li>
        </ul>
        <div>
          <button
            type="submit"
            className="flex space-x-3 font-bold bg-green-500 hover:bg-green-800 text-white px-4 py-1 rounded shadow-lg"
          >
            <p>New Project </p>
            <MdOutlineMailOutline size="1.5rem" />
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
