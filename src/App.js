import React from "react";

import "./App.css";
import NavBar from './components/navBar';
//import QuantitiyPicker from "./components/QuantitiyPicker";
import Catalog from './components/catalog';
//import Todo from "./components/todo";
import Footer from './components/Footer';

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>

      <NavBar></NavBar>
      <div className="App container-fluid">
        <h1>Hello React!!</h1>
    <Catalog></Catalog>
 
    </div>
    
  <Footer>

  </Footer>
    </React.Fragment>
  );
}

export default App;
