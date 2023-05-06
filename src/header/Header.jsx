import React from "react";
import './Header.css';
import {BsCollectionPlayFill} from "react-icons/bs";
import {BsCollectionPlay} from "react-icons/bs";

function Header  (props){
return(

<header>
<h1>Potencialidade no cinema</h1> 
    <span id='header'>{props.icone}</span>
    {props.nome}
</header>
)
}
export default Header;