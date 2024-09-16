import React, { useState, useRef } from "react";
import Img from "../../assets/contact.png";
//import Img2 from "../../assets/At the office.gif";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [enviado, setEnvio] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: "", email: "" });
  const validate = () => {
    let isValid = true;
    const errors = { name: " ", email: " " };
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

  const templateParams = {
    from_name: name,
    from_email: email,
    to_name: "Manoel",
  };

  // envio de email

  const sendEmail = (e) => {
    e.preventDefault();
    if (validate()) {
      emailjs
        .sendForm("service_01x764k", "template_qcgw8b9", form.current, {
          publicKey: "ljyClJDk0R-fRV7rx",
          templateParams,
        })
        .then(
          () => {
            console.log("SUCCESS!");
            setEnvio(true);
            setName("");
            setEmail("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
    }
  };

  return (
    <div
      className="flex flex-col justify-between bg-zinc-200 p-4 md:flex-row md:items-center"
      id="Contact"
    >
      <div className="w-full md:w-1/2">
        <h1 className="w-full flex flex-col justify-center items-center font-bold text-zinc-700 text-3xl drop-shadow-md">
          {" "}
          Contact{" "}
        </h1>
        <div>
          {enviado ? (
            <div>
              {" "}
              <p className="text-2xl text-zinc-900 font-bold flex justify-center p-2">
                Enviado com sucesso{" "}
              </p>
            </div>
          ) : (
            <form
              ref={form}
              className="flex flex-col w-full"
              action=""
              onSubmit={sendEmail}
            >
              <label className="block mb-2 text-zinc-900" htmlFor="name">
                {" "}
                Nome:{" "}
              </label>
              <input
                type="text"
                id="name"
                onChange={(e) => setName(e.target.value)}
                name="name"
                placeholder="Seu nome..."
                className="w-full p-2 mb-4 rounded-md shadow-lg shadow-zinc-700/50"
              />
              {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}

              <label htmlFor="email" className="block mb-2 text-zinc-900">
                {" "}
                E-mail:{" "}
              </label>
              <input
                type="text"
                id="email"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail..."
                className="w-full p-2 mb-4 rounded-md shadow-lg shadow-zinc-700/50"
              />
              {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}

              <label htmlFor="message" className="block mb-2 text-zinc-900">
                {" "}
                Mensagem:{" "}
              </label>
              <textarea
                name="message"
                id="message"
                className="w-full p-2 mb-4 rounded-md shadow-lg shadow-zinc-700/50"
                placeholder="Sua mensagem..."
              />

              <button
                type="submit"
                className="bg-gradient-to-r bg-gray-900 px-5 py-2 rounded-md text-white hover:scale-105 duration-300 hover:from-green-700 hover:to-grenn-600 shadown-2xl"
              >
                {" "}
                Enviar{" "}
              </button>
            </form>
          )}
        </div>
      </div>
      <div className="w-full md:w-1/2 mx-auto">
        <img
          src={Img}
          alt="Imagem de contato"
          className="w-1/2 mx-auto hover:scale-105 duration-300 drop-shadow-xl"
        />
      </div>
    </div>
  );
}
export default Contact;
