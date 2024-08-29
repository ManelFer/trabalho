import React from "react";

function Contact() {
  return (
    <div className="flex felx-col items-center bg-zinc-600 p-4">
      <h2 className="w-full h-full flex flex-col justify-center items-center">
        {" "}
        Contato{" "}
      </h2>
      <form className="flex flex-col w-full" action="">
        <label className="block mb-2" htmlFor="name">
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

        <label htmlFor="email" className="block mb-2">
          {" "}
          E-mail{" "}
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Seu e-mail"
          className="w-full p-2 mb-4 rounded-md"
        />

        <label htmlFor="message" className="block mb-2">
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
          className="bg-gray-900 px-5 py-2 rounded-md text-white hover:bg-gray-700"
        >
          {" "}
          Enviar{" "}
        </button>
      </form>
    </div>
  );
}
export default Contact;
