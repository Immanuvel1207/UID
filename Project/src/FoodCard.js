import React from 'react';
import './FoodCard.css';

function FoodCard({ name, description, price, image, onAddToCart }) {
  return (
    <div className="card">
      <div className="content">
        <div className="front">
          <img src={require(`./assets/${image}`)} alt={name} className="food-image" />
          <div className="front-content">
            <div className="title-overlay">
              <p className="title">{name}</p>
            </div>
          </div>
        </div>
        <div className="back">
          <div className="back-content">
            <p className="price">${price.toFixed(2)}</p>
            <button className="add-to-cart" onClick={() => onAddToCart(name, price)}>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
