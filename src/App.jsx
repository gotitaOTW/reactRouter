import { useState } from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import { Inicio } from './components/Inicio';
import {Layout} from './components/Layout';
import { Estadisticas } from './components/Estadisticas';
import { Contacto } from './components/Contacto';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/inicio" element={<Inicio />}></Route>
          <Route path="/estadisticas" element={<Estadisticas />}></Route>
          <Route path="/contacto" element={<Contacto />}></Route>
          <Route path="*" element={<h1>Error 404</h1>}></Route> 
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
