import React from 'react';
import Cluster from '../Img/Cluster.png';
import Registro from '../Img/Registro.png';
import Tictac from '../Img/Tic.png';

import './Proyectos.css';
const Proyectos = () => {
    return (
        <section className="habp" id="Proyectos">
            <h2 className="titulo-hab" >Proyectos</h2>
                <div className="container-fluid ">
                <hr/>
                  <div className="row t4">
                    <div className="col-md-3 col-lg-3  card cinco">
                    <p className="titulo-proyecto">Cluster</p>
                        <img src={Cluster} alt="portada de red social cluster" className="image"/>   
                        <div className="body-proyectos">
                           <p className="descrip">Es una nueva red social enfocada a las mujeres 
                           interesadas en las CTIM.</p>
                           <p className="descrip-titulo" >Tecnologías</p>
                           <p className="descrip">Firebase,HTLM5,Css3,JavaScript Bootstrap</p>
                        </div>
                  <div className="row">
                        <a target="_blank" rel="noopener noreferrer" href="https://adrilu7.github.io/cdmx-2018-06-bc-core-am-social-network/src/index.html" className=""><button type="button" className="btn-p btn-outline-light">Ver</button></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/adrilu7/cdmx-2018-06-bc-core-am-social-network" className=""><button type="button" className="btn-p btn-outline-light">Código</button></a>
                  </div>
                  </div>
                  <div className="col-md-3 col-lg-3 card cinco">     
                  <p className="titulo-proyecto">Tic-Tac-Toe</p>
                         <img src={Tictac} alt="portada juego de gato" className="image"/>
                        
                          <div className="body-proyectos">
                            <p className="descrip">El clásico juego de Gato elaborado con React Native.</p>
                           <p className="descrip-titulo" >Tecnologías</p>
                          <p className="descrip">React Native, Expo</p>
                        </div>
                      <div className="row">
                        <a target="_blank" rel="noopener noreferrer" href="https://expo.io/@adrilu/game-tic-tac-toe" className=""><button type="button" className="btn-p btn-outline-light">Ver</button></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/adrilu7/cdmx-2018-06-bc-core-am-tic-tac-toe-App-Native" className=""><button type="button" className="btn-p btn-outline-light">Código</button></a>
                        </div>
                  </div>
                  <div className="col-md-3 col-lg-3 card cinco">
                  <p className="titulo-proyecto">Registro De Visitantes</p>
                       <img src={Registro} alt="Registro de visitantes" className="image"/>
                    
                       
                       <div className="body-proyectos">
                        <p className="descrip">Aplicación web que agiliza el proceso de registro de visitantes a un coworking.</p>
                         <p className="descrip-titulo" >Tecnologías</p>
                      <p className="descrip">Firebase,HTLM5,Css3,JavaScript Bootstrap</p>
                      </div>
                      <div className="row">
                        <a target="_blank" rel="noopener noreferrer" href="https://adrilu7.github.io/registro-de-visitantes/src/index.html" className=""><button type="button" className="btn-p btn-outline-light">Ver</button></a>
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/adrilu7/registro-de-visitantes" className=""><button type="button" className="btn-p btn-outline-light">Código</button></a>
                        </div>
                  </div>
                  
                  </div>
                </div>
          
            </section>
              
   );
}

export default Proyectos;

