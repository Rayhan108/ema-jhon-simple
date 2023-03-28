import React from 'react';
import "./Cart.css"
const Cart = ({cart}) => {
    // console.log(cart)
let totalPrice =0;
let totalShiping =0;
    for(const product of cart){
        // console.log(product.price)
        totalPrice+=product.price
        totalShiping +=product.shipping;
    }
    const tax = totalPrice*7/100;
    const grandTotal = totalPrice+totalShiping+tax;
    return (
        <div className='cart'>
                <h4>Order summary</h4>
              <p>selected items:{cart.length}</p>
              <p>Total Price:${totalPrice}</p>
              <p>Shiping:${totalShiping}</p>
              <p>Tax:${tax.toFixed(2)}</p>
              <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;