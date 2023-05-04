import React from "react";
import "./Bnt1.css";

console.log ("Clicou no botão");

function Bnt1(props) {
    return (
        <div>
            <button onClick={() => console.log("Teste")}> Clique aqui</button>
        </div>
    )
}
export default Bnt1;