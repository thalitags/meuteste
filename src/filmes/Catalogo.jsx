import React from "react";
import "./Catalogo.css";

function Catalogo (props) {
    return (
        <div>
            <img src={props.foto} alt={props.nome} />
            <h3>titulo:{props.nome}</h3>
            <p>sinopse:{props.texto}</p>
            <p>comentario:{props.texto}</p>
        </div>
    )
}

export default Catalogo;

//<h2>Deficiência Visual</h2>
    //<button>Deficiência Física</button>
            //<button>Deficiência Auditiva</button>
            //<button>Deficiência Intectual</button>
            //<button>Autismo</button></button>