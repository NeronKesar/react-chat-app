import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingInForm from '../../auth/SignInForm';
import { signIn, moduleName } from '../../../ducks/auth';
import Loader from '../../common/Loader';
import './style.css';

class SignIn extends Component {
  handleSingIn = ({ email, password }) => {
    if (this.props.user.email === email) return;

    this.props.signIn(email, password);
  };

  renderLoader = () => {
    return (
      <div className="AuthLoaderContainer">
        <Loader />
      </div>
    )
  };

  render() {
    return (
      <div className="AuthContainer">

        {
          this.props.loading
          ? this.renderLoader()
          : <SingInForm onSubmit={this.handleSingIn} />
        }

      </div>
    )
  }
}

export default connect(state => ({
  loading: state[moduleName].loading,
  user: state[moduleName].user,
}), { signIn })(SignIn);
