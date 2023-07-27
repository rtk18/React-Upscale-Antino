import React, { useState } from 'react';
import sekiroImg from "../assests/sekiro.jpeg"

const ImageComponent = () => {
  const [isImageVisible, setIsImageVisible] = useState(false);

  const handleShowImage = () => {
    setIsImageVisible(true);
  };

  const handleHideImage = () => {
    setIsImageVisible(false);
  };

  return (
    <div >
      <div>{isImageVisible && <img style={{ width: '20%' ,height:'20%'}} src={sekiroImg} alt="img" />}</div>
      <button onClick={handleShowImage}>Show Image</button>
      <button onClick={handleHideImage}>Hide Image</button>
    </div>
  );
};

export default ImageComponent;
