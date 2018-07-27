import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingInForm from '../../auth/SignInForm';
import { signIn, moduleName } from '../../../ducks/auth';
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
}), { signIn, })(Auth);
