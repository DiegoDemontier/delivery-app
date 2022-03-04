import React from 'react';
import './TotalValue.css';
import PropTypes from 'prop-types';

function TotalValue({ value, dataTestid }) {
  return (
    <span
      data-testid={ dataTestid }
      className="total-value"
    >
      Total R$
      { ` ${value.toFixed(2).replace('.', ',')}` }
    </span>
  );
}

TotalValue.propTypes = {
  value: PropTypes.number.isRequired,
  dataTestid: PropTypes.string.isRequired,
};

export default TotalValue;
