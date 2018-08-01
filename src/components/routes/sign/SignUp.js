import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingUpForm from '../../auth/SignUpForm';
import { signUp, moduleName } from '../../../ducks/auth';
import Loader from '../../common/Loader';
import './style.css';

class SignUp extends Component {
  handleSingUp = ({ email, userName, password }) => {};

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
            : <SingUpForm onSubmit={this.handleSingUp} />
        }
      </div>
    )
  }
}

export default connect(state => ({
  loading: state[moduleName].loading,
  user: state[moduleName].user,
}), { signUp })(SignUp);
