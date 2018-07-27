import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import emailValidator from 'email-validator';
import InputField from '../../common/InputField';
import './style.css';

class SignInForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="SignInFormRoot">

        <h1 className="SignInFormTitle">Sign In</h1>

        <form onSubmit={handleSubmit} className="SignInFormInputs">

          <div className="SignInFormInputContainer">

            <label className="SignInFormLabel">Email</label>

            <Field name="email" component={InputField} />

          </div>

          <div className="SignInFormInputContainer">

            <label className="SignInFormLabel">Password</label>

            <Field name="password" component={InputField} type="password" />

          </div>

          <div className="SignInFormSubmitButtonContainer">
            <button type="submit" className="SignInFormSubmitButton">Submit</button>
          </div>

        </form>
      </div>
    )
  }
}

const validate = ({ email, password }) => {
  const errors = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!emailValidator.validate(email)) {
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
  form: 'auth',
  validate,
})(SignInForm);
