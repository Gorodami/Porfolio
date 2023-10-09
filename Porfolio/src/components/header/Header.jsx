import React from "react";
import  "./header.css"

function Header () {

    return(
        
        <header>
            <div className="Datos">
            <p>Damian Goro</p>    
            <p>Sobre mí</p>
        <a href="#herramienta"> <p>Herramientas</p> </a>
        <a href="#Proyectos"><p>Proyectos</p> </a>
        <a href="#Contacto"><p>Contacto</p></a> 
            </div>
        </header>

    )

}

export default Header;