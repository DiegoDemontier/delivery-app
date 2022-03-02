import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';

function Orders({ match }) {
  const { infoUser, totalPrice } = useContext(InfoContext);

  return (
    <div>
      <NavBar
        user={ infoUser.name }
        ordersClasse="green"
      />
    </div>
  );
}

export default Orders;