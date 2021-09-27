
import React, { Component } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Body from "./Body";
import Contenido from "./Contenido";
 
class App extends Component {
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


 
 
   

