import React from 'react';
import PropTypes from 'prop-types';
import './OrderCard.css';

function OrderCard({ status }) {
  return (
    <div className="order-card">
      <div className="pedido">
        <span className="small-text">Pedido</span>
        <span>0001</span>
      </div>
      <div className={ status }>
        {status}
      </div>
      <div className="third-block">
        <span>08/04/21</span>
        <span>R$ 14,20</span>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  status: PropTypes.string.isRequired,
};

export default OrderCard;
