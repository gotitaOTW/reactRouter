import React, { useState } from "react"
import people from './people.json'
import { useParams } from "react-router-dom"

const Persona=()=>{
    const [msjPersonalizado,setMsjPersonalizado]=useState("mayor de edad");
    const {id} = useParams();
    const Persona = people[id];
    if(Persona.edad<18){
        setMsjPersonalizado("menor de edad");
    }
    return(
    <>
        <h1>{Persona.nombre}</h1>
        <h3>Edad: {Persona.edad}</h3>
        <h3>Email: {Persona.email}</h3>
        <h3>Es {msjPersonalizado}</h3>
    </>
    )
}

export {Persona}