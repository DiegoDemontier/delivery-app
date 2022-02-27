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

export default Button;

Button.defaultProps = {
  spanDatatestid: '',
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  buttonClasse: PropTypes.string.isRequired,
  buttonDatatestid: PropTypes.string.isRequired,
  spanDatatestid: PropTypes.string,
  buttonState: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
