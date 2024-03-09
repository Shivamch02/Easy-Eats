import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearItems, removeItem } from '../utils/cartslice';
import CartRestaurantcard from './cartrestaurantcard';

const cartpage = () => {
    const cartItems =useSelector((store)=>store.cart.items);
    const dispatch=useDispatch();
    const removeCart=()=>{
        dispatch(removeItem())
    }
    const clearCart=()=>{
        dispatch(clearItems())
    }
    return (
        <div className='cart-page-container'>
        <div className='top'>
            <h2>Shopping Cart</h2>
            <h2> Cart Items - {cartItems.length}</h2>
            <button onClick={()=> clearCart()}> Clear cart</button>
            </div>
            <div className='cart_div'>
            {cartItems.map((cartItem, index) => (
                    <CartRestaurantcard key={index} {...cartItem} />
                ))}

            </div>
            <p> Total-items : {cartItems.length}</p>
            
        </div>
    )
  
}
export default cartpage;

