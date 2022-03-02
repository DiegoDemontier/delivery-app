import React from 'react';
import './TotalValue.css';
import PropTypes from 'prop-types';

function TotalValue({ value }) {
  return (
    <span
      data-testid="customer_checkout__element-order-total-price"
      className="total-value"
    >
      Total R$
      {` ${value}`}
    </span>
  );
}

TotalValue.propTypes = {
  value: PropTypes.number.isRequired,
};

export default TotalValue;
