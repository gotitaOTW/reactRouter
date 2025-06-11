import React from "react"

const Estadisticas=()=>{
    const total=people.length;
    const [sumaEdades,setSumaEdades]=useState(0);
    const [cantPersonasMayores35,setCantPersonasMayores35]=useState(0);//cant mayores a 35

    people.map((persona) => {
        setSumaEdades(sumaEdades+persona.edad);
    
        if (persona.edad > 35) {
            setCantPersonasMayores35(cantPersonasMayores35+1);  
        }
    
        if (persona.edad > edadMax) {
          edadMax = persona.edad;
          personasMax = [persona];
        } else if (persona.edad === edadMax) {
          personasMax.push(persona);
        }
    
        if (persona.edad < edadMin) {
          edadMin = persona.edad;
          personasMin = [persona];
        } else if (persona.edad === edadMin) {
          personasMin.push(persona);
        }

        const menoresDe35 = people.filter(p => !mayoresDe35.includes(p));
        const promedio = (sumaEdades / total).toFixed(2);//promedio
    return <h1>Estas son las estadísticas</h1>
}

export {Estadisticas}