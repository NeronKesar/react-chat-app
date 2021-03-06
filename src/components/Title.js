import React from 'react';
import { Link } from 'react-router-dom';

export default function Title({ to, text }) {
  return (
    <div>
      <Link
        to={to}
        style={{ textDecoration: 'none' }}
      >
        <h1 className="app__title">{text}</h1>
      </Link>
    </div>
  )
}
