import React from 'react';
import PropTypes from 'prop-types';
import './GreenButton.css';

function GreenButton({ text, datatestid }) {
  return (
    <button type="button" className="green-button" data-testid={ datatestid }>
      { text }
    </button>
  );
}

export default GreenButton;

GreenButton.propTypes = {
  text: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
};
