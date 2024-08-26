import React, { useState } from 'react';
import './ProductList.css';
import product1 from './assets/image.png';
import product2 from './assets/image2.png';
import product3 from './assets/image3.png';

function ProductList() {
  const [searchTerm, setSearchTerm] = useState('');

  const products = [
    { id: 1, name: 'Vivo y56 5g', price: '$19.99', image: product1 },
    { id: 2, name: 'Redmi Note 10s', price: '$24.99', image: product2 },
    { id: 3, name: 'Galaxy Note 10', price: '$14.99', image: product3 },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Product List</h2>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for products..."
        className="search-box"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: {product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
}

export default ProductList;
