import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ to, style, text, className = 'NavigationBarButton' }) {
  return (
    <div className={className}>
      <Link
        to={to}
        style={style}
      >
        <p className="NavigationBarButtonText">{text}</p>
      </Link>
    </div>
  )
}