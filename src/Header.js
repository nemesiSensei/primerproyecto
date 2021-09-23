import React from "react";
import img1 from "./media/MarkRosterlogo.png" 
import img3 from "./media/header foto.png" 

class Header extends React.Component 
{
  render() 
  {
    return (
      <header>        
        
        <nav class="navbar navbar-light bg-light">
        <img src={img1} width="200" height="200"></img>
        <div class="container">                            
        <button class="btn btn-primary btn-lg" id="inicio"><strong>Inicio</strong></button>
        <button class="btn btn-primary btn-lg" id="marca"><strong>MarkRoster</strong></button>
        <button class="btn btn-primary btn-lg" id="specs"><strong>Características</strong></button>
        <button class="btn btn-primary btn-lg" id="ventajas"><strong>Ventajas</strong></button>
        <button class="btn btn-primary btn-lg" id="soporte"><strong>Soporte</strong></button>
        <button class="btn btn-primary btn-lg" id="contacto"><strong>Contacto</strong></button>      
        </div>
        </nav>
        <br></br>
        <center>                  
        <img src={img3} class="img-fluid"></img>
        </center>
        <br></br>
        <br></br>
      </header>
    );
  }
}
 
export default Header;