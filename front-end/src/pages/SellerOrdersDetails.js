import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import TableSellerOrderDetails from '../components/TableSellerOrderDetails';
import TotalValue from '../components/TotalValue';
import InfoContext from '../context/infoContext';

function SellerOrdersDetails({ match }) {
  const { infoUser, totalPrice } = useContext(InfoContext);
  const { params: { id } } = match;
  return (
    <div>
      <NavBar
        user={ infoUser.name }
        ordersClasse="green"
        display="no-display"
        text="PEDIDOS"
      />
      <h4 className="order-details-title">Detalhe do Pedido</h4>

      <div className="order-details-table-container">
        <header className="order-details-header">

          <span
            data-testid="seller_order_details__element-order-details-label-order-id"
            className="bold"
          >
            {`PEDIDO ${id}`}
          </span>
          <span
            data-testid="seller_order_details__element-order-details-label-order-date"
            className="date bold"
          >
            07/04/2021
          </span>
          <span
            data-testid="seller_order_details__element-order-details-
            label-delivery-status"
            className="status bold"
          >
            ENTREGUE
          </span>
          <span
            data-testid="seller_order_details__button-preparing-check"
            className="marcador bold"
          >
            MARCAR COMO ENTREGUE
          </span>
          <span
            data-testid="seller_order_details__button-dispatch-check"
            className="marcador bold"
          >
            SAIU PARA A ENTREGA
          </span>
        </header>

        <TableSellerOrderDetails />
        <TotalValue value={ totalPrice } />
      </div>
    </div>
  );
}

SellerOrdersDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SellerOrdersDetails;
