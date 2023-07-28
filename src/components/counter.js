import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
    <div style={containerStyles}>
      <h1 style={headerStyles}>Counter Component</h1>
      <h2 style={countStyles}>Count: {count}</h2>
      <button style={buttonStyles} onClick={handleIncrement}>
        Increment +
      </button>
      <button style={buttonStyles} onClick={handleDecrement}>
        Decrement -
      </button>
    </div>
  );
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  // backgroundColor: '#0099CC',
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
};

const headerStyles = {
  // color: '#fff',
  fontSize: '2rem',
  fontWeight: 'bold',
  marginBottom: '1rem',
};

const countStyles = {
  // color: '#fff',
  fontSize: '1.5rem',
  marginBottom: '1rem',
};

const buttonStyles = {
  padding: '1rem 1rem 1rem 1rem',
  borderRadius: '4px',
  backgroundColor: '#4682b4', // Darker shade of sky blue
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
  marginRight: '0.5rem',
};

export default Counter;
