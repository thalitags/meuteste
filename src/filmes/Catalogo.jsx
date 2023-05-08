import React from "react";
import "./Catalogo.css";
import { Link } from "react-router-dom";
import { useParams, useNavigate} from "react-router-dom";

const Catalogo = () => {

    const {id}=useParams ();

    const navigate = useNative ()
    const handleContact = () =>{
    console.log ("Socorro!");
    return navigate ("/");
    };

    return (
        <div>
            <h2>Filmes: {id}</h2>
            <button onClick={handleContact}></button>
            <p>
                <Link to="/Catalogo/filme1"> Catalogo</Link>
            </p>

            <Link to="df"> Deficiência Intelectual</Link>
            <Link to="di"> Deficiência Visual</Link>
            <Link to="dv"> Deficiência Visual</Link>
            <Link to="da">Deficiência Auditiva</Link>
            <Link to="tea">Autismo</Link>
        </div>
    );
};

export default Catalogo;

// <img src={props.foto} alt={props.nome} /><h3>titulo:{props.nome}</h3><p>sinopse:{props.texto}</p><p>comentario:{props.texto}</p>
//<h2>Deficiência Visual</h2>
    //<button>Deficiência Física</button>
            //<button>Deficiência Auditiva</button>
            //<button>Deficiência Intectual</button>
            //<button>Autismo</button></button>