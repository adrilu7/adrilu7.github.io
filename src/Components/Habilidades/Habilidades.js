import React from 'react';
import './Habilidades.css';

const Habilidades = () => {
  return (
    <section className="container hab" id="Habilidades">
      <h2 className="titulo-hab" >Habilidades</h2>
      <div className="row ">
        <div className="col-md-4 card ml-md-4 lin tres">
          <p className="titulo-card">Front-End</p>
          <i className="fas fa-laptop-code"></i>
          <ul className="texto-card">
            <li>HTML5</li><br></br>
            <li>JavaScript (ES6)</li><br></br>
            <li>CSS3</li><br></br>
            <li>React</li><br></br>
            <li>Node.js</li><br></br>
            <li>Firebase</li><br></br>
            <li>Bootstrap</li><br></br>
            <li>Git/GitHub</li><br></br>
          </ul>
        </div>
        
        <div className="col-md-4 offset-md-1 card lin tres">
          <p className="titulo-card ">Soft skills</p>
          <i className="fas fa-user-cog texto"></i>
          <ul>
            <li>Metodología ágil</li><br></br>
            <li>Trabajo en equipo</li><br></br>
            <li>Adaptabilidad</li><br></br>
            <li>Autoaprendizaje</li><br></br>
            <li>Planificación y manejo del tiempo</li><br></br>
            <li>Proactividad</li><br></br>
            <li>Empatía</li><br></br>
          </ul>
        </div>
      </div>
    </section>
  );
}
export default Habilidades;