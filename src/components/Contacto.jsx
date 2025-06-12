import {useState} from "react"

const Contacto=()=>{
    const [edad, setEdad] = useState(0);
    const [, setEdad] = useState(0);

    const esEmailValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validarEmail = (event) => {
        const email = event.target.value;
        if (esEmailValido(email)) {
            
        }
    }

    return (
        <>
    <h1>Agregar personas</h1>
    <form id="formulario" onSubmit={(e)=>{submitHandler(e)}}>
        <div className="campo">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" required/>
        </div>

        <div className="campo">
            <label for="apellido">Apellido:</label>
            <input type="text" id="apellido" required/>
        </div>

        <div className="campo">
            <label for="email">Email:</label>
            <input type="email" id="email" required onChange={validarEmail}/>
        </div>

        <div className="campo">
            <label for="edad">Edad:</label>
            <input type="number" id="edad" required onChange={(event)=>{if(event.target.value>0){setEdad(event.target.value)}}}/>
        </div>

        <button type="submit">Agregar</button>
    </form>
        </>
    )
}

export default Contacto;