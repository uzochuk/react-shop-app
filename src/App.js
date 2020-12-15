import React, { Component } from 'react'
import FilterComponent from './components/FilterComponent';
import ProductsComponent from './components/ProductsComponent';
import data from './data.json'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            products: data.products,
            category:"",
            type:"",
        };
       this.filterFunction = this.filterFunction.bind(this)
       this.selectFunction = this.selectFunction.bind(this)
    }
   
    filterFunction=()=>{
        alert(this.state.type, this.state.category)
    }

    selectFunction=(e)=>{
        // set the values of category and type state to the values of the selected option
        // this.setState({category:e.target.value})
        alert(e.target.value)
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
                      filterFunction={this.filterFunction}
                      selectFunction={this.selectFunction}
                      category={this.state.category}
                      type={this.state.type}
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

