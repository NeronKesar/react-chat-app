import React from 'react';
import Button from './Button';
import './index.css'

export default function NavigationBar() {
  return (
    <div className="NavigationBar">

      <div className="NavigationBarContainer">

        <Button
          to="/profile"
          style={style}
          text="Profile"
        />

        <Button
          to="/contacts"
          style={style}
          text="Contacts"
        />

        <Button
          to="/chats"
          style={style}
          text="Chats"
        />

      </div>

      <Button
        to="/auth"
        style={style}
        text="Sing In"
        className="SingInButton"
      />

    </div>
  )
}

const style = {
  textDecoration: 'none',
};