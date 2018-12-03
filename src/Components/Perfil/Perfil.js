import React from 'react';
import './Perfil.css';
import Adri from '../Img/adrilu.jpg';


const Perfil = () => {
  return (
    <section className="container adriana" id="Perfil">
      <h1 className="titulo">Sobre mí</h1>
       <div className="row">
         <div className="text-p col-lg-6">
           <h4 className = "hola">¡Hola! Bienvenid@</h4>
           <hr/>
           <p className = "texto-perfil ">
          Soy Front-End Developer. Me considero una persona paciente y concentrada 
          en continuo proceso de aprendizaje y descubrimiento, apasionada por la 
          tecnología y los videojuegos me interesa el desarrollo móvil y la realidad aumentada, 
          me gusta conocer nuevas costumbres y culturas. <br/><br/>
          <div className="button-container">
          <a target="_blank" rel="noopener noreferrer" 
          href="https://drive.google.com/open?id=1VrGr1VgElLdPqVMUfGOTU8siUaB5swDU"><button 
          type="button" className="btn cv btn-outline-light">Ver CV</button></a>
         </div>
         </p>
         </div>
        <div className="imagen col-lg-6">
        <img src = {Adri}  alt="Adri" className = "foto-adri"/>
      </div>
      </div>
  </section>
   );
}

   

export default Perfil;



