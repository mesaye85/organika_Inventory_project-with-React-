import React, { Component } from 'react';
import QuantitiyPicker from './QuantitiyPicker';
import "./item.css";

class Item extends Component {
    state = {
        minimum: this.props.product.minimum || 1 ,
        quantity: this.props.product.quantity || 1
      }
    render() { 
        return ( 
           <div className="container">
                <div className="justify-content-md-center">
                
                 <div className="col">
            <div className="item">
                 <img src ={ "/images/products/" + this.props.product.image } alt= "Product"></img>
                <h4>Products</h4>

            <div className="prices">
                <h5>Total ${this.props.product.price * this.state.quantity} </h5>
                <h6>Price ${this.props.product.price} </h6>
                </div>
                <QuantitiyPicker> 
                    value+{this.state.quantity}
                    minimum={this.state.minimum}
                    onValueChange={ (qnt) => this.handleQuantitiyChange(qnt) } </QuantitiyPicker>

                <button className="btn btn-sm btn-info">Add</button>
                </div>
                
                
   
 </div>
   </div>
  </div> 
         );
    }
    handleQuantitiyChange= (qnt) => {
        this.setState({quantity: qnt});

    };
}
 
export default Item;