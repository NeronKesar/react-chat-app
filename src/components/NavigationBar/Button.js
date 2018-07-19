import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ to, style, text }) {
  return (
    <div className="NavigationBarButton">
      <Link
        to={to}
        style={style}
      >
        <text className="NavigationBarButtonText">{text}</text>
      </Link>
    </div>
  )
}