import React from "react";
import Img from "../../assets/about.png"

function About(){
    return(
        {/* div para a imagem do lado */},
        <div className="flex gap-2 p-2 bg-zinc-800">
            <img className=" h-96 pl-10 pt-10 pb-10 " src={Img} alt="" />
            <div className="w-full h-full flex flex-col justify-center items-center">
                <h1> About-me </h1>
            </div>
        </div>
    )
}
export default About