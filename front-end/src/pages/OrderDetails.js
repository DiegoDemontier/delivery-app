import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import Table from '../components/Table';
import TotalValue from '../components/TotalValue';
import InfoContext from '../context/infoContext';
import './OrderDetails.css';

function OrderDetails({ match }) {
  const { infoUser, totalPrice } = useContext(InfoContext);
  const { params: { id } } = match;

  return (
    <div>
      <NavBar
        user={ infoUser.name }
        ordersClasse="green"
      />
      <h4
        className="order-details-title"
      >
        Detalhe do Pedido
      </h4>
      <div className="order-details-table-container">
        <header className="order-details-header">
          <span
            data-testid={
              `customer_order_details__element-order-details-label-order-id-${id}`
            }
            className="bold"
          >
            {`PEDIDO ${id};`}
          </span>
          <span
            data-testid={
              `ustomer_order_details__element-order-details-label-seller-name-${id}`
            }
          >
            P. Vend: Fulana Pereira
          </span>
          <span
            data-testid={
              `customer_order_details__element-order-details-label-order-date-${id}`
            }
            className="date bold"
          >
            07/04/2021
          </span>
          <span
            data-testid={
              `customer_order_details__element-order-details-label-delivery-status-${id}`
            }
            className="status bold"
          >
            ENTREGUE
          </span>
          <span
            data-testid={ `customer_order_details__button-delivery-check-${id}` }
            className="marcador bold"
          >
            MARCAR COMO ENTREGUE
          </span>
        </header>

        <Table displayName="no-display" datatest="order-details" />
        <TotalValue value={ totalPrice } />
      </div>
    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default OrderDetails;

// verde claro: #2FC18C
