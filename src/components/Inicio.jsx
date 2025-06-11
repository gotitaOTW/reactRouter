import React from "react"
import people from './people.json'
import { Link } from "react-router-dom";

const Inicio=()=>{
    const lista = people.map((persona) => (
        <div className="cardPersona" key={persona.id}>
            <Link to={`/inicio/${persona.id-1}`}><button className="verMasBoton">+</button></Link>
            <div className="contenidoCardPersona">
                <h4 id={persona.id}>{persona.nombre}</h4>
                <label htmlFor={persona.id}>{persona.edad} años</label> 
            </div>
        </div>
      ));
      
    return (
        <>
            <div className="titulo">
                <h1>Estudiantes</h1>
            </div>
            <div className="listaPersonas">{lista}</div>
        </>
    )
}

export {Inicio}