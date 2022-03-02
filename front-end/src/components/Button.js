import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

function Button({
  text,
  buttonClasse,
  buttonDatatestid,
  spanDatatestid,
  buttonState,
  handleClick }) {
  return (
    <button
      type="button"
      className={ buttonClasse }
      data-testid={ buttonDatatestid }
      disabled={ buttonState }
      onClick={ handleClick }
    >
      <span data-testid={ spanDatatestid }>{ text }</span>
    </button>
  );
}

Button.defaultProps = {
  spanDatatestid: '',
  buttonState: false,
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonClasse: PropTypes.string.isRequired,
  buttonDatatestid: PropTypes.string.isRequired,
  spanDatatestid: PropTypes.string,
  buttonState: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
};

export default Button;
