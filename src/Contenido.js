import React from "react";
import img1 from '../src/media/portabilidad.png';
import img2 from '../src/media/eficiencia.png';
import img3 from '../src/media/exactitud.png';
import img4 from '../src/media/item1.png';

const Contenido = props => {
  return (
    <>
    <div class="container">
      <center>
      <h1 style={{color: '#309EFF', fontSize: 50}}><strong>Características de MarkRoster</strong></h1>
      <br></br>
      <br></br>
      <br></br>  
      <div class="row">
      <div class="col">
  <div class="col-md-8"><img src={img1} width="200" height="auto"></img></div>
  <br></br>
  <div class="col-md-8"><h3><strong>PORTABILIDAD</strong></h3>
      <br></br>
      <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
          magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
          quis nostrud exerci tation ullam
      </h4></div>
      </div> 
      <br></br> 
      <div class="col">
      <div class="col-md-8"><img src={img2} width="200" height="auto"></img></div>
      <br></br>
      <div class="col-md-8"><h3><strong>EFICIENCIA</strong></h3>
      <br></br>
      <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
          magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
          quis nostrud exerci tation ullam
      </h4></div>
      </div>
      <br></br>
      <div class="col">
  <div class="col-md-8"><img src={img3} width="200" height="auto"></img></div>
  <br></br>
  <div class="col-md-8"><h3><strong>EXACTITUD</strong></h3>
      <br></br>
      <h4>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
          magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
          quis nostrud exerci tation ullam
      </h4></div>
      </div> 
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h1 style={{color: '#309EFF', fontSize: 50}}><strong>Ventajas de MarkRoster</strong></h1>
      <br></br>
      <br></br>
      <br></br>
      <div class="row">
      <div class="col-md-6">
      <div class="row">
      <div class="col-md-3"><img src={img4} width="100" height="auto"></img></div>        
      <h4 class="col-md-8" style={{textAlign: 'left'}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
          magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
          quis nostrud exerci tation ullam
      </h4>        
        </div>         
      </div>
      <div class="col-md-6">
      <div class="row">
      <div class="col-md-3"><img src={img4} width="100" height="auto"></img></div>        
      <h4 class="col-md-8" style={{textAlign: 'left'}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
          magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
          quis nostrud exerci tation ullam
      </h4>        
        </div>        
      </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <div class="row">
      <div class="col-md-6">
      <div class="row">
      <div class="col-md-3"><img src={img4} width="100" height="auto"></img></div>        
      <h4 class="col-md-8" style={{textAlign: 'left'}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
          magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
          quis nostrud exerci tation ullam
      </h4>        
        </div>         
      </div>
      <div class="col-md-6">
      <div class="row">
      <div class="col-md-3"><img src={img4} width="100" height="auto"></img></div>        
      <h4 class="col-md-8" style={{textAlign: 'left'}} >
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
          sed diam nonummy nibh euismod tincidunt ut laoreet dolore 
          magna aliquam erat volutpat. Ut wisi enim ad minim veniam, 
          quis nostrud exerci tation ullam
      </h4>        
        </div>        
      </div>
      </div>
      </center>
        </div>
        <br></br> 
        <br></br> 
        <br></br> 
    </>
  );
};

export default Contenido;