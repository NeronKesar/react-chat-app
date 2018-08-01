import React from 'react';
import { Field } from 'redux-form';
import './style.css';

const FormField = props => {
  const { label, name, component, type = '' } = props;

  return (
    <div className="form-field__root">

      <label className="form-field__label">{label}</label>

      <Field name={name} component={component} type={type} />

    </div>
  )
};

export default FormField;
