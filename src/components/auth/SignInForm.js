import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import FormField from '../common/FormField';
import InputField from '../common/InputField';
import { PATH_SIGN_UP } from '../../constants/paths';
import './style.css';

class SignInForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="auth__root">

        <h1 className="auth__title">Sign In</h1>

        <form onSubmit={handleSubmit} className="auth__inputs">

          <FormField
            label="Email"
            name="email"
            component={InputField}
          />

          <FormField
            label="Password"
            name="password"
            component={InputField}
            type="password"
          />

          <div className="auth__button-container">
            <button type="submit" className="auth__button">Submit</button>
          </div>

        </form>

        <div className="auth__text">
          Do not have an account? <Link to={PATH_SIGN_UP} className="auth__link">Sign Up</Link>
        </div>

      </div>
    )
  }
}

const validate = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isEmail(email)) {
    errors.email = 'Invalid email';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (password.length < 8) {
    errors.password = 'Password is to short';
  }

  return errors;
};

export default reduxForm({
  form: 'signIn',
  validate,
})(SignInForm);
