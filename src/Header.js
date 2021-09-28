import React from "react";
import img1 from "./media/MarkRosterlogo.png" 
import img3 from "./media/header foto.png" 

class Header extends React.Component 
{
  render() 
  {
    return (
      <header>        
        <nav class="navbar navbar-ligth bg-white">
        <img src={img1} width="200" height="auto"></img>        
        <div class="container">                         
        <a class="btn btn-dark btn-lg" href="Formulario"><strong>Inicio de Sesión</strong></a>
        <a class="btn btn-primary btn-lg" href="#img2"><strong>MarkRoster</strong></a>
        <a class="btn btn-primary btn-lg" href="#caracteristicas"><strong>Características</strong></a>
        <a class="btn btn-primary btn-lg" href="#ventajas"><strong>Ventajas</strong></a>
        <a class="btn btn-success btn-lg" href="Lista"><strong>Productos</strong></a>
        <a class="btn btn-warning btn-lg" style={{color:"black"}} ><strong>Contacto</strong></a>     
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