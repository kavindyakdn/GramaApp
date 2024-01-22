// src/components/InputField.js

import React from 'react';
import PropTypes from 'prop-types';
import './input.css';

const InputField = ({ type, placeholder, onChange, value, className, style, options, ...rest }) => {
  const inputProps = {
    className: `custom-input ${className || ''}`,
    style: style || {},
    type: type || 'text',
    placeholder: placeholder || '',
    onChange: onChange || (() => {}),
    value: value || '',
    ...rest,
  };

  if (type === 'select' && options) {
    return (
      <select {...inputProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  return <input {...inputProps} />;
};

InputField.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'select']),
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
  options: PropTypes.arrayOf(PropTypes.shape({ value: PropTypes.any, label: PropTypes.string })),
};

export default InputField;
