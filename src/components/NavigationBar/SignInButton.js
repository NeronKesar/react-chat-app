import React from 'react';
import { Link } from 'react-router-dom';

export default function SignInButton() {
  return (
    <div className="SingInButton">
      <Link
        className="SingInText"
        to="/auth"
        style={{ textDecoration: 'none' }}
      >
        Sing In
      </Link>
    </div>
  )
}