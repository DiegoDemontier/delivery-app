import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function Input({ labelName,
  inputPlaceholder,
  name,
  type,
  datatestid,
  handleChangeLogin,
  value }) {
  return (
    <>
      <label htmlFor={ name } className="label">
        { labelName }
      </label>
      <input
        type={ type }
        placeholder={ inputPlaceholder }
        name={ name }
        value={ value }
        className="input"
        data-testid={ datatestid }
        onChange={ handleChangeLogin }
      />
    </>
  );
}

export default Input;

Input.propTypes = {
  labelName: PropTypes.string.isRequired,
  inputPlaceholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  handleChangeLogin: PropTypes.func.isRequired,
  value: PropTypes.string,
};
