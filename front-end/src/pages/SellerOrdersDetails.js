import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import TableSellerOrderDetails from '../components/TableSellerOrderDetails';
import TotalValue from '../components/TotalValue';
import InfoContext from '../context/infoContext';
import socket from '../utils/socketClient';

function SellerOrdersDetails({ match }) {
  const history = useHistory();
  const { infoUser, requestOrderDetails } = useContext(InfoContext);
  const { params: { id } } = match;

  const [sellerOrderDetails, setSellerOrderDetails] = useState({});
  const [sellerSaleDetails, setSellerSaleDetails] = useState({
    products: [],
    date: '',
    status: '',
    totalPrice: '',
  });

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = async () => {
      setSellerOrderDetails(await requestOrderDetails(user.token, id));
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
    if (sellerOrderDetails.products !== undefined) {
      setSellerSaleDetails(
        {
          products: sellerOrderDetails.products,
          date: setDate(sellerOrderDetails.sale_date),
          status: sellerOrderDetails.status,
          totalPrice: sellerOrderDetails.totalPrice,
        },
      );
    }
  }, [sellerOrderDetails]);

  useEffect(() => {
    socket.on('refreshStatus', (status) => {
      setSellerSaleDetails((prev) => ({
        ...prev, status,
      }));
    });
  }, [sellerSaleDetails]);

  const handleClick = (status) => {
    const { role } = infoUser;

    socket.emit('changeStatus', { id, status, role });
  };

  const prefix = 'seller_order_details';

  return (
    <div>
      <NavBar
        user={ infoUser.name }
        handleClickNav={ () => history.push('/seller/orders') }
        suffix="orders"
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
            data-testid={ `${prefix}__element-order-details-label-order-date` }
            className="date bold"
          >
            { sellerSaleDetails.date }
          </span>
          <span
            data-testid={ `${prefix}__element-order-details-label-delivery-status` }
            className="status bold"
          >
            { sellerSaleDetails.status }
          </span>
          <button
            data-testid={ `${prefix}__button-preparing-check` }
            className="marcador bold"
            disabled={ !sellerSaleDetails.status.includes('Pendente') }
            onClick={ () => handleClick('Preparando') }
            type="button"
          >
            PREPARAR PEDIDO
          </button>
          <button
            data-testid={ `${prefix}__button-dispatch-check` }
            className="marcador bold"
            disabled={ !sellerSaleDetails.status.includes('Preparando') }
            onClick={ () => handleClick('Em Trânsito') }
            type="button"
          >
            SAIU PARA A ENTREGA
          </button>
        </header>

        <TableSellerOrderDetails
          products={ sellerSaleDetails.products }
        />
        <TotalValue
          value={ Number(sellerSaleDetails.totalPrice).toFixed(2).replace('.', ',') }
          dataTestid="seller_order_details__element-order-total-price"
        />
      </div>
    </div>
  );
}

SellerOrdersDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SellerOrdersDetails;
