import React from 'react';
import Header from './Header';
import ProductList from './ProductList';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <div className="content">
          <h2>Welcome to MobiTech</h2>
          <ProductList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
