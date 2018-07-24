import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SingInForm from '../../auth/SignInForm';
import SignUpForm from '../../auth/SignUpForm';
import { PATH_SIGN_IN, PATH_SIGN_UP } from '../../../constants/paths';
import { signUp, signIn, moduleName } from '../../../ducks/auth';
import './style.css';

class Auth extends Component {
  renderSignIn = () => <SingInForm onSubmit={this.handleSingIn} />;

  renderSignUp = () => <SignUpForm onSubmit={this.handleSingUp} />;

  handleSingIn = ({ email, password }) => this.props.signIn(email, password);

  handleSingUp = ({ email, password }) => this.props.signUp(email, password);

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

export default connect(state => ({
  loading: state[moduleName].loading,
}), { signUp, signIn })(Auth);
