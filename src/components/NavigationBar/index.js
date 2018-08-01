import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut, moduleName } from '../../ducks/auth';
import Button from './Button';
import {
  PATH_PROFILE,
  PATH_CONTACTS,
  PATH_CHATS,
  PATH_SIGN_IN,
} from '../../constants/paths';

import './style.css'

class NavigationBar extends Component {
  handleSignOut = () => this.props.signOut();

  renderSignButton = () => {
    if (!!this.props.user) {
      return (
        <div>

          <label className="navigation-bar__user-email">{this.props.user.email}</label>

          <button
            className="navigation-bar__sign-out-button"
            onClick={this.handleSignOut}
          >
            Sign Out
          </button>

        </div>
      )
    } else {
      return (
        <div className="navigation-bar__sign-in-button-container">
          <Button
            to={PATH_SIGN_IN}
            text="Sing In"
            className="navigation-bar__sign-in-button"
          />
        </div>
      )
    }
  };

  render() {
    return (
      <div className="navigation-bar__root">

        <div className="navigation-bar__container">

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

        {this.renderSignButton()}

      </div>
    )
  }
}

export default connect(state => ({
  user: state[moduleName].user,
}), { signOut })(NavigationBar);
