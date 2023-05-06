import React from "react";
import "./Componente1.css";

function Componente1(props) {
    return (
        <div>
           <button id='assistbtn'>
                {props.icone}
                {props.nome}
            </button>
        </div >
    )
}
export default Componente1;