import React from 'react';
import './Nav.css'

const NavBtn = ()=>{
return(
    <ul className="nav  justify-content-center position-fixed">
                 <li className="nav-item  text-center">
                     <a className="nav-link" href="#Perfil">
                       <i className="fas fa-user-circle texto"></i>
                           <br></br>
                            Sobre mí
                     </a>
                 </li>
                 <li className="nav-item  text-center">
                     <a className="nav-link" href="#Habilidades">
                       <i className="fas fa-user-cog texto"></i>
                             <br></br>
                             Habilidades
                     </a>
                </li>
                 <li className="nav-item  text-center">
                     <a className="nav-link" href="#Proyectos">
                        <i className="fas fa-folder-open texto"></i>
                             <br></br>
                            Proyectos
                     </a>
                </li>
                <li className="nav-item  text-center">
                     <a className="nav-link" href="#Contacto">
                        <i className="fas fa-envelope texto"></i>
                            <br></br>
                             Contacto
                    </a>
              </li>
            </ul>
)
}

export default NavBtn;

