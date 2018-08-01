import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingInForm from '../../auth/SignInForm';
import { signIn, moduleName } from '../../../ducks/auth';
import Loader from '../../common/Loader';
import './style.css';

class SignIn extends Component {
  handleSingIn = ({ email, password }) => this.props.signIn(email, password);

  renderLoader = () => {
    return (
      <div className="sign__loader-container">
        <Loader />
      </div>
    )
  };

  render() {
    return (
      <div className="sign__container">
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
