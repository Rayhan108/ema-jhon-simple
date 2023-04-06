import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ cart,handleRemoveFromeCart }) => {
//   console.log(cart);
  const { id,img, name, price, quantity, shipping } = cart;
  return (
    <div className="review-item">
      <img src={img} alt="" />
      <div className="review-details">
        <p className="product-title ">{name}</p>
        <p>Price: <span className="orange-text">${price}</span> </p>
        <p>Shipping Charge: <span className="orange-text">${shipping}</span></p>
      </div>

      <button onClick={()=>handleRemoveFromeCart(id)} className="btn-delete">
      <FontAwesomeIcon className="delete-icon" icon={faTrashAlt}/>
      </button>
    </div>
  );
};

export default ReviewItem;
