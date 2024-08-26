import React from 'react';
import './Cart.css';

function Cart({ cartItems, onDeleteItem, onEditQuantity }) {
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            <span>{item.name} - Quantity: 
              <input
                type="number"
                value={item.quantity}
                min="0"
                onChange={(e) => onEditQuantity(item.name, parseInt(e.target.value))}
              />
            </span>
            <span> - Total: ${item.price * item.quantity}</span>
            <button onClick={() => onDeleteItem(item.name)}>Delete</button>
          </li>
        ))}
      </ul>
      <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;
