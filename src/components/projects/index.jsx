import React from "react";
import Python from "../../assets/python.png";
import Js from "../../assets/js.png";

function Project() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-3">
      <div className=" p-2 flex flex-col items-center bg-zinc-600 hover:scale-110 duration-500 border">
        <img
          src={Python}
          alt=""
          className="w-10 h-10 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-zinc-300 gap-4"> ATM System </p>
          <p className="text-wrap text-zinc-300 gap-2">
            {" "}
            Project carried out in the DIO platform python course. Check out the
            bank ATM system code made in Python and poo!
          </p>
          <div className="flex justify-between gap-2 mt-3">
            <a
              href="https://github.com/ManelFer/Sistema_de_caixa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-green-900 px-5 hover: rounded add-to-cart-btn text-white "
            >
              gitHub
            </a>
          </div>
        </div>
      </div>

      <div className="p-2 flex flex-col items-center bg-zinc-600 hover:scale-110 duration-500 border">
        <img
          src={Js}
          alt=""
          className="w-12 h-12 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-zinc-300 gap-4"> Digital menu </p>
          <p className="text-wrap text-zinc-300 gap-2">
            Project made in HTML, CSS, JAVASCRIPT and TAILWINDCSS. Menu digital
            and responsive, made to test my knowledge in tailwindcss and
            javascript!
          </p>
          <div>
            <a
              href="https://github.com/ManelFer/Cardapio"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-green-900 px-5  rounded add-to-cart-btn text-white flex justify-end"
            >
              gitHub
            </a>
          </div>
        </div>
      </div>

      <div className=" p-2 flex flex-col items-center bg-zinc-600 hover:scale-110 duration-500 border ">
        <img
          src={Python}
          alt=""
          className="w-10 h-10 rounded-md hover:scale-110 hover:-rotate-2 duration-300"
        />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-zinc-300 gap-4">Login System</p>
          <p className="text-wrap text-zinc-300 gap-2">
            {" "}
            Login system using Python and sqLite In this system we can use
            registration and login!
          </p>
          <div className="flex justify-between gap-2 mt-3">
            <a
              href="https://github.com/ManelFer/Sistema_de_caixa"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 hover:bg-green-900 px-5 rounded add-to-cart-btn text-white "
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
