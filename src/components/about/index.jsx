import React from "react";
import Img from "../../assets/about.png";

function About() {
  return (
    <div className="flex flex-col md:flex-row justify-between bg-zinc-600 p-4">
      <div className="w-full md:w-2/3">
        <h2 className="flex justify-center font-bold text-white"> About-me </h2>
        <h1 className="flex justify-center font-bold text-white text-3xl">
          {" "}
          Welcome to
        </h1>
        <h2 className="flex justify-center font-bold text-white text-2xl mb-2">
          {" "}
          my website{" "}
        </h2>
        <div className="w-full mx-auto">
          <p className="text-white mb-2 text-xl">
            {" "}
            ------Hello, my name is Manoel Ferreira Matos, but you can just call
            me Manoel. I'm 21 yeas old and currently working with technical
            support and studying systms analysis and development.{" "}
          </p>
          <p className="text-white text-xl">
            ------Regarding my personal tastes, i really like hiking and playing
            on the computer and also developing systems and websites. I'm very
            passionate aboute coffe, i have three coffe tattoos. oi
          </p>
        </div>
      </div>
      <div className="w-[50%] md:w-1/4 mx-auto">
        <img
          src={Img}
          alt="Minha foto"
          className="w-full mx-auto hover:scale-105 duration-300"
        />
      </div>
    </div>
  );
}
export default About;
