import React, { Component } from 'react'
import{FaSearch} from 'react-icons/fa'
export default class FilterComponent extends Component {
    render() {
        const distinctCategory = [...new Set(this.props.products.map(x=>x.category))]
        const distinctType = [...new Set(this.props.products.map(x=>x.type))]
        
        return (
            <>
            <div className='filter'>
               <p><b>{this.props.count}</b> Books available</p> 
               <p><label for="category">Category:</label>
               <select name="category" id="categorySelect">
                   {distinctCategory.map(x => {
                     return  (<option value={this.props.category} key={x}  onChange={this.props.selectFunction}>
                         {x}
                     </option>)
                   })}
                   </select></p>
                   <p><label for="type">Type:</label>
               <select name="type" id="typeSelect">
                   {distinctType.map(x => {
                     return  (<option value={this.props.type} key={x}  onChange={this.props.selectFunction}>
                         {x}
                     </option>)
                   })}
                   </select></p>
                   <button onClick={this.props.filterFunction}>Go<FaSearch size='1rem'></FaSearch></button>
            </div>
         
         </>
        )
    }
}