//imrc
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import "font-awesome/css/font-awesome.css";

//cc
class NavBar  extends Component {
    state = {  }
    render() { 
        return (
            <nav
            className="navbar navbar-expand-lg"
            style={{ backgroundColor: "#fff" }}
          >
            <Link className="navbar-brand" to="/home">
              Organika
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/#">
                    Home <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/catalog">
                    Catalog
                  </Link>
                  </li>
                  <li className="nav-item">
                  <Link className="nav-link" to="/todo">
                    Todo
                  </Link>
                </li>
              </ul>

              <div className="form-inline my-2 my-lg-0">
                
                <Link className="btn btn-outline-success my-2 my-sm-0" to="/cart">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    View Cart
                    <span className="badge badge primary cart-badge">16</span>
                </Link>
            </div>
        </div>
      </nav>
          );
    }
}
 
export default NavBar;

//Advances ES6 topics
//Arrow functions
//object destructuring
//spread operator
//array methods (filter, map, sort)