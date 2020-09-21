import React, { Component } from 'react';

class QuantitiyPicker extends Component {
    state = {
        quantity: 1,
        name: "Mesaye"
    };
    render() { 
        return (
            <div className="quantityPicker">
                <button onClick={this.increase} className="btn btn-sm btn-info">+</button>
                <label>{this.state.quantity}</label>
                <button 
                onClick = {this.decrease} 
                disabled={this.state.quantity === this.props.minimum} 
                className="btn btn-sm btn-info">
                    -
                
                </button>

                
            </div>
          );
    }
    increase = () => {
       let val = this.state.Quantity + 1;
        this.setState ({ quantity: this.state.quantity + 1 });
        this.props.onValueChange(val);
    };
    decrease = () => {
        let newVal = this.state.quantity - 1;
        if (newVal >= this.props.minimum) {
            this.setState({quantity: newVal});
            this.props.onValueChange(newVal);
        }
        
    }
}
 
export default QuantitiyPicker;