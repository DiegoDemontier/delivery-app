import React from 'react';
import PropTypes from 'prop-types';
import './OrderCard.css';

function OrderCard({ status, cardRole, display, height }) {
  return (
    <div className="order-card">
      <div className="pedido">
        <span className="small-text">Pedido</span>
        <span
          data-testid={ `${cardRole}_orders__element-order-id-<id>` }
        >
          0001
        </span>
      </div>
      <div className="adress-container">
        <div className={ `adress-container-top ${height}` }>
          <div
            className={ status }
            data-testid={ `${cardRole}_orders__element-delivery-status-<id>` }
          >
            {status}
          </div>
          <div className="third-block">
            <span data-testid={ `${cardRole}_orders__element-order-date-<id>` }>
              08/04/21
            </span>
            <span
              data-testid={ `${cardRole}_orders__element-card-price-<id>` }
            >
              R$ 14,20
            </span>
          </div>
        </div>
        <div
          data-testid="seller_orders__element-card-address-<id>"
          className={ `small-text ${display}` }
        >
          Rua Irmãos Monteiro, Bairo Pedras, 851
        </div>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  status: PropTypes.string.isRequired,
  cardRole: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default OrderCard;
