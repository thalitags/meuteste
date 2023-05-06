import React from "react";
import "./Bnt1.css";

console.log ("Clicou no botão");

function Bnt1(props) {
    return (
        <div>
            <button id ='menubtn'>
                {props.nome}</button>
        </div>
    )
}
export default Bnt1;