import React from "react";
import Img from "../../assets/about.png";

function About() {
  return (
    <div
      className="flex flex-col md:flex-row justify-between bg-zinc-100 p-4"
      id="About"
    >
      <div className="w-full md:w-2/3">
        <h2 className="flex justify-center font-bold text-black"> About-me </h2>
        <h1 className="flex justify-center font-bold text-black text-3xl">
          {" "}
          Welcome to
        </h1>
        <h2 className="flex justify-center font-bold text-black text-2xl mb-2">
          {" "}
          my website{" "}
        </h2>
        <div className="w-full mx-auto md:p-28">
          <p className="text-black mb-2 md:text-xl">
            {" "}
            ------Hello, my name is Manoel Ferreira Matos, but you can just call
            me Manoel. I'm 21 yeas old and currently working with technical
            support and studying systms analysis and development.{" "}
          </p>
          <p className="text-black md:text-xl ">
            ------Regarding my personal tastes, i really like hiking and playing
            on the computer and also developing systems and websites. I'm very
            passionate aboute coffe, i have three coffe tattoos.
          </p>
        </div>
      </div>
      <div className="w-[50%] md:my-[10%] md:w-1/4 mx-auto mt-2">
        <img
          src={Img}
          alt="Minha foto"
          className="md:w-full md:mx-auto  hover:scale-105 duration-300 shadow-md shadow-zinc-900/50 hover:skew-y-0 md:skew-y-3"
        />
      </div>
    </div>
  );
}
export default About;
