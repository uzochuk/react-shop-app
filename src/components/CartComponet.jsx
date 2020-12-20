import React, { Component } from 'react'
import {  FaEnvelope, FaHome, FaPlus,  FaTrash, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import formatCurrency from '../util';
import Modal from 'react-modal';

Modal.setAppElement('#root')
export default class CartComponet extends Component {
        constructor(props){
            super(props)
            this.state={
                modalIsOpen:false,
                name:'',
                email:'',
                address:''
            }

            this.handleInput =this.handleInput.bind(this)
            this.createOrder=this.createOrder.bind(this)
        }
 
        handleInput=(e)=>{
            // console.log(this.state);
            this.setState({
                [e.target.name]:e.target.value,
            })    
        }

        createOrder = (e)=>{
            e.preventDefault();
            const order={
                name: this.state.name,
                email: this.state.email,
                address: this.state.address,
                cartItems: this.props.cartItems
            }

            // console.log(order);

            this.props.createOrder(order)
        }

    render() {
        const {cartItems} = this.props;
       
        return (
            <div className='cartComponent'>
             {cartItems.length === 0 ? (
                <div className="emptyCart" >
                  <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgdmlld0JveD0iMCAwIDIzMS41MjMgMjMxLjUyMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjMxLjUyMyAyMzEuNTIzOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8cGF0aCBkPSJNMTA3LjQxNSwxNDUuNzk4YzAuMzk5LDMuODU4LDMuNjU2LDYuNzMsNy40NTEsNi43M2MwLjI1OCwwLDAuNTE4LTAuMDEzLDAuNzgtMC4wNGM0LjEyLTAuNDI2LDcuMTE1LTQuMTExLDYuNjg5LTguMjMxDQoJCWwtMy40NTktMzMuNDY4Yy0wLjQyNi00LjEyLTQuMTEzLTcuMTExLTguMjMxLTYuNjg5Yy00LjEyLDAuNDI2LTcuMTE1LDQuMTExLTYuNjg5LDguMjMxTDEwNy40MTUsMTQ1Ljc5OHoiLz4NCgk8cGF0aCBkPSJNMTU0LjM1MSwxNTIuNDg4YzAuMjYyLDAuMDI3LDAuNTIyLDAuMDQsMC43OCwwLjA0YzMuNzk2LDAsNy4wNTItMi44NzIsNy40NTEtNi43M2wzLjQ1OC0zMy40NjgNCgkJYzAuNDI2LTQuMTIxLTIuNTY5LTcuODA2LTYuNjg5LTguMjMxYy00LjEyMy0wLjQyMS03LjgwNiwyLjU3LTguMjMyLDYuNjg5bC0zLjQ1OCwzMy40NjgNCgkJQzE0Ny4yMzUsMTQ4LjM3NywxNTAuMjMsMTUyLjA2MiwxNTQuMzUxLDE1Mi40ODh6Ii8+DQoJPHBhdGggZD0iTTk2LjI3OCwxODUuMDg4Yy0xMi44MDEsMC0yMy4yMTUsMTAuNDE0LTIzLjIxNSwyMy4yMTVjMCwxMi44MDQsMTAuNDE0LDIzLjIyMSwyMy4yMTUsMjMuMjIxDQoJCWMxMi44MDEsMCwyMy4yMTYtMTAuNDE3LDIzLjIxNi0yMy4yMjFDMTE5LjQ5NCwxOTUuNTAyLDEwOS4wNzksMTg1LjA4OCw5Ni4yNzgsMTg1LjA4OHogTTk2LjI3OCwyMTYuNTIzDQoJCWMtNC41MywwLTguMjE1LTMuNjg4LTguMjE1LTguMjIxYzAtNC41MywzLjY4NS04LjIxNSw4LjIxNS04LjIxNWM0LjUzLDAsOC4yMTYsMy42ODUsOC4yMTYsOC4yMTUNCgkJQzEwNC40OTQsMjEyLjgzNSwxMDAuODA4LDIxNi41MjMsOTYuMjc4LDIxNi41MjN6Ii8+DQoJPHBhdGggZD0iTTE3My43MTksMTg1LjA4OGMtMTIuODAxLDAtMjMuMjE2LDEwLjQxNC0yMy4yMTYsMjMuMjE1YzAsMTIuODA0LDEwLjQxNCwyMy4yMjEsMjMuMjE2LDIzLjIyMQ0KCQljMTIuODAyLDAsMjMuMjE4LTEwLjQxNywyMy4yMTgtMjMuMjIxQzE5Ni45MzcsMTk1LjUwMiwxODYuNTIxLDE4NS4wODgsMTczLjcxOSwxODUuMDg4eiBNMTczLjcxOSwyMTYuNTIzDQoJCWMtNC41MywwLTguMjE2LTMuNjg4LTguMjE2LTguMjIxYzAtNC41MywzLjY4Ni04LjIxNSw4LjIxNi04LjIxNWM0LjUzMSwwLDguMjE4LDMuNjg1LDguMjE4LDguMjE1DQoJCUMxODEuOTM3LDIxMi44MzUsMTc4LjI1MSwyMTYuNTIzLDE3My43MTksMjE2LjUyM3oiLz4NCgk8cGF0aCBkPSJNMjE4LjU4LDc5LjA4Yy0xLjQyLTEuODM3LTMuNjExLTIuOTEzLTUuOTMzLTIuOTEzSDYzLjE1MmwtNi4yNzgtMjQuMTQxYy0wLjg2LTMuMzA1LTMuODQ0LTUuNjEyLTcuMjU5LTUuNjEySDE4Ljg3Ng0KCQljLTQuMTQyLDAtNy41LDMuMzU4LTcuNSw3LjVzMy4zNTgsNy41LDcuNSw3LjVoMjQuOTRsNi4yMjcsMjMuOTQ2YzAuMDMxLDAuMTM0LDAuMDY2LDAuMjY3LDAuMTA0LDAuMzk4bDIzLjE1Nyw4OS4wNDYNCgkJYzAuODYsMy4zMDUsMy44NDQsNS42MTIsNy4yNTksNS42MTJoMTA4Ljg3NGMzLjQxNSwwLDYuMzk5LTIuMzA3LDcuMjU5LTUuNjEybDIzLjIxLTg5LjI1QzIyMC40OSw4My4zMDksMjIwLDgwLjkxOCwyMTguNTgsNzkuMDh6DQoJCSBNMTgzLjYzOCwxNjUuNDE4SDg2LjM2MmwtMTkuMzA5LTc0LjI1aDEzNS44OTVMMTgzLjYzOCwxNjUuNDE4eiIvPg0KCTxwYXRoIGQ9Ik0xMDUuNTU2LDUyLjg1MWMxLjQ2NCwxLjQ2MywzLjM4MywyLjE5NSw1LjMwMiwyLjE5NWMxLjkyLDAsMy44NC0wLjczMyw1LjMwNS0yLjE5OGMyLjkyOC0yLjkzLDIuOTI3LTcuNjc5LTAuMDAzLTEwLjYwNw0KCQlMOTIuNTczLDE4LjY2NWMtMi45My0yLjkyOC03LjY3OC0yLjkyNy0xMC42MDcsMC4wMDJjLTIuOTI4LDIuOTMtMi45MjcsNy42NzksMC4wMDIsMTAuNjA3TDEwNS41NTYsNTIuODUxeiIvPg0KCTxwYXRoIGQ9Ik0xNTkuMTc0LDU1LjA0NWMxLjkyLDAsMy44NDEtMC43MzMsNS4zMDYtMi4xOTlsMjMuNTUyLTIzLjU3M2MyLjkyOC0yLjkzLDIuOTI1LTcuNjc5LTAuMDA1LTEwLjYwNg0KCQljLTIuOTMtMi45MjgtNy42NzktMi45MjUtMTAuNjA2LDAuMDA1bC0yMy41NTIsMjMuNTczYy0yLjkyOCwyLjkzLTIuOTI1LDcuNjc5LDAuMDA1LDEwLjYwNw0KCQlDMTU1LjMzOCw1NC4zMTQsMTU3LjI1Niw1NS4wNDUsMTU5LjE3NCw1NS4wNDV6Ii8+DQoJPHBhdGggZD0iTTEzNS4wMDYsNDguMzExYzAuMDAxLDAsMC4wMDEsMCwwLjAwMiwwYzQuMTQxLDAsNy40OTktMy4zNTcsNy41LTcuNDk4bDAuMDA4LTMzLjMxMWMwLjAwMS00LjE0Mi0zLjM1Ni03LjUwMS03LjQ5OC03LjUwMg0KCQljLTAuMDAxLDAtMC4wMDEsMC0wLjAwMSwwYy00LjE0MiwwLTcuNSwzLjM1Ny03LjUwMSw3LjQ5OGwtMC4wMDgsMzMuMzExQzEyNy41MDcsNDQuOTUxLDEzMC44NjQsNDguMzEsMTM1LjAwNiw0OC4zMTF6Ii8+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="  height="200px" alt='' />
                
                 <br/>
                 <Link to="/" exact>
                     <button  style={{marginTop:"100px", height:"50px", width:'50px', borderRadius:"25px", background:"orange"}}><FaPlus size='2rem'></FaPlus></button>
                 </Link>
                </div>
                )
                :
                (
                 <div className="notEmptyCart">
                     {cartItems.length} items in cart
                     <hr/>
                     {cartItems.map((element)=>{
                         return(
                         <div className="cartList"  key={element.id} >
                            <li>
                                <div>
                                    <img src={element.img} alt=""/>
                                    <p>
                                        {element.name} {''} {formatCurrency(element.price)} x {element.count}{''}
                                        <br/>
                                        <button onClickCapture={()=>{this.props.removeFromCart(element)}}>Remove <FaTrash></FaTrash> </button>
                                    </p>
                                </div>
                            </li>
                         </div>
                         )
                     })}
                     <div className='cartTotal'>
                         Total:{" "}
                         {formatCurrency( cartItems.reduce((a,c)=>a + c.price * c.count, 0) )}
                         <button className='proceedButton' onClickCapture={()=>{
                             this.setState({modalIsOpen:true})
                         }} >Proceed</button>
                         <Modal
                            isOpen={this.state.modalIsOpen}
                            onRequestClose={()=>{this.setState({modalIsOpen:false})}}
                            style={
                                {
                                    overlay:{background:'rgba(000, 222, 222, 0.5)'},
                                    content:{height:"50%"}

                                }
                            } 
                            >
                               <div>
                                   <form onSubmit={this.createOrder} id="checkoutForm">
                                    <ul className="form-container">
                                        <li>
                                            <label htmlFor="email">Email <FaEnvelope></FaEnvelope></label>
                                            <input type="email" name="email" id="eamil" required onChange={this.handleInput}/>
                                        </li>
                                        <li>
                                            <label htmlFor="name">Name <FaUser></FaUser></label>
                                            <input type="text" name="name" id="name" required onChange={this.handleInput}/>
                                        </li>
                                        <li>
                                            <label htmlFor="address">Address <FaHome></FaHome></label>
                                            <input type="text" name="address" id="address" required onChange={this.handleInput}/>
                                        </li>
                                    </ul>
                                    <button type="submit">Checkout</button>
                                   </form>
                                 <button onClickCapture={()=>{
                                     this.setState({modalIsOpen:false})
                                 }}>close</button>
                             </div>
                         </Modal>
                     </div>
                 </div>
             ) }
            </div>
        )
    }
}
