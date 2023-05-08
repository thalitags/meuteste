import React from "react";
import "./Card.css";
import Bnt0 from "../bota0/Bnt0";

function Card (props){
    return (
        <div id="boxmaior">
            
            <div id="boxperfilfilme">
                
                <div id ="boximagem">
                    <img src={props.imagem} alt ="imagem"/>
                </div>
                
                <div id="boxdescricaofilme">
                        <h2>{props.titulo}</h2>
                        <p>{props.texto}</p>
                </div>
                
                <div id="boxbotao">
                    <Bnt0 texto= "Assistido"/>
                    <Bnt0 texto= "Quero assistir"/>
                    <Bnt0 texto= "Sem planos de assistir"/>
                </div>

            </div>
        </div>
    )
}

export default Card;