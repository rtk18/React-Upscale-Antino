import React, { useState } from 'react';

const ToggleButton = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div>
      <h1>Toggle Button Component</h1>
      <button onClick={handleToggle}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
};

export default ToggleButton;
