import React from 'react';
import './FoodCard.css';

function FoodCard({ name, description, price, image, onAddToCart }) {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <img src={image} alt={name} className="card-image" />
          <div className="overlay">
            <h3 className="food-name">{name}</h3>
          </div>
        </div>
        <div className="back">
          <div className="back-content">
            <p>{description}</p>
            <p>Price: ${price}</p>
            <button className="add-to-cart" onClick={() => onAddToCart(name, price)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
