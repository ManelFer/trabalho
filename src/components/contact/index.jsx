import React, { useState } from "react";
import Img from "../../assets/contact.png";
import emailjs from "emailjs";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });
  const validate = () => {
    let isValid = true;
    const errors = { name: "", email: "" };
    if (!name) {
      errors.name = "O nome é obrigatorio";
      isValid = false;
    } else if (name.length < 3) {
      errors.name = "O nome deve ter mais de 3 caracteres";
      isValid = false;
    }
    if (!email) {
      errors.email = "O email é obrigatorio";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Email inválido";
      isValid = false;
    }
    setErrors(errors);
    return isValid;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (validate()) {
      const serviceId = "service_01x764k";
      const templateId = "template_qcgw8b9";
      const userId = "";
    }
  };

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
        <form
          className="flex flex-col w-full"
          action=""
          onSubmit={handleSubmit}
        >
          <label className="block mb-2 text-white" htmlFor="name">
            {" "}
            Nome:{" "}
          </label>
          <input
            type="text"
            id="name"
            onChange={(e) => setName(e.target.value)}
            name="name"
            placeholder="Seu nome"
            className="w-full p-2 mb-4 rounded-md"
          />
          {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

          <label htmlFor="email" className="block mb-2 text-white">
            {" "}
            E-mail:{" "}
          </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Seu e-mail"
            className="w-full p-2 mb-4 rounded-md"
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

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
