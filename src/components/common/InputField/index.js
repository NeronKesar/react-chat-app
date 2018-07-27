import React from 'react';
import './style.css';

function InputField(props) {
  const { input, type, meta: { error, touched } } = props;
  const errorStyle = (touched && error) ? { boxShadow: '1px 1px 10px red, 1px 1px 10px red, 1px 1px 10px red' } : {};
  const errorText = touched && error && <div className="ErrorFieldErrorText">{error}</div>;

  return (
    <div className="ErrorFieldRoot">

      <input
        {...input}
        type={type}
        style={errorStyle}
        className="ErrorFieldInput"
      />

      {errorText}

    </div>
  )
}

export default InputField;
