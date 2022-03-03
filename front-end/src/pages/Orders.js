import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';
import './Orders.css';
import OrderCard from '../components/OrderCard';

function Orders() {
  const { infoUser } = useContext(InfoContext);

  return (
    <div>
      <div>
        <NavBar
          user={ infoUser.name }
          ordersClasse="green"
        />
      </div>
      <div className="orders-container">
        <OrderCard
          status="pendente"
          cardRole="customer"
          display="d-none"
          height="h-145"
        />
        <OrderCard
          status="preparando"
          cardRole="customer"
          display="d-none"
          height="h-145"
        />
        <OrderCard
          status="entregue"
          cardRole="customer"
          display="d-none"
          height="h-145"
        />
      </div>
    </div>
  );
}

export default Orders;
