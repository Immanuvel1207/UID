import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CounterApp = () => {
  const [count, setCount] = useState(1);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    if (count > 1) {
      setCount(prevCount => prevCount - 1);
    } else {
      toast.error('Value cannot be less than 1!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Counter App</h1>
      <div>
        <button onClick={decrement} style={buttonStyle}>-</button>
        <input type="text" value={count} readOnly style={inputStyle} />
        <button onClick={increment} style={buttonStyle}>+</button>
      </div>
      <ToastContainer />
    </div>
  );
};

const buttonStyle = {
  padding: '10px 20px',
  fontSize: '18px',
  margin: '0 10px',
  cursor: 'pointer',
};

const inputStyle = {
  fontSize: '20px',
  width: '50px',
  textAlign: 'center',
};

export default CounterApp;
