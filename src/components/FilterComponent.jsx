import React, { Component } from 'react'
import{FaSearch} from 'react-icons/fa'
export default class FilterComponent extends Component {
    render() {
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
         
         </>
        )
    }
}
