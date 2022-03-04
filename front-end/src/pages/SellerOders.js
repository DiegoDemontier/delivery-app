import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';
import './Orders.css';
import OrderCard from '../components/OrderCard';

function SellerOrders() {
  const { infoUser } = useContext(InfoContext);

  return (
    <div>
      <div>
        <NavBar
          user={ infoUser.name }
          ordersClasse="green"
          display="no-display"
          text="PEDIDOS"
        />
      </div>
      <div className="orders-container">
        <OrderCard
          status="pendente"
          cardRole="seller"
          display="d-block"
          height="h-110"
        />
        <OrderCard
          status="preparando"
          cardRole="seller"
          display="d-block"
          height="h-110"
        />
        <OrderCard
          status="entregue"
          cardRole="seller"
          display="d-block"
          height="h-110"
        />
      </div>
    </div>
  );
}

export default SellerOrders;
