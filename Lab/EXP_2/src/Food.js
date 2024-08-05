import React, { useState } from 'react';
import { foodCategories } from './fooddata';
import FoodCard from './foodCard';
import './Food.css';

function Food(props) {
  const { onAddToCart, onGetMenu } = props;
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
  };

  const handleGetMenuClick = () => {
    const phoneNumber = prompt("Enter your phone number:");
    if (phoneNumber) {
      onGetMenu(phoneNumber);
    }
  };

  return (
    <div className="food-container">
      <button onClick={handleGetMenuClick}>Get Menu</button>
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
