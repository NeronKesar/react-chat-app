import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import moment from 'moment';
import isEmail from 'validator/lib/isEmail';
import isLength from 'validator/lib/isLength';
import InputField from '../../common/InputField';
import DatePickerField from '../../common/DatePickerField';
import './style.css';

class SignUpForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="SignUpFormRoot">

        <h1 className="SignUpFormTitle">Sign Up</h1>

        <form onSubmit={handleSubmit} className="SignUpFormInputs">

          <div className="SignUpFormInputContainer">

            <label className="SignUpFormLabel">First Name</label>

            <Field name="firstName" component={InputField} />

          </div>

          <div className="SignUpFormInputContainer">

            <label className="SignUpFormLabel">Last Name</label>

            <Field name="lastName" component={InputField} />

          </div>

          <div className="SignUpFormInputContainer">

            <label className="SignUpFormLabel">Birthday</label>

            <Field name="birthday" component={DatePickerField} />

          </div>

          <div className="SignUpFormInputContainer">

            <label className="SignUpFormLabel">Nickname</label>

            <Field name="nickname" component={InputField} />

          </div>

          <div className="SignUpFormInputContainer">

            <label className="SignUpFormLabel">Email</label>

            <Field name="email" component={InputField} />

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

const validate = (
  {
    firstName,
    lastName,
    birthday,
    nickname,
    email,
    password,
    repeatPassword,
  }
) => {
  const errors = {};

  if (!email) {
    errors.email = 'Email is required';
  } else if (!isEmail(email)) {
    errors.email = 'Invalid email';
  }

  if (!nickname) {
    errors.nickname = 'Nickname is required';
  } else if (!isLength(nickname, { min: 5, max: 30 })) {
    errors.nickname = 'Invalid length';
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
