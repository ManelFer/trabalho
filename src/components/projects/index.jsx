import React from "react";
import Python from "../../assets/python.png";
import Js from "../../assets/js.png";

function Project() {
  return (
    <main className="grid grid-cols-3 gap-4 p-2">
      <div className=" p-2 flex flex-col items-center bg-zinc-600 hover:scale-110 duration-500 border border-white">
        <img
          src={Python}
          alt=""
          className="w-10 h-10 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-zinc-300 gap-4">
            {" "}
            Sistema de Caixa eletronico{" "}
          </p>
          <p className="text-wrap text-zinc-300 gap-2">
            {" "}
            Projeto realizado no curso de python da plataforma DIO. Confira o
            código do sistema de caixa eletronico de banco feito em Python e
            poo!
          </p>
          <div className="flex justify-between gap-2 mt-3">
            <a
              href="https://github.com/ManelFer/Sistema_de_caixa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 px-5 hover: rounded add-to-cart-btn text-white "
            >
              gitHub
            </a>
          </div>
        </div>
      </div>

      <div className="p-2 flex flex-col items-center bg-zinc-600 hover:scale-110 duration-500 border border-white">
        <img
          src={Js}
          alt=""
          className="w-12 h-12 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-zinc-300 gap-4"> Cardapio Digital </p>
          <p className="text-wrap text-zinc-300 gap-2">
            Projeto feito em HTML, CSS, JAVASCRIPT e TAILWINDCSS. Cardapio
            digital e responsivel, feito para testar meus conhecimento no
            tailwindcss e javascript!
          </p>
          <div>
            <a
              href="https://github.com/ManelFer/Cardapio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 px-5  rounded add-to-cart-btn text-white flex justify-end"
            >
              gitHub
            </a>
          </div>
        </div>
      </div>

      <div className=" p-2 flex flex-col items-center bg-zinc-600 hover:scale-110 duration-500 border border-white">
        <img
          src={Python}
          alt=""
          className="w-10 h-10 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-zinc-300 gap-4">Sistema de Login</p>
          <p className="text-wrap text-zinc-300 gap-2">
            {" "}
            Sistema de login usando Python e sqLite Nesse sistema podemos usar
            registro e login!
          </p>
          <div className="flex justify-between gap-2 mt-3">
            <a
              href="https://github.com/ManelFer/Sistema_de_caixa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 px-5 rounded add-to-cart-btn text-white "
            >
              gitHub
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Project;
