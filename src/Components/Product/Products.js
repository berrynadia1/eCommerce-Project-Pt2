// import { render } from '@testing-library/react';
import React from 'react';
import products from './products.json';




class  Product extends React.Component{
    constructor (props) {
        super(props)
        this.state ={
            items: products.products
        }
    }
 render(){
     
     

    return(
        <React.Fragment>
            {this.state.items.map((products, index) => (
                <>
            <div className="card">
            <img className="photos"src={products.photos} alt={products.name}/>
            <h1 className="product-name">
            { products.name }
            </h1>
            <div className="price">{products.price}</div>
            <h2 className="description">
            { products.description}
            </h2>
            <button className="continue" type="submit">Add to Cart!</button>
            </div>
            
            </>
                )
            )
                }
           
        </React.Fragment>

                
    );
}  

}



export default Product;