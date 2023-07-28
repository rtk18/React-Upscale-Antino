import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: 'Your Name',
    age: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submitted: Name - ${formData.name}, Age - ${formData.age}`);
  };

  return (
    <form onSubmit={handleSubmit} style={formStyles}>
      <div style={inputContainerStyles}>
        <label htmlFor="name" style={labelStyles}>Name:</label>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} style={inputStyles} />
      </div>
      <div style={inputContainerStyles}>
        <label htmlFor="age" style={labelStyles}>Age:</label>
        <input type="number" id="age" name="age" value={formData.age} onChange={handleChange} style={inputStyles} />
      </div>
      <button type="submit" style={submitButtonStyles}>Submit</button>
    </form>
  );
};

const formStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  // backgroundColor: '#87ceeb', // Sky blue color
  padding: '2rem',
  borderRadius: '8px',
  boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
};

const inputContainerStyles = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '1rem',
};

const labelStyles = {
  marginRight: '0.5rem',
  fontWeight: 'bold',
  width: '80px', // Fixed width for labels to create consistent spacing
  textAlign: 'right', // Right-align the labels
};

const inputStyles = {
  padding: '0.5rem',
  borderRadius: '4px',
  border: '1px solid #ccc',
  flex: 1, // Let the input box occupy remaining space
};

const submitButtonStyles = {
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  backgroundColor: '#4682b4', // Darker shade of sky blue
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

export default Form;
