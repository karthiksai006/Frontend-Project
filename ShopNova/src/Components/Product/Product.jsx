import React from 'react'
import "./product.css"
import addgreen from "../../assets/add_icon_green.png"
import removered from "../../assets/remove_icon_red.png"
import {useContext} from 'react'
import { StoreContext } from '../../context/StoreContext'

const Product = ({id,name,price,image}) => {
  const {cartItems,addToCart,removeFromCart,incCartCount}=useContext(StoreContext)


  return (
    <div className='product'>
        <img src={image} alt="" />
        <div className="product-details">
            <span className='Name'>{name}</span>
            <span className='Price'>{price}</span>
            {!cartItems[id]
               ?<button onClick={()=>{addToCart(id); incCartCount();} }>Add To Cart</button>
               :<div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={removered} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={addgreen} alt="" />
               </div>
            }
        </div>
    </div>
  )
}

export default Product