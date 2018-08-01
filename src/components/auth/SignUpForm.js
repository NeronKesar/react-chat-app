import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import isAlpha from 'validator/lib/isAlpha';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import FormField from '../common/FormField';
import InputField from '../common/FormField/InputField';
import DatePickerField from '../common/FormField/DatePickerField';
import './style.css';

class SignUpForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="auth__root">

        <h1 className="auth__title">Sign Up</h1>

        <form onSubmit={handleSubmit} className="auth__inputs">

          <FormField
            label="Nickname"
            name="nickname"
            component={InputField}
          />

          <FormField
            label="First Name"
            name="firstName"
            component={InputField}
          />

          <FormField
            label="Last Name"
            name="lastName"
            component={InputField}
          />

          <FormField
            label="Birthday"
            name="birthday"
            component={DatePickerField}
          />

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

          <FormField
            label="Repeat Password"
            name="repeatPassword"
            component={InputField}
            type="password"
          />

          <div className="auth__button-container">
            <button type="submit" className="auth__button">Submit</button>
          </div>

        </form>

      </div>
    )
  }
}

const validate = (
  {
    nickname,
    firstName,
    lastName,
    birthday,
    email,
    password,
    repeatPassword,
  }
) => {
  const errors = {};

  if (!nickname) {
    errors.nickname = 'Nickname is required';
  } else if (!isLength(nickname, { min: 5, max: 20 })) {
    errors.nickname = 'Invalid length';
  } else if (!(isAlphanumeric(nickname, 'ru-RU') || isAlphanumeric(nickname, 'en-US'))) {
    errors.nickname = 'Only letters and numbers';
  }

  if (!firstName) {
    errors.firstName = 'First name is required'
  } else if (!isLength(firstName, { min: 3, max: 20 })) {
    errors.firstName = 'Invalid length';
  } else if (!(isAlpha(firstName, 'ru-RU') || isAlpha(firstName, 'en-US'))) {
    errors.firstName = 'Only letters';
  }

  if (!lastName) {
    errors.lastName = 'Last name is required';
  } else if (!isLength(lastName, { min: 3, max: 20 })) {
    errors.lastName = 'Invalid length';
  } else if (!(isAlpha(lastName, 'ru-RU') || isAlpha(lastName, 'en-US'))) {
    errors.lastName = 'Only letters';
  }

  if (!birthday) {
    errors.birthday = 'Birthday is required';
  }

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isEmail(email)) {
    errors.email = 'Invalid email';
  }

  if (!password) {
    errors.password = 'Password is required';
  } else if (!isLength(password, { min: 8 })) {
    errors.password = 'Password is to short';
  }

  if (!repeatPassword) {
    errors.repeatPassword = 'Repeat your password'
  } else if (repeatPassword !== password) {
    errors.repeatPassword = 'Passwords do not match';
  }

  return errors;
};

export default reduxForm({
  form: 'signUp',
  validate,
})(SignUpForm);
