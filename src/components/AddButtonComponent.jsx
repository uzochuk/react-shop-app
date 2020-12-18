import React, { Component } from 'react'
import { FaCartArrowDown } from 'react-icons/fa'
export default class AddButtonComponent extends Component {

     style = {
      backgroundColor:"#22515b",
      width:"auto",
      color:"white"
    }
    render() {
        return (
            <button className='button primary' onClickCapture={()=>alert('item added')} style={this.style}> <FaCartArrowDown size='1rem'></FaCartArrowDown></button>
        )
    }
}
