import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="bg-zinc-900 flex justify-between items-center py-4 p-2">
      <h1 className="text-white font-bold"> Manoel Ferreira Matos </h1>
      <ul className="flex flex-row space-x-4">
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white spa">
          <a href="#">Home</a>
        </li>
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white spa">
          <a href="#">About</a>
        </li>
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white spa">
          <a href="#">Project</a>
        </li>
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white spa">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
