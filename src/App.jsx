import './App.css'
import {useState} from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Inicio from './components/Inicio';
import Layout from './components/Layout';
import Estadisticas from './components/Estadisticas';
import Contacto from './components/Contacto';
import Persona from './components/Persona';
import people from './components/people.json'


function App() {
  const [personas, setPersonas] = useState(people);

  const agregarPersona = (persona) => {
    const personaConId={id:personas.length+1, ...persona}
    setPersonas([...personas, personaConId]);
  };

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/inicio" element={<Inicio people={personas}/>}></Route>
          <Route path="/inicio/:id" element={<Persona  people={personas}/>}></Route>
          <Route path="/inicio/*" element={<h1>Persona no encontrada</h1>}></Route>
          <Route path="/estadisticas" element={<Estadisticas people={personas}/>}></Route>
          <Route path="/contacto" element={<Contacto registroPersona={agregarPersona}/>}></Route>
          <Route path="*" element={<h1>Error 404</h1>}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
