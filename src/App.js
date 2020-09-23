import React from "react";

import "./App.css";
import NavBar from './components/navBar';
//import QuantitiyPicker from "./components/QuantitiyPicker";
import Catalog from './components/catalog';
import Todo from "./components/todo";
import Footer from './components/Footer';

import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/home";
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from './components/cart';

function App() {
  return (
    <BrowserRouter>

      <NavBar></NavBar>

      
      <div className="App container-fluid">
      
    
 <Switch>
 <Route path="/" exact={Home} ></Route>
 <Route path="/catalog" component={Catalog}></Route>
 <Route path="/todo" component={Todo}></Route>
 <Route path="/cart" component={Cart}></Route>
 </Switch>
    </div>
    
  <Footer>

  </Footer>
    </BrowserRouter>
  );
}

export default App;
