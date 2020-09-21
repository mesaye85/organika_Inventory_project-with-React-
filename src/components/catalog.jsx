import React, { Component } from 'react';
import Item from "./item";
import ItemService from "../services/itemService";

class Catalog extends Component {


    state = { 
        items: [],
        catagories: [],
        selectedCatagory: ""
     }
    render() { 

        /*
         *if selectedCatagory is not
         filter items to Display
         itemsToDisplay = itemsTodisplay.filter
         MDN array filter
         
         */

        let itemsToDisplay = this.state.items
        return ( 
            <div className="catalog-page">
                <h2>Our amazing catalog</h2>

                <div className="catagories">
                   
                    <div>
                    { this.state.catagories.map((catagory)=> (
                    <div className="catagory" 
                    key={catagory} 
                    onClick={() => this.selectedCatagory(catagory)}> 
                    <h6>{catagory}</h6>
                    </div>
                    ))}
</div>
                </div>
<div className ="section">
    <h5>Sections</h5>
     </div>
                <div className="products">
                    { itemsToDisplay.map((i)=> (
                    <Item key={i.id}product ={i}> </Item>
                    ))}
                </div>

            </div>
        );
                    }

selectedCatagory = (catName) => {
 this.setState({selectedCatagory: catName});
}
         
        
         componentDidMount() {
// perfect place to get data from server /DB/ AJAX call

             let service = new ItemService();
             const data = service.getProducts();
             this.setState({ items: data});

             //identify the unique catagories from data
             // create an array with those cats
             //set it to the state
            let cats = [];
            for(let i =0; i < data.length; i++){
                let item = data[i];
                if(!cats.includes(item.category))
                cats.push(item.catagory);

                this.setState({ catagories: cats});
            }
         }  
        
        
}
 
export default Catalog;