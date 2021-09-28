import React from "react";
import img1 from "./media/MarkRosterlogo.png" 
import img3 from "./media/header foto.png" 

class Lista extends React.Component 
{
  render() 
  {
    return (
      <header>     
        <nav class="navbar navbar-ligth bg-white">
        <img src={img1} width="200" height="200"></img>        
        <div class="container">                         
        <a class="btn btn-primary btn-lg" href="/"><strong>Inicio</strong></a>         
        </div>
        </nav>
        <br></br>
        <center>                  
        <img src={img3} class="img-fluid"></img>
        <br></br>
        <br></br>
        
        </center>
        <br></br>
        <br></br>
      </header>
      
      
    );
  }
}
 
export default Lista;