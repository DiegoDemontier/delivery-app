import React from 'react';
import PropTypes from 'prop-types';
import './GreenButton.css';

function GreenButton({ text, datatestid, buttonState }) {
  console.log(buttonState);
  return (
    <button
      type="button"
      className="green-button"
      data-testid={ datatestid }
      disabled={ false }
    >
      { text }
    </button>
  );
}

export default GreenButton;

GreenButton.propTypes = {
  text: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
  buttonState: PropTypes.bool,
};
