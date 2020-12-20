import React, { Component } from 'react'
import{FaSearch} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import formatCurrency from '../util'
import { FaCartArrowDown } from 'react-icons/fa'



export default class HomeComponent extends Component {
    
    render(props) {
        const distinctCategory = [...new Set(this.props.Sproducts.map(x=>x.category))]
        const distinctType = [...new Set(this.props.Sproducts.map(x=>x.type))]
        
        return (
            <>
            <div className='filter'>
               <p><b>{this.props.count}</b> Books available</p> 

               <p>
                   <label for="category">Category:</label>
                    <select name="category" id="categorySelect" onChange={this.props.categorySelect} value={this.props.category}>
                        {distinctCategory.map(x => {
                            return  (<option value={x} key={x}>
                                {x}
                            </option>)
                        })}
                   </select>
                </p>

                <p>
                    <label for="type">Type:</label>
                        <select name="type" id="typeSelect"  onChange={this.props.typeSelect} value={this.props.type}>
                            {distinctType.map(x => {
                                return  (<option value={x} key={x}>
                                    {x}
                                </option>)
                            })}
                        </select>
                </p>
                   <button onClick={this.props.goFilter}>Go<FaSearch size='1rem'></FaSearch></button>
            </div>
            <div>
                <ul className='products'>
                    {this.props.products.map((product)=>{
                        return(
                           <li id={product.id} key={product.id}>
                               <div className="product">
                                   <Link to={`/details/${product.id}/${product.name}`}>
                                       <img src={product.img} alt={product.title}/>
                                       <p>{product.name.substring(0,15)+'...'}</p>
                                    </Link>
                               </div>
                               <div className="productPrice">
                                   <div>{formatCurrency(product.price)}</div>
                                   {/* when the add to cart button is clicked add the selected product to the cartItems state */}
                                   <button className="button primary" onClickCapture={()=>{this.props.addToCart(product)}}> <FaCartArrowDown size='1rem'></FaCartArrowDown></button>
                               </div>
                           </li>
                        )
                    })}
                </ul>
            </div>
         </>
        )
    }
}
