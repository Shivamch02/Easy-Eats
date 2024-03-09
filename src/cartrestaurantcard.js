import React from 'react'
import { IMG_CDN_URL } from "../constants";
import { useDispatch } from 'react-redux'
import { addItem, removeItem } from '../utils/cartslice'
const CartRestaurantcard=(props)=>{
    const dispatch =useDispatch()
      
        const removecart =(item)=>{
            dispatch(removeItem(item))
        }
    return (
        <div className="card">
        <img
        src={
          IMG_CDN_URL+
          props.imageId
        }
        />
            <h2>{props.name}</h2>
            <h4>Price:-{props.price/100}</h4>
            <button className="rmv_btn" onClick={()=>removecart(props)}>Remove</button>
           
        </div>
    );
}
export default CartRestaurantcard
