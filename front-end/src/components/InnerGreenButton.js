import React from 'react';
import PropTypes from 'prop-types';
import './InnerGreenButton.css';

function InnerGreenButton({ text, datatestid, gotoRegister }) {
  return (
    <button type="button" className="inner-green-button" data-testid={ datatestid } onClick={gotoRegister}>
      { text }
    </button>
  );
}

export default InnerGreenButton;

InnerGreenButton.propTypes = {
  text: PropTypes.string.isRequired,
  datatestid: PropTypes.string.isRequired,
};
