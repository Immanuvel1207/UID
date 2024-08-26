// Bill.js
import React, { useState } from 'react';

function Bill() {
  const [items, setItems] = useState([{ name: '', price: '' }]);
  const [total, setTotal] = useState(0);

  const handleItemChange = (index, event) => {
    const values = [...items];
    values[index][event.target.name] = event.target.value;
    setItems(values);
    calculateTotal(values);
  };

  const addItem = () => {
    setItems([...items, { name: '', price: '' }]);
  };

  const calculateTotal = (items) => {
    const total = items.reduce((sum, item) => sum + (parseFloat(item.price) || 0), 0);
    setTotal(total);
  };

  return (
    <div>
      <h1>Bill Calculator</h1>
      {items.map((item, index) => (
        <div key={index}>
          <input
            type="text"
            name="name"
            value={item.name}
            placeholder="Item Name"
            onChange={(e) => handleItemChange(index, e)}
          />
          <input
            type="number"
            name="price"
            value={item.price}
            placeholder="Item Price"
            onChange={(e) => handleItemChange(index, e)}
          />
        </div>
      ))}
      <button onClick={addItem}>Add Item</button>
      <h2>Total: ${total.toFixed(2)}</h2>
    </div>
  );
}

export default Bill;
