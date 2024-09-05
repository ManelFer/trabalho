import React from "react";
import Img from "../../assets/contact.png";

function Contact() {
  return (
    <div
      className="flex flex-col justify-between bg-zinc-600 p-4 md:flex-row md:items-center"
      id="Contact"
    >
      <div className="w-full md:w-1/2">
        <h1 className="w-full flex flex-col justify-center items-center font-bold text-white text-3xl">
          {" "}
          Contact{" "}
        </h1>
        <form className="flex flex-col w-full" action="">
          <label className="block mb-2 text-white" htmlFor="name">
            {" "}
            Nome:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Seu nome"
            className="w-full p-2 mb-4 rounded-md"
          />

          <label htmlFor="email" className="block mb-2 text-white">
            {" "}
            E-mail:{" "}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Seu e-mail"
            className="w-full p-2 mb-4 rounded-md"
          />

          <label htmlFor="message" className="block mb-2 text-white">
            {" "}
            Mensagem:{" "}
          </label>
          <textarea
            name="message"
            id="message"
            className="w-full p-2 mb-4 rounded-md"
            placeholder="Sua mensagem..."
          />

          <button
            type="submit"
            className="bg-gradient-to-r bg-gray-900 px-5 py-2 rounded-md text-white hover:from-green-700 hover:to-grenn-600"
          >
            {" "}
            Enviar{" "}
          </button>
        </form>
      </div>
      <div className="w-full md:w-1/2 mx-auto">
        <img
          src={Img}
          alt="Imagem de contato"
          className="w-1/2 mx-auto hover:scale-105 duration-300 "
        />
      </div>
    </div>
  );
}
export default Contact;
