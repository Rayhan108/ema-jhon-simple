import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { Link, useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import "./Order.css"
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCreditCard} from "@fortawesome/free-solid-svg-icons";
const Order = () => {
    const savedCart =useLoaderData()
    // console.log(savedCart)
    const [cart,setCart] =useState(savedCart);

    const handleRemoveFromeCart =(id)=>{
const remaining = cart.filter(product=>product._id !== id);
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
                cart.map(cart=><ReviewItem key={cart._id} handleRemoveFromeCart={handleRemoveFromeCart} cart={cart}></ReviewItem>)
             }
              </div>
           
            <div className="cart-container">
                        <Cart handleClearCart={handleClearCart} cart={cart}> 
                        
                      
                            <Link to="/cheakout" className='proceed-link'><button className='btn-proceed'>Proceed Checkout <FontAwesomeIcon icon={faCreditCard} /> </button></Link>
                          
                         
                        </Cart>
                    </div>
         
        </div>
    );
};

export default Order;