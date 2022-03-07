import React from 'react';
import PropTypes from 'prop-types';
import './OrderCard.css';

function OrderCard({ status, cardRole, display, height, item }) {
  const setDate = (date) => {
    const newDate = new Date(date);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const date = setDate(item.sale_date);

  return (
    <div className="order-card">
      <div className="pedido">
        <span className="small-text">Pedido</span>
        <span
          data-testid={ `${cardRole}_orders__element-order-id-${item.id}` }
        >
          {item.id}
        </span>
      </div>
      <div className="adress-container">
        <div className={ `adress-container-top ${height}` }>
          <div
            className={ status.toLowerCase() }
            data-testid={ `${cardRole}_orders__element-delivery-status-${item.id}` }
          >
            {status}
          </div>
          <div className="third-block">
            <span data-testid={ `${cardRole}_orders__element-order-date-${item.id}` }>
              { date }
            </span>
            <span
              data-testid={ `${cardRole}_orders__element-card-price-${item.id}` }
            >
              {` R$ ${item.totalPrice.replace('.', ',')}` }
            </span>
          </div>
        </div>
        <div
          data-testid="seller_orders__element-card-address-<id>"
          className={ `small-text ${display}` }
        >
          { `${item.deliveryAddress} ${item.deliveryNumber}` }
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
  item: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default OrderCard;
