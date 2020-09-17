import React, { Component } from 'react';
import Item from "./item";

class Catalog extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="catalog-page">
                <h2>Our amazing catalog</h2>

                <div className="catagories"></div>

                <div className="products">
                    <Item></Item>
                    <Item></Item>
                    <Item></Item>
                </div>

            </div>


         );
    }
}
 
export default Catalog;