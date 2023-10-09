import React from "react";
import foto from "./foto-perfil.png";
import "./Main.css"
import proyecto from "./Proyecto.jpg"
import javascript from "./javascript.png"
import html from "./html.png"
import css from "./css.png"
import react from "./react.png"
import github from "./github.png"
import linkedin from "./linkedin.png"

function Main () {
    return(
        <body >
        <div className="Banner">
            <div className="titulo">
                <h1>Sobre mí</h1>
            </div>
            <section className="Sobre-mi">
                <img src={foto} alt="" />
                <div className="Texto">
                <p>Mi objetivo laboral es aplicar mis habilidades como desarrollador integrándome al equipo de trabajo y de esa forma poder avanzar mi carrera en el rubro IT. Me considero una persona comprometida con mi propósito predispuesto a seguir aprendiendo.
                </p>
                </div>
            </section>

            <section className="Herramientas">
                <h2 id="herramienta" >Herramientas</h2>
            <div className="Herramientas-img">
            <img src={javascript} alt=""/>
            <img src={html} alt="" />
            <img src={css} alt="" />
            <img src={react} alt="" />
            </div>
            </section>



            <section className="Proyectos">
                <h2 id="Proyectos">Proyectos</h2>
                <div className="Proyectos-img">
                    <div className="titulo-proyecto">
                    <h3>Clon de Steam</h3>
                    </div>
                    <img src={proyecto} alt="" />
                </div>
            </section>

            <section className="contacto">
                <h2 id="Contacto">Contacto</h2>
                <div className="contacto-img">
                    <a href="https://github.com/Gorodami?tab=repositories" target="_blank"><img src={github} alt=""/> </a>
                    <a href="https://www.linkedin.com/in/walter-damian-goro/" target="_blank"><img src={linkedin} alt="" /></a>
                </div>

            </section>

        </div>
        </body>
    )

}

export default Main;