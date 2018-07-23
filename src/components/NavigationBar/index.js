import React from 'react';
import Button from './Button';
import {
  PATH_PROFILE,
  PATH_CONTACTS,
  PATH_CHATS,
  PATH_AUTH,
} from '../../constants/paths';

import './style.css'

export default function NavigationBar() {
  return (
    <div className="NavigationBar">

      <div className="NavigationBarContainer">

        <Button
          to={PATH_PROFILE}
          style={style}
          text="Profile"
        />

        <Button
          to={PATH_CONTACTS}
          style={style}
          text="Contacts"
        />

        <Button
          to={PATH_CHATS}
          style={style}
          text="Chats"
        />

      </div>

      <Button
        to={PATH_AUTH}
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