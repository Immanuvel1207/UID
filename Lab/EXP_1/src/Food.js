// Food.js
import React from 'react';
import { foodCategories } from './fooddata';
import FoodCard from './foodCard';
import './Food.css'; // Import CSS for styling

function Food() {
  return (
    <div className="food-container">
      {Object.keys(foodCategories).map(category => (
        <div key={category} className="food-category">
          <h1>{category.charAt(0).toUpperCase() + category.slice(1)}</h1>
          <div className="food-cards">
            {foodCategories[category].map(item => (
              <FoodCard
                key={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Food;
