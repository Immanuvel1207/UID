import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [quantity, setQuantity] = useState(1);

  const addItem = (e) => {
    e.preventDefault();
    
    if (name && description && quantity > 0) {
      const newItem = { name, description, quantity };
      setItems([...items, newItem]);
      
      // Clear form fields after adding the item
      setName('');
      setDescription('');
      setQuantity(1);
    }
  };

  return (
    <div className="container">
      <h1>Add New Item</h1>
      
      <form className="item-form" onSubmit={addItem}>
        <div className="form-group">
          <label htmlFor="name">Item Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="1"
            required
          />
        </div>

        <button type="submit" className="btn">Add Item</button>
      </form>

      <div className="item-list">
        <h2>Items List</h2>
        {items.length === 0 ? (
          <p>No items added yet.</p>
        ) : (
          <ul>
            {items.map((item, index) => (
              <li key={index} className="item">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <p><strong>Quantity:</strong> {item.quantity}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default App;
