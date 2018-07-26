import React from 'react';
import './ErrorField.css';

function ErrorField(props) {
  const { input, type, meta: { error, touched } } = props;
  const errorStyle = (touched && error) ? { boxShadow: '1px 1px 10px red, 1px 1px 10px red, 1px 1px 10px red' } : {};

  return (
    <div className="ErrorFieldRoot">
      <input
        {...input}
        type={type}
        style={errorStyle}
        className="ErrorFieldInput"
      />
    </div>
  )
}

export default ErrorField;
