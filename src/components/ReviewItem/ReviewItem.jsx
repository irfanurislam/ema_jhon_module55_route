import React from "react";
import "./ReviewItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const ReviewItem = ({ product,handleRemoveFromCart  }) => {
  const { img, id, price, name, quantity } = product;
  return (
    <div className="review-item">
      <img src={img} alt="review image" />
      <div className="review-details">
        <p className="prouct-title">{name}</p>
        <p>
          price : <span className="orange-text">$ {price}</span>
        </p>
        <p>
          quantity : <span className="orange-text">{quantity}</span>
        </p>
      </div>
      <button onClick={() => handleRemoveFromCart(id)} className="btn-delete">
        <FontAwesomeIcon className="delete-icon" icon={faTrashAlt} />
      </button>
    </div>
  );
};

export default ReviewItem;
