import React, { Component } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import {BrowserRouter as Router, Link, Route, Switch  } from 'react-router-dom';
import CartComponet from './components/CartComponet';
import DetailsComponent from './components/DetailsComponent';
import HomeComponent from './components/HomeComponent';
import NotFoundComponent from './components/NotFoundComponent';
import data from './data.json'
import Flip from 'react-reveal/Flip';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            products: data.products,
            Sproducts:data.products,
            category:"",
            type:"",
            cartItems: localStorage.getItem('cartItems')? JSON.parse(localStorage.getItem('cartItems')):[],

        };
        
        this.categorySelect=this.categorySelect.bind(this)
        this.typeSelect=this.typeSelect.bind(this)
        this.goFilter=this.goFilter.bind(this)
        this.addToCart = this.addToCart.bind(this)
        this.removeFromCart=this.removeFromCart.bind(this)
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

    goFilter = (e)=>{
        // when the go button is clicked in the filter component, search for the books with selected value and category

        // if category or type is not selected, alert user
        if(this.state.type === '' || this.state.category === ''){
            alert('select "Category" and "Type".' )
        }else{
          this.setState({
              products: data.products.filter(obj => {
                return obj.type === this.state.type && obj.category === this.state.category
              })
          })
        }

    }

    addToCart = (product) =>{ 

        //  console.log(product)
        // check if product already exists in cart. If it does, multiply the number else add the item to cart
        // make a new copy of cart items
        const cartItems = this.state.cartItems.slice();
        let alreadyInCart = false;
        
        cartItems.forEach(element => {
           if(element.id === product.id){
               cartItems.count ++;
               alreadyInCart = true;
           }
        });
        if(!alreadyInCart){
            cartItems.push({...product, count: 1 })
        }
        this.setState({
            cartItems:cartItems
        })

        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }

    removeFromCart = (product)=>{
        const cartItems = this.state.cartItems.slice();
        this.setState({
            cartItems: cartItems.filter(x=>x.id !== product.id),
        })
      
        localStorage.setItem("cartItems",
        JSON.stringify(cartItems.filter(x=>x.id !== product.id))
        )
    }

    createOrder = (order)=>{
        alert('order for' + order.name)
    }
  
    render() {
      
        return (
       
        <Router>
            <Flip>
            <div className='allContents'>
           
                <header>
                   <nav>
                       <ul>
                           <li>
                               <Link to='/'>HOME</Link>
                           </li>
                           <li className='cart'>
                               <Link to='/mycart'>My Cart <FaShoppingCart className='cartLogo'></FaShoppingCart></Link>
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
                        addToCart={this.addToCart}
                        >
                        </HomeComponent>
                    </Route> 
                    <Route path='/mycart'>
                        <CartComponet
                        cartItems={this.state.cartItems}
                        removeFromCart = {this.removeFromCart}
                        createOrder = {this.createOrder}
                        >
                        </CartComponet>
                    </Route>
                    <Route path='/details/:ID'
                    //  children={<DetailsComponent  selectedProduct={this.state.products}></DetailsComponent>}
                    >
                        <DetailsComponent  products={this.state.products}  addToCart={this.addToCart}></DetailsComponent>
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
            </Flip>
        </Router>
      
      )
    }
}

