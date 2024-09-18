import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";

function Home() {
  return (
    {
      /* Banner  */
    },
    (
      <header className="w-full h-[420px] relative border-b-2" id="Home">
        <div className="absolute w-full h-full bg-home bg-cover bg-center filter drop-shadow-md brightness-[80%]"></div>
        <div className="w-full h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl mt-4 mb-2 font-bold text-white">
            {" "}
            Manoel Ferreira Matos{" "}
          </h1>
          <span className="text-white font-medium">
            {" "}
            22 years old, developer in development{" "}
          </span>
          <div className="pt-6">
            <button
              type="submit"
              className="flex space-x-3 font-bold bg-green-500 hover:bg-green-800 duration-300 focus:outline-none focus:ring focus:ring-green-300 text-white px-4 py-1 rounded hover:scale-110"
            >
              <a href="https://drive.google.com/file/d/16SlCd_DOVPeqbD6agcPoByOWWPhxS3iI/view?usp=sharing">
                <p> My CV </p>
              </a>
            </button>
            <div className="text-white p-2 flex space-x-4 justify-center">
              <a
                href="https://www.linkedin.com/in/manoel-mato/"
                className="hover:scale-110 duration-500 "
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://github.com/ManelFer"
                className="hover:scale-110 duration-500"
              >
                <FiGithub />
              </a>
            </div>
          </div>
        </div>
      </header>
    )
  );
}
export default Home;
