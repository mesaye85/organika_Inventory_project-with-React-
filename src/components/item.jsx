import React, { Component } from 'react';
import QuantitiyPicker from './QuantitiyPicker';
import "./item.css";

class Item extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="item">
                <img src ="Nike Shoes.jpeg"  alt= "Products"></img>
                <h4>Nike Shoes</h4>

            <div className="prices">
                <h5>$ Total</h5>
                <h6>$ Price</h6>
                </div>
                <QuantitiyPicker></QuantitiyPicker>

                <button className="btn btn-sm btn-info">Add</button>

                <img src ="Nike Shoes.jpeg"  alt= "Products"></img>
                <h4>Nike Shoes</h4>

            <div className="prices">
                <h5>$ Total</h5>
                <h6>$ Price</h6>
                </div>
                <QuantitiyPicker></QuantitiyPicker>

                <button className="btn btn-sm btn-info">Add</button>

                <img src ="Nike Shoes.jpeg"  alt= "Products"></img>
                <h4>Nike Shoes</h4>

            <div className="prices">
                <h5>$ Total</h5>
                <h6>$ Price</h6>
                </div>
                <QuantitiyPicker></QuantitiyPicker>

                <button className="btn btn-sm btn-info">Add</button>
            </div>
         );
    }
}
 
export default Item;