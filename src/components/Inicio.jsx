import { Link } from "react-router-dom";
import ListaPersonas from "./ListaPersonas";

const Inicio=({people})=>{
    return (
        <>
            <div className="titulo">
                <h1>Estudiantes</h1>
            </div>
            <div className="ventanaAutoScroll">
            <ListaPersonas lista={people}/> 
          </div>
        </>
    )
}

export default Inicio