import React from "react";
import Python from "../../assets/python.png";
import Js from "../../assets/js.png";

function Project() {
  return (
    <div className="w-full">
      <div className="container w-full md:w-[1240px] mx-auto p-4 md:p-8">
        <h2 className="font-bold pb-8 text-1xl md:text-3xl text-center">
          {" "}
          Projects{" "}
        </h2>
        <span className="line"></span>
        <div className="content grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8">
          {/* grid dos projetos */}
          <div className=" card border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src={Python}
              alt="project img"
              className="w-40 rounded-md p-4 mb-4"
            />
            <button className="text-gray-600 text-lg mb-4" type="submit">
              Descrição do projeto
            </button>
            {/* modal card */}

            <div className="card border border-gray-200 rounded-lg shadow-md p-4 flex-col items-center hidden">
              <div>
                <h2> Descrição do projeto</h2>
              </div>
            </div>

            {/*fim modal card */}
            <p className="p-2">
              <span className="text-primary font-bold"> Caixa eletronico</span>
            </p>
            <div className="mt-auto hover:scale-110 duration-300">
              <a
                href="https://github.com/ManelFer/Sistema_de_caixa"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
              >
                GitHub
              </a>
            </div>
          </div>
          {/* Modal grid para descrição */}

          <div className="card border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src={Js}
              alt="Project img"
              className="w-40 rounded-md p-4 mb-4"
            />
            <p className="text-gray-600 text-lg mb-4"> Descrição do projeto</p>
            <p className="pb-2">
              <span className="text-primary font-bold"> Trabalho </span>
            </p>
            <div className="mt-auto hover:scale-110 duration-300">
              <a
                href="https://github.com/ManelFer/trabalho"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
              >
                GitHub
              </a>
            </div>
          </div>

          <div className=" card border border-gray-200 rounded-lg shadow-md p-4 flex flex-col items-center">
            <img
              src={Python}
              alt="Project img"
              className=" w-40 rounded-md p-4 ml-2"
            />
            <p className=" text-gray-600 text-lg mb-4"> Descrição do projeto</p>
            <p className="pb-2">
              <span className="text-primary font-bold"> Sistema de Login </span>
            </p>
            <div className="mt-auto hover:scale-110 duration-300">
              <a
                href="https://github.com/ManelFer/SistemaLogin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-zinc-900 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
              >
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
