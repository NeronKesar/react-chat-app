import React from 'react';
import './style.css';
import image from '../../../assets/images/pentagram.png';

const Loader = () => {
  return (
    <img
      className="loader"
      src={image}
      alt=""
    />
  )
};

export default Loader;
