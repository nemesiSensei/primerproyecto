import React from "react";
import img2 from "./media/logo2.png";

const Body = props => {
  return (
    <>
        <div class="container">
      <center>
      <img src={img2} width="500" height="auto"></img>
      <br></br>
      <br></br>
      <h3>
          Somos una marca dedicada al control de horarios por medios biométricos móviles 
          (usando el lector de huellas dactilares del teléfono móvil), con desarrolladores
          capacitados en diferentes tecnologías (Java, HTML, CSS, MySQL, entre otras) con 
          el ánimo de brindar soluciones eficientes de control de acceso de personal, ya sea 
          corporativo y/o institucional, y de calculo de horarios para asistencia y control
          de nómina, con interfaces intuitivas y amigables con el usuario, haciendo uso de 
          aplicaciones basadas en web, lo que garantiza su portabilidad y compatibilidad con
          multiples dispositivos, y su uso unipersonal e higiénico.
      </h3>
      </center>
        </div>
        <br></br> 
        <br></br> 
        <br></br> 
    </>
  );
};

export default Body;