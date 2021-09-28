import React from "react";
import { Component } from "react";
import './index.css'
import img1 from "./media/UsuariosOpen.png";



class Formulario  extends  Component{
    
    render(){        
        return(
           
<div class="wrapper fadeInDown">
  <div id="formContent">
    
    <h2 class="active"> Inicio de Sesión </h2>
    <br></br>
    <div class="fadeIn first">
    <img src={img1} width="200" height="auto"></img> 
    </div>

    
    <form>
      <input type="text" id="login" class="fadeIn second" name="login" placeholder="Usuario"></input>
      <input type="text" id="password" class="fadeIn third" name="login" placeholder="Contraseña"></input>
      <a class="btn btn-primary btn-lg" href="/"><strong>Iniciar Sesión</strong></a>
    </form>

   
    <div id="formFooter">
      <a class="underlineHover" href="#">Olvidaste tu Contraseña?</a>
    </div>

  </div>
</div>
        )
    }

}
export default Formulario;