import React, { useEffect, useState } from "react"
import ListaPersonas from "./ListaPersonas";


const Estadisticas=({people})=>{
  
    const [totalDePersonas,setTotalDePersonas]=useState(0);//total de personas
    const [cantPersonasMayores35,setCantPersonasMayores35]=useState(0);//cant mayores a 35
    const [mayoresDeEdad,setMayoresDeEdad]=useState([]);
    const [menoresDeEdad,setMenoresDeEdad]=useState([]);
    const [promedio,setPromedio]=useState(0);

    useEffect(()=>{
      const total=people.length;
      let mayores35=0;
      let sumaEdades=0;
      const mayores=[];
      const menores=[];
      people.forEach((persona)=>{
        if(persona.edad>=18){
          mayores.push(persona);
          if(persona.edad>35){mayores35=mayores35+1;}
        }
        else{
          menores.push(persona);
        }
        sumaEdades=sumaEdades+persona.edad;
      });
      setPromedio((sumaEdades/total).toFixed(0));
      setTotalDePersonas(total);
      setMayoresDeEdad(mayores);
      setMenoresDeEdad(menores);
      setCantPersonasMayores35(mayores35);
    },[people]);

    return(
      <>
      <h1>{totalDePersonas} personas</h1>
      <h2>{cantPersonasMayores35} mayores de 35</h2>
      <h2>Edad promedio: {promedio} años</h2>

      <div className="listados">

        <div className="listado">
          <h1>Mayores</h1>
          <div className="ventanaAutoScroll">
            <ListaPersonas lista={mayoresDeEdad}/> 
          </div>
        </div>

        <div className="listado">
          <h1>Menores</h1>
          <div className="ventanaAutoScroll">
            <ListaPersonas lista={menoresDeEdad}/> 
          </div>
        </div>

      </div>
      </>
    )
}

export default Estadisticas;