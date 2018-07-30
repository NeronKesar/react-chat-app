import React from 'react';
import './style.css';
import image from '../../../assets/images/pentagram-red.png';

const Loader = () => {
  return (
    <img
      className="Loader"
      src={image}
      alt=""
    />
  )
};

export default Loader;
