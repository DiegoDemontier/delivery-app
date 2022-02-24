import React from 'react';
import PropTypes from 'prop-types';
import './GreenButton.css';

function GreenButton({ text, datatestid, buttonState, handleClick }) {
  console.log(buttonState);
  return (
    <button
      type="button"
      className="green-button"
      data-testid={ datatestid }
      disabled={ buttonState }
      onClick={ handleClick }
    >
      { text }
    </button>
  );
}

export default GreenButton;

GreenButton.propTypes = {
  text: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  buttonState: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
