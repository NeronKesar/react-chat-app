import React from 'react';
import './style.css';

const InputField = (props) => {
  const { input, type, meta: { error, touched } } = props;
  const className = (touched && error) ? 'form-field__input-error' : 'form-field__input';
  const errorText = touched && error && <div className="form-field__error-text">{error}</div>;

  return (
    <div className="form-field__container">

      <input
        {...input}
        type={type}
        className={className}
      />

      {errorText}

    </div>
  )
};

export default InputField;
