import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import emailValidator from 'email-validator';
import InputField from '../../common/InputField';
import './style.css';

class SignUpForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="SignUpFormRoot">

        <h1 className="SignUpFormTitle">Sign Up</h1>

        <form onSubmit={handleSubmit} className="SignUpFormInputs">

          <div className="SignUpFormInputContainer">

            <label className="SignUpFormLabel">Email</label>

            <Field name="email" component={InputField} />

          </div>

          <div className="SignUpFormInputContainer">

            <label className="SignUpFormLabel">User Name</label>

            <Field name="userName" component={InputField} />

          </div>

          <div className="SignUpFormInputContainer">

            <label className="SignUpFormLabel">Password</label>

            <Field name="password" component={InputField} type="password" />

          </div>

          <div className="SignUpFormInputContainer">

            <label className="SignUpFormLabel">Repeat Password</label>

            <Field name="repeatPassword" component={InputField} type="password" />

          </div>

          <div className="SignUpFormSubmitButtonContainer">
            <button type="submit" className="SignUpFormSubmitButton">Submit</button>
          </div>

        </form>

      </div>
    )
  }
}

const validate = ({ email, userName, password, repeatPassword }) => {
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
