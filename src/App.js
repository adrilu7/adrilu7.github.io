import React, { Component } from 'react';
import NavBtn from "./Components/Nav/NavBtn";
import Inicio from "./Components/Inicio/Inicio";
import Perfil from "./Components/Perfil/Perfil";
import Habilidades from "./Components/Habilidades/Habilidades";
import Proyectos from "./Components/Proyectos/Proyectos";
import Contacto from "./Components/Contacto/Contacto";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" basename={process.env.PUBLIC_URL}>
         <NavBtn/>
         <Inicio/>
         <Perfil/> 
         <Habilidades/> 
         <Proyectos/> 
         <Contacto/>
         </div>
    );
  }
}

export default App;
