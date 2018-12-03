import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <section className="contact" id="Contacto">
    <div className="container9">
      <h2 className="contacto1">Contacto</h2>
        <div className="row iconos">
          <a className="col-md-3 col-lg-3" href="https://github.com/adrilu7" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github-square"></i>
            <br></br>
           Github
          </a>
          <a className="col-md-3 col-lg-3"href="mailto:adrilu7h@gmail.com">
          <i className="fas fa-envelope"></i>
          <br></br>
          Correo
          </a>
          <a className="col-md-3 col-lg-3" href="https://www.linkedin.com/in/adriherrera/" target="_blank" rel="noopener noreferrer">
           <i className="fab fa-linkedin"></i>
           <br></br>
           Linkedin
          </a>
        </div>
    </div>
  </section>

    
   );
}

export default Contacto;

