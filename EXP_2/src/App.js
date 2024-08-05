import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Food from './Food';
import Cart from './Cart';
import Nav from './Nav';
import Home from './Home';
import Bill from './Bill';
import './App.css';

function App() {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (itemName, itemPrice) => {
    const quantity = prompt("Enter the quantity:");
    if (quantity && !isNaN(quantity)) {
      const existingItem = cart.find(item => item.name === itemName);
      if (existingItem) {
        existingItem.quantity += parseInt(quantity);
        setCart([...cart]);
      } else {
        const newItem = { name: itemName, price: itemPrice, quantity: parseInt(quantity) };
        setCart([...cart, newItem]);
      }
    }
  };

  const handleDeleteItem = (itemName) => {
    setCart(cart.filter(item => item.name !== itemName));
  };

  const handleEditQuantity = (itemName, newQuantity) => {
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      const updatedCart = cart.map(item => {
        if (item.name === itemName) {
          return { ...item, quantity: newQuantity };
        }
        return item;
      });
      setCart(updatedCart);
    }
  };

  const handleGetMenu = (phoneNumber) => {
    // Send the menu items and prices to the phone number
    alert(`Menu sent to ${phoneNumber}`);
  };

  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/food" element={<Food onAddToCart={handleAddToCart} onGetMenu={handleGetMenu} />} />
          <Route path="/cart" element={<Cart cartItems={cart} onDeleteItem={handleDeleteItem} onEditQuantity={handleEditQuantity} />} />
          <Route path="/bill" element={<Bill />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
