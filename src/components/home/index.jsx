import React from "react";

function Home() {
  return (
    {
      /* Banner  */
    },
    (
      <header className="w-full h-[420px] relative border-b-2" id="Home">
        <div className="absolute w-full h-full bg-home bg-cover bg-center filter drop-shadow-md brightness-[50%]"></div>
        <div className="w-full h-full flex flex-col justify-center items-center relative z-10">
          <h1 className="text-4xl mt-4 mb-2 font-bold text-white">
            {" "}
            Manoel Ferreira Matos{" "}
          </h1>
          <span className="text-white font-medium">
            {" "}
            22 years old, Studying, Developer{" "}
          </span>
          <div className="pt-6">
            <button
              type="submit"
              className="flex space-x-3 font-bold bg-green-500 hover:bg-green-800 duration-300 focus:outline-none focus:ring focus:ring-green-300 text-white px-4 py-1 rounded hover:scale-110"
            >
              <p> My CV </p>
            </button>
          </div>
        </div>
      </header>
    )
  );
}
export default Home;
