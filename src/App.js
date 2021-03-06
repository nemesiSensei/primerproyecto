
import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Contenido from "./Contenido";
import {  BrowserRouter as Router,  Switch,  Route,  Link} from "react-router-dom";
import Lista from "./Lista";
import Formulario from "./Formulario";
 
/*class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Body />
        <Contenido/>
        <Footer />        
      </div>
    );
  }
}
export default App;
*/
class  App extends Component {
  render(){
      <h1>Hola</h1>
  
  return (
   
    <Router>
    <Switch>
  <Route path="/"  exact component >
  <Header />
  <Body />
  <Contenido/>
  <Footer />  
  </Route>
  <Route path="/Lista"  exact component >
    <Lista/>
  </Route>
  <Route path="/Formulario"  exact component >
    <Formulario/>   
  </Route>  
  <Route path=""  >
    <h1><strong>Error 404: Not Found</strong></h1>
    <a class="btn btn-danger btn-lg" href="/"><strong>Volver a la pagina Principal</strong></a>    
  </Route> 
  </Switch>
    </Router>
  )
}
}
export default App;

 
 
   

