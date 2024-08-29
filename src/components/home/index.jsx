import React from "react";

function Home(){
    return(
        {/* Banner  */},
        <header className="w-full h-[420px] bg-zinc-900 bg-cover bg-center ">
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1 className="text-4xl mt-4 mb-2 font-bold text-white"> Manoel Ferreira Matos </h1>
                <span className="text-white font-medium"> 22 years old, Studying, Developer </span>
                <div className="pt-6">
                <button type="submit" className="flex space-x-3 font-bold bg-green-500 hover:bg-green-800 text-white px-4 py-1 rounded hover:scale-110"><p> My CV </p></button>
                </div>
            </div>
        </header>
    )
}
export default Home