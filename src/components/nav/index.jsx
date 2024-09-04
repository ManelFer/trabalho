import React from "react";

function Nav() {
  return (
    <nav className="bg-zinc-900 flex justify-between items-center py-4 p-2 border-b-2 border-zinc-300">
      <h1 className="text-white font-bold text-2xl md:text-3xl">
        {" "}
        Manoel Ferreira Matos{" "}
      </h1>
      <ul className="flex flex-row space-x-4 pr-4">
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white spa">
          <a href="#Home">Home</a>
        </li>
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white spa">
          <a href="#About">About</a>
        </li>
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white spa">
          <a href="#Project"> Project </a>
        </li>
        <li className="font-bold hover:bg-green-700 hover:scale-110 duration-300 rounded p-1 text-white spa">
          <a href="#Contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;
