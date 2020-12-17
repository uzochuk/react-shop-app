import React, { Component } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
import formatCurrency from '../util'

export default class ProductsComponent extends Component {
    render() {
        return (
            <div>
                <ul className='products'>
                    {this.props.products.map((product)=>{
                        return(
                           <li id={product.id} key={product.id}>
                               <div className="product">
                                   <a href={"#"+product.id}>
                                       <img src={product.img} alt={product.title}/>
                                       <p>{product.name.substring(0,15)+'...'}</p>
                                   </a>
                               </div>
                               <div className="productPrice">
                                   <div>{formatCurrency(product.price)}</div>
                                   <button className='button primary'> <FaCartArrowDown size='1rem'></FaCartArrowDown></button>
                               </div>
                           </li>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

