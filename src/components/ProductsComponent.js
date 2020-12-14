import React, { Component } from 'react'
import formatCurrency from '../util'

export default class ProductsComponent extends Component {
    render() {
        return (
            <div>
                <ul className='products'>
                    {this.props.products.map((product)=>{
                        return(
                           <li id={product.id}>
                               <div className="product">
                                   <a href={"#"+product.id}>
                                       <img src={product.img} alt={product.title}/>
                                       <p>{product.name.substring(0,15)+'...'}</p>
                                   </a>
                               </div>
                               <div className="productPrice">
                                   <div>{formatCurrency(product.price)}</div>
                                   <button className='button primary'>Add to cart</button>
                               </div>
                           </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

