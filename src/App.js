import React, { Component } from 'react'
import {BrowserRouter as Router, Link, Route, Switch  } from 'react-router-dom';
import CartComponet from './components/CartComponet';
import DetailsComponent from './components/DetailsComponent';
import HomeComponent from './components/HomeComponent';
import NotFoundComponent from './components/NotFoundComponent';
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
    
        <Router>
            <div className='allContents'>
                <header>
                   <nav>
                       <ul>
                           <li>
                               <Link to='/'>HOME</Link>
                           </li>
                           <li className='cart'>
                               <Link to='/mycart'>MY CART</Link>
                           </li>
                       </ul>
                   </nav>
                </header>
                <main>
                <Switch>
                   <Route path='/' exact={true}>
                        <HomeComponent
                        count={this.state.products.length}
                        products={this.state.products}
                        Sproducts={this.state.Sproducts}
                        category={this.state.category}
                        type={this.state.type}
                        categorySelect={this.categorySelect}
                        typeSelect={this.typeSelect}
                        goFilter={this.goFilter}
                        >
                        </HomeComponent>
                    </Route> 
                    <Route path='/mycart'>
                        <CartComponet></CartComponet>
                    </Route>
                    <Route path='/details/:ID'
                    //  children={<DetailsComponent  selectedProduct={this.state.products}></DetailsComponent>}
                    >
                        <DetailsComponent  products={this.state.products}></DetailsComponent>
                    </Route>
                   <Route path='*'>
                       <NotFoundComponent></NotFoundComponent>
                   </Route>
                </Switch>
                </main>
                <footer>
                    <p>&copy; {new Date().getFullYear()}</p>
                </footer>
           
            </div>
        </Router>
     
        )
    }
}

