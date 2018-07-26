import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import ErrorField from '../../common/ErrorField';
import './style.css';

class SignInForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="SignInFormRoot">
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit} className="SignInFormInputs">
          <div>
            <label>Email</label>
            <Field name="email" component={ErrorField} />
          </div>
          <div>
            <label>Password</label>
            <Field name="password" component={ErrorField} type="password" />
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

  if (!email) errors.email = 'Email is required';

  if (!password) errors.password = 'Password is required';

  return errors;
};

export default reduxForm({
  form: 'auth',
  validate,
})(SignInForm);
