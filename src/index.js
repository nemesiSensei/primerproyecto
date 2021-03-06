import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/*
ReactDOM.render(  

    <Header />, 
    
  
  document.getElementById('Header')
);

ReactDOM.render(  

  <Body />, 
  

document.getElementById('Body')
);

ReactDOM.render(  

  <Footer />, 
  

document.getElementById('Footer')
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
