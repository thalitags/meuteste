import React from "react;"
import "./pagina1.css";
import {Link} from "react-router-dom";
import Item1 from "../pagesnav/Item1";
import Item2 from "../pagesnav/Item2";
import Item3 from "../pagesnav/Item3";

const pagina1 = ()=>{
    return (
       <nav> 
        <Link to="Item1">Home</Link>
        <Link to="Item2">Filmes</Link>
        <Link to="Item3">Favoritos</Link>
        </nav>
    );
};

export default pagina1;