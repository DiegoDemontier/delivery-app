import React from 'react';
import PropTypes from 'prop-types';
import './InnerGreenButton.css';

function InnerGreenButton({ text, datatestid }) {
  return (
    <button type="button" className="inner-green-button" datat-testis={datatestid}>
      { text }
    </button>
  );
}

export default InnerGreenButton;

InnerGreenButton.propTypes = {
  text: PropTypes.string.isRequired,
};
