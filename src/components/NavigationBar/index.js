import React, { Component } from 'react';
import Button from './Button';
import {
  PATH_PROFILE,
  PATH_CONTACTS,
  PATH_CHATS,
  PATH_AUTH,
} from '../../constants/paths';

import './style.css'

class NavigationBar extends Component {
  render() {
    return (
      <div className="NavigationBar">

        <div className="NavigationBarContainer">

          <Button
            to={PATH_PROFILE}
            text="Profile"
          />

          <Button
            to={PATH_CONTACTS}
            text="Contacts"
          />

          <Button
            to={PATH_CHATS}
            text="Chats"
          />

        </div>

        <Button
          to={PATH_AUTH}
          text="Sing In"
          className="SignInButton"
        />

      </div>
    )
  }
}

export default NavigationBar;
