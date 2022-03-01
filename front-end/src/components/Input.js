import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({ labelName,
  inputPlaceholder,
  name,
  type,
  datatestid,
  datatestidLabel,
  handleChange,
  value,
  inputClass,
  labelClass }) {
  return (
    <>
      <label htmlFor={ name } data-testid={ datatestidLabel } className={ labelClass }>
        { labelName }
      </label>
      <input
        type={ type }
        placeholder={ inputPlaceholder }
        name={ name }
        value={ value }
        className={ inputClass }
        data-testid={ datatestid }
        onChange={ handleChange }
      />
    </>
  );
}

export default Input;

Input.defaultProps = {
  datatestidLabel: '',
  inputClass: '',
  labelClass: '',
};

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
  labelClass: PropTypes.string,
  inputPlaceholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  datatestidLabel: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

// Input.defaultProps = {
//   value: '',
// };
