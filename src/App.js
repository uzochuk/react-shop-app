import React, { Component } from 'react'
import FilterComponent from './components/FilterComponent';
import ProductsComponent from './components/ProductsComponent';
import data from './data.json'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            products: data.products,
            size:"",
            sort:"",
        };
       
    }
   
    render() {
        return (
            <div className='allContents'>
                <header>
                    <a href='/'>React Shopping Cart</a>
                </header>
                <main>
                      <FilterComponent
                      count={this.state.products.length}
                      products={this.state.products}
                      hello={()=>alert('hello world')}
                     ></FilterComponent>
                      <ProductsComponent
                       products={this.state.products}
                      ></ProductsComponent>
                </main>
                <footer>
                    <p>&copy; {new Date().getFullYear()}</p>
                </footer>
            </div>
        )
    }
}

