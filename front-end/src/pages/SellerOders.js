import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';
import './Orders.css';
import OrderCard from '../components/OrderCard';

function SellerOrders() {
  const { infoUser, requestOrders } = useContext(InfoContext);
  const [sellerOrders, setSellerOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = async () => {
      setSellerOrders(await requestOrders(user.token));
    };
    response();
  }, [requestOrders]);

  return (
    <div>
      <div>
        <NavBar
          user={ infoUser.name }
          suffix="orders"
          ordersClasse="green"
          display="no-display"
          text="PEDIDOS"
        />
      </div>
      <div className="orders-container">
        {
          sellerOrders ? sellerOrders.map((item) => (
            <Link to={ `/seller/orders/${item.id}` } className="link" key={ item.id }>
              <OrderCard
                key={ item.id }
                status={ item.status }
                cardRole="seller"
                display="d-block"
                height="h-110"
                item={ item }
              />
            </Link>)) : null
        }
      </div>
    </div>
  );
}

export default SellerOrders;
