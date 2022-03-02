import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';

function Orders() {
  const { infoUser } = useContext(InfoContext);

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
