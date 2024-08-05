// FoodCard.js
import React from 'react';
import './FoodCard.css';

function FoodCard({ name, description, price }) {
  return (
    <div className="food-card">
      <h2>{name}</h2>
      <p>{description}</p>
      <p className="price">{price}</p>
    </div>
  );
}

export default FoodCard;
