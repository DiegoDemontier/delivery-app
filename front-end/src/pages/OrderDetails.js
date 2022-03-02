import React from 'react';
import PropTypes from 'prop-types';

function OrderDetails({ match }) {
  const { params: { id } } = match;

  return (
    <h1>{`Detalhes do pedido ${id}`}</h1>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default OrderDetails;
