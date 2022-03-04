import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import Table from '../components/Table';
import TotalValue from '../components/TotalValue';
import InfoContext from '../context/infoContext';
import './OrderDetails.css';

function OrderDetails({ match }) {
  const { infoUser, totalPrice, requestOrderDetails } = useContext(InfoContext);
  const [orderDetails, setOrderDetails] = useState({});
  const [saleDetails, setSaleDetails] = useState({
    products: [],
    seller: {},
    date: '',
    status: '',
    totalPrice: '',
  });
  const { params: { id } } = match;

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = async () => {
      setOrderDetails(await requestOrderDetails(user.token, id));
    };
    response();
  }, [requestOrderDetails, id]);

  const setDate = (date) => {
    const newDate = new Date(date);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    if (orderDetails.seller !== undefined) {
      setSaleDetails(
        {
          products: orderDetails.products,
          seller: orderDetails.seller.name,
          date: setDate(orderDetails.sale_date),
          status: orderDetails.status,
          totalPrice: orderDetails.totalPrice,
        },
      );
    }
  }, [orderDetails]);

  console.log(saleDetails.date);

  return (
    <div>
      <NavBar
        user={ infoUser.name }
        ordersClasse="green"
        text="PRODUTOS"
      />
      <h4
        className="order-details-title"
      >
        Detalhe do Pedido
      </h4>
      <div className="order-details-table-container">
        <header className="order-details-header">
          <span
            data-testid="customer_order_details__element-order-details-label-order-id"
            className="bold"
          >
            {`PEDIDO ${id};`}
          </span>
          <span
            data-testid="ustomer_order_details__element-order-details-label-seller-name"
          >
            {`P. Vend: ${saleDetails.seller}`}
          </span>
          <span
            data-testid="customer_order_details__element-order-details-label-order-date"
            className="date bold"
          >
            {saleDetails.date}
          </span>
          <span
            data-testid="customer_order_details__element-order
            -details-label-delivery-status"
            className="status bold"
          >
            {saleDetails.status}
          </span>
          <button
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            className="marcador bold"
          >
            MARCAR COMO ENTREGUE
          </button>
        </header>

        <Table
          products={ saleDetails.products }
          displayName="no-display"
          datatest="order-details"
        />
        <TotalValue value={ totalPrice } />
      </div>
    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default OrderDetails;
