import React from "react";

function Project(){
    return(
        <div className="grid grid-cols-3 gap-4">

            <div className="flex gap-2">
                <img src="" alt="" />
                <div>
                    <p className="font-bold"> Project 1</p>
                    <p className="text-sm"> Descrição do projeto </p>
                    <div className="flex items-center gap-2 justify-between mt-3">
                        <button><i src="https://github.com/ManelFer/Cardapio/blob/main/index.html">Git</i></button>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Project