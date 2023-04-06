import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Order.css"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Order = () => {
    const savedCart =useLoaderData()
    // console.log(savedCart)
    const [cart,setCart] =useState(savedCart);

    const handleRemoveFromeCart =(id)=>{
const remaining = cart.filter(product=>product.id !== id);
setCart(remaining)
removeFromDb(id)

    }
    const handleClearCart =()=>{
        setCart([])
        deleteShoppingCart()

    }
    // console.log(cart)

    return (
        <div className='shop-container'>
              
              <div className="review-container">
             {
                cart.map(cart=><ReviewItem key={cart.id} handleRemoveFromeCart={handleRemoveFromeCart} cart={cart}></ReviewItem>)
             }
              </div>
           
            <div className="cart-container">
                        <Cart handleClearCart={handleClearCart} cart={cart}></Cart>
                    </div>
         
        </div>
    );
};

export default Order;