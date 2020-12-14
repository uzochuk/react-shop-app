import React, { Component } from 'react'
import ProductsComponent from './components/ProductsComponent';
import data from './data.json'

export default class App extends Component {
    constructor() {
        super();
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
                      <ProductsComponent products={this.state.products}></ProductsComponent>
                </main>
                <footer>
                    <p>&copy; {new Date().getFullYear()}</p>
                </footer>
            </div>
        )
    }
}

