import React from 'react';
import "./Imagens.css";
import Tgs from './Tgs.jpg';


function Imagens(props) {
    return (
        <div>
            <h4>{props.texto}</h4>
            <img scr ={props.local} alt = ''/>
            
            <img id='imgprincipal'src={Tgs} alt= 'Tgs.jpg'/>
        </div>
    )
}
export default Imagens;