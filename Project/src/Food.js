import React, { useState } from 'react';
import { foodCategories } from './FoodData';
import FoodCard from './FoodCard';
import './Food.css';

function Food({ onAddToCart }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };


  return (
    <div className="food-container">
      {selectedCategory === null ? (
        <div className="food-category-list">
          {Object.keys(foodCategories).map(category => (
            <button key={category} onClick={() => handleCategoryClick(category)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      ) : (
        <div>
          <button onClick={handleBackClick}>Back</button>
          <div className="food-items">
            {foodCategories[selectedCategory].map(item => (
              <FoodCard
                key={item.name}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
                onAddToCart={onAddToCart}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Food;
