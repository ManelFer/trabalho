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
          <div className="card border border-gray-200 rounded-lg shadow-md p-4">
            <img
              src={Python}
              alt="project img"
              className="w-40 rounded-md p-4 ml-1"
            />
            <p className="text-gray-600 text-lg mb-4">
              {" "}
              Descrição do prpojeto{" "}
            </p>
            <p>
              <span className="text-primary font-bold"> Caixa eletronico</span>
            </p>
            <p>Colocar aqui um botão de direcionamento</p>
          </div>

          <div className="card border border-gray-200 rounded-lg shadow-md p-4">
            <img
              src={Js}
              alt="Project img"
              className="w-40 rounded-md p-4 ml-1"
            />
            <p className="text-gray-600 text-lg mb-4"> Descrição do projeto</p>
            <p>
              <span className="text-primary font-bold"> Trabalho </span>
            </p>
            <p>Colocar aqui um botão de direcionamento</p>
          </div>

          <div className=" card border border-gray-200 rounded-lg shadow-md p-4">
            <img
              src={Python}
              alt="Project img"
              className=" w-40 rounded-md p-4 ml-2"
            />
            <p className=" text-gray-600 text-lg mb-4"> Descrição do projeto</p>
            <p>
              <span className="text-primary font-bold"> Sistema de Login </span>
            </p>
            <p>Colocar aqui um botão de direcionamento</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Project;
