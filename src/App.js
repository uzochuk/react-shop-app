import React, { Component } from 'react'
import FilterComponent from './components/FilterComponent';
import ProductsComponent from './components/ProductsComponent';
import data from './data.json'

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            products: data.products,
            Sproducts:data.products,
            category:"",
            type:"",

        };
        
        this.categorySelect=this.categorySelect.bind(this)
        this.typeSelect=this.typeSelect.bind(this)
        this.goFilter=this.goFilter.bind(this)
    }

    categorySelect=(e)=>{
    // console.log(e.target.value);
    // set the state of category to the value of selected state
    this.setState({
        category:e.target.value
    })
   
    }

    typeSelect=(e)=>{
    //    console.log(e.target.value);
    // set the state of type to the value of selected state
       this.setState({
           type:e.target.value
       })
    
    }

    goFilter = ()=>{
        // when the go button is clicked in the filter component, search for the books with selected value and category

        // if category or type is not selected, alert user
        if(this.state.type === '' || this.state.category === ''){
            alert('select "Category" and "Type".' )
        }
          this.setState({
              products: data.products.filter(obj => {
                return obj.type === this.state.type && obj.category === this.state.category
              })
          })

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
                        Sproducts={this.state.Sproducts}
                        category={this.state.category}
                        type={this.state.type}
                        categorySelect={this.categorySelect}
                        typeSelect={this.typeSelect}
                        goFilter={this.goFilter}
                        >
                        </FilterComponent>
                        <ProductsComponent
                        products={this.state.products}
                        >
                        </ProductsComponent>
                </main>
                <footer>
                    <p>&copy; {new Date().getFullYear()}</p>
                </footer>
            </div>
        )
    }
}

