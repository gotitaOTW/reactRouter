import {useState} from "react"

const Contacto=(props)=>{
    const [edad, setEdad] = useState(0);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [msjErrorEmail, setMsjErrorEmail] = useState("");
    const [msjErrorEdad, setMsjErrorEdad] = useState("");
    //const [msjExito, setMsjExito] = useState("");

    const esEmailValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    const validarEmail = (event) => {
        const email = event.target.value;
        if (esEmailValido(email)) {
            setEmail(email);
            setMsjErrorEmail("");
        }
        else{
            setMsjErrorEmail("Email inválido");
        }
    }
    const validarEdad=(event)=>{
        const edad=parseInt(event.target.value);
        if(edad<=0){
            setMsjErrorEdad("Edad inválida");
        }
        else{
            setEdad(edad);
            setMsjErrorEdad("");
        }
    }

    const submitHandler = (event) =>{
        event.preventDefault();
        if(msjErrorEdad==""&&msjErrorEmail==""){
           const persona={
            nombre:nombre,
            apellido:apellido,
            edad:edad,
            email:email
        }
        props.registroPersona(persona);
        alert(`${nombre} fue agregado/a con éxito a la lista!`); 
        }
        else{alert("Complete con datos válidos");}
    }

    return (
        <>
    <h1>Agregar personas</h1>
    <form id="formulario" onSubmit={(e)=>{submitHandler(e)}}>
        <div className="campo">
            <label htmlFor="nombre">Nombre:</label>
            <input type="text" id="nombre" required onChange={(e)=>setNombre(e.target.value)}/>
        </div>

        <div className="campo">
            <label htmlFor="apellido">Apellido:</label>
            <input type="text" id="apellido" required onChange={(e)=>setApellido(e.target.value)}/>
        </div>

        <div className="campo">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" required onChange={validarEmail}/>
        </div>

        <div className="campo">
            <label htmlFor="edad">Edad:</label>
            <input type="number" id="edad" required onChange={(event)=>validarEdad(event)}/>
        </div>

        <p>{msjErrorEmail}</p>
        <p>{msjErrorEdad}</p>
        <button type="submit">Agregar</button>
    </form>
        </>
    )
}

export default Contacto;