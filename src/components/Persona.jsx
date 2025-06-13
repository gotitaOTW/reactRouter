import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const Persona=({people})=>{
    const [msjPersonalizado,setMsjPersonalizado]=useState("");
    const {id} = useParams();
    const persona = people[id];
    if(persona==null){
        return <h1>Persona no encontrada</h1>
    }
    else{
      useEffect(()=>{
        if(persona.edad<18)
        {
            setMsjPersonalizado("menor de edad")
        }
        else{
            setMsjPersonalizado("mayor de edad")
        }
    },[])
    }
    
    return(
    <>
        <h1>{persona.nombre}</h1>
        <h3>Edad: {persona.edad}</h3>
        <h3>Email: {persona.email}</h3>
        <h3>Es {msjPersonalizado}</h3>
    </>
    )
}

export default Persona