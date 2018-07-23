import React, { Component } from 'react';
import SingInForm from '../../auth/SignInForm';
import SignUpForm from '../../auth/SignUpForm';
import { Route, NavLink } from 'react-router-dom';
import { PATH_SIGN_IN, PATH_SIGN_UP } from '../../../constants/paths';
import './style.css';

class Auth extends Component {
  renderSignIn = () => <SingInForm onSubmit={this.handleSingIn} />;

  renderSignUp = () => <SignUpForm onSubmit={this.handleSingUp} />;

  handleSingIn = values => {
    console.log('SING IN VALUES:', values);
  };

  handleSingUp = values => {
    console.log('SING UP VALUES:', values);
  };

  render() {
    return (
      <div className="AuthContainer">
        <NavLink to={PATH_SIGN_IN} activeStyle={{ color: 'red' }}>Sing In</NavLink>
        <NavLink to={PATH_SIGN_UP} activeStyle={{ color: 'red' }}>Sing Up</NavLink>

        <Route path={PATH_SIGN_IN} render={this.renderSignIn} />
        <Route path={PATH_SIGN_UP} render={this.renderSignUp} />
      </div>
    )
  }
}

export default Auth;
