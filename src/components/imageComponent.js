import React, { useState } from 'react';
import sekiroImg from '../assests/sekiro.jpeg';

const ImageComponent = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleShowImage = () => {
    setIsImageVisible(true);
  };

  const handleHideImage = () => {
    setIsImageVisible(false);
  };

  return (
    <div style={containerStyles}>
      <h1 style={headingStyles}>Image Component</h1>
      <div style={buttonContainerStyles}>
        <button style={buttonStyles} onClick={handleShowImage}>
          Show Image
        </button>
        <button style={buttonStyles} onClick={handleHideImage}>
          Hide Image
        </button>
      </div>
      <div style={imageContainerStyles}>
        {isImageVisible && <img style={imageStyles} src={sekiroImg} alt="Sekiro" />}
      </div>
    </div>
  );
};

const containerStyles = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem',
};

const headingStyles = {
  marginBottom: '1rem',
  fontSize: '2rem',
  color: '#333',
};

const buttonContainerStyles = {
  display: 'flex',
  gap: '1rem',
  
};

const buttonStyles = {
  padding: '0.5rem 1rem',
  borderRadius: '4px',
  backgroundColor: '#0099CC', // Sky blue color
  color: '#fff',
  border: 'none',
  cursor: 'pointer',
};

const imageContainerStyles = {
  marginBottom: '1rem',
};

const imageStyles = {
  width: '50%', // Adjust the image size as needed
  height: 'auto',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
};

export default ImageComponent;
