import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import SingInForm from '../../auth/SignInForm';
import SignUpForm from '../../auth/SignUpForm';
import { PATH_SIGN_IN, PATH_SIGN_UP } from '../../../constants/paths';
import { signUp, signIn, signOut, moduleName } from '../../../ducks/auth';
import './style.css';

class Auth extends Component {
  handleSingIn = ({ email, password }) => this.props.signIn(email, password);

  render() {
    return (
      <div className="AuthContainer">

        <SingInForm onSubmit={this.handleSingIn} />

      </div>
    )
  }
}

export default connect(state => ({
  loading: state[moduleName].loading,
}), { signUp, signIn, signOut })(Auth);
