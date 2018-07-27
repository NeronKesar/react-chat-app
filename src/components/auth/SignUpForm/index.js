import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import emailValidator from 'email-validator';
import InputField from '../../common/InputField';

class SignUpForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div>
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <Field name="email" component={InputField} />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component={InputField} type="password" />
          </div>
          <div>
            <input type="submit" />
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
})(SignUpForm);
