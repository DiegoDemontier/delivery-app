import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Table from '../components/Table';
import TotalValue from '../components/TotalValue';
import InfoContext from '../context/infoContext';
import socket from '../utils/socketClient';
import './OrderDetails.css';

function OrderDetails({ match }) {
  const history = useHistory();
  const { params: { id } } = match;
  const { infoUser, totalPrice, requestOrderDetails } = useContext(InfoContext);
  const [orderDetails, setOrderDetails] = useState({});
  const [saleDetails, setSaleDetails] = useState({
    products: [],
    seller: {},
    date: '',
    status: '',
    totalPrice: '',
  });
  const prefix = 'customer_order_details__';
  const setDate = (date) => {
    const newDate = new Date(date);
    const day = String(newDate.getDate()).padStart(2, '0');
    const month = String(newDate.getMonth() + 1).padStart(2, '0');
    const year = newDate.getFullYear();

    return `${day}/${month}/${year}`;
  };

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = async () => {
      setOrderDetails(await requestOrderDetails(user.token, id));
    };
    response();
  }, [requestOrderDetails, id]);

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

  useEffect(() => {
    socket.on('refreshStatus', (status) => {
      setSaleDetails((prev) => ({
        ...prev, status,
      }));
    });
  }, [setSaleDetails]);

  const handleClick = () => {
    const { role } = infoUser;
    const status = 'Entregue';

    socket.emit('changeStatus', { id, status, role });
  };

  return (
    <div>
      <NavBar
        user={ infoUser.name }
        handleClickNav={ () => history.push('/customer/products') }
        suffix="products"
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
            data-testid={ `${prefix}element-order-details-label-order-id` }
            className="bold"
          >
            {`PEDIDO ${id};`}
          </span>
          <span
            data-testid={ `${prefix}element-order-details-label-seller-name` }
          >
            {`P. Vend: ${saleDetails.seller}`}
          </span>
          <span
            data-testid={ `${prefix}element-order-details-label-order-date` }
            className="date bold"
          >
            {saleDetails.date}
          </span>
          <span
            data-testid={ `${prefix}element-order-details-label-delivery-status` }
            className="status bold"
          >
            {saleDetails.status}
          </span>
          <button
            type="button"
            data-testid={ `${prefix}button-delivery-check` }
            className="marcador bold"
            onClick={ handleClick }
            disabled={ saleDetails.status !== 'Em Trânsito' }
          >
            MARCAR COMO ENTREGUE
          </button>
        </header>

        <Table
          products={ saleDetails.products }
          displayName="no-display"
          datatest="order-details"
        />
        <TotalValue
          dataTestid={ `${prefix}element-order-total-price` }
          value={ Number(totalPrice).toFixed(2).replace('.', ',') }
        />
      </div>
    </div>
  );
}

OrderDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default OrderDetails;
