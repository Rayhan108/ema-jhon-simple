import React from "react";
import "./Cart.css";
const Cart = ({ cart }) => {
  // console.log(cart)
  let totalPrice = 0;
  let totalShiping = 0;
  let quantity=0;
  for (const product of cart) {
    // if(product.quantity===0){
    //     product.quantity=1;
    // }
    // console.log(product.price)
    totalPrice += product.price*product.quantity;
    totalShiping += product.shipping;
    quantity+=product.quantity;
  }
  const tax = (totalPrice * 7) / 100;
  const grandTotal = totalPrice + totalShiping + tax;
  return (
    <div className="cart">
      <h4>Order summary</h4>
      <p>selected items:{quantity}</p>
      <p>Total Price:${totalPrice}</p>
      <p>Shiping:${totalShiping}</p>
      <p>Tax:${tax.toFixed(2)}</p>
      <h4>Grand Total:${grandTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
