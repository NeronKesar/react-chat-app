import React from 'react';
import './style.css';

const InputField = (props) => {
  const { input, type, meta: { error, touched } } = props;
  const className = (touched && error) ? 'ErrorFieldInputError' : 'ErrorFieldInput';
  const errorText = touched && error && <div className="ErrorFieldErrorText">{error}</div>;

  return (
    <div className="ErrorFieldRoot">

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
