import React from 'react'
import { FaBook, FaSort, FaUser } from 'react-icons/fa'
import { useParams } from 'react-router-dom'


export default function DetailsComponent(props) {
  // use the id to find the clicked product and display the details
  let {ID} = useParams()
  let mainID =  parseInt(ID, 10);
  let clickedProduct = props.products.find(obj => {return obj.id === mainID })
  // let style={width:"30vw", backgroundColor:"#22515b", color:"white", borderRadius:"10px" }
  // let product = props.product
  return (
    <div className='detailsComponent'> 
      {/* {console.log(clickedProduct)} */}
      <img src={clickedProduct.img} alt=""/>
      <h2>{clickedProduct.name}</h2>
      {/* <button  className="button primary" style={style} onClickCapture={()=>{props.addToCart(product)}}> <FaCartArrowDown size='2rem'></FaCartArrowDown></button> */}
      <hr></hr>
      <p>{clickedProduct.description}</p>
      <hr></hr>
      <div className="moreInfo">
       <p>Author <FaUser></FaUser>___{clickedProduct.author}</p>
       <p>Type <FaBook></FaBook>___{clickedProduct.type} </p>
       <p>Category <FaSort></FaSort>___{clickedProduct.category}</p>
      </div>
    </div>
  )
}
