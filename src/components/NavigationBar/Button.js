import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ to, text, className = 'navigation-bar__button' }) {
  return (
    <div className={className}>
      <Link
        to={to}
        style={{ textDecoration: 'none' }}
      >
        <p className="navigation-bar__button-text">{text}</p>
      </Link>
    </div>
  )
}
