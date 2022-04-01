import React from "react";
import "./Product.css";
import { FaStar, FaRupeeSign } from "react-icons/fa";

function Product(props) {
  return (
    <div className="product">
      <div className="product_info">
        <p>{props.title}</p>
        <p className="product_price">
          <small>
            <FaRupeeSign />
          </small>
          <strong>{props.price}</strong>
        </p>
        <div className="product_rating">
          {Array(props.rating)
            .fill()
            .map((_) => (
              <p><FaStar color="#FFD700" /></p>
            ))}
        </div>
      </div>

      <img src={props.image} />
      <button>Add to basket</button>
    </div>
  );
}

export default Product;
