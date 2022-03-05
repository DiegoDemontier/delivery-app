import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';
import './Orders.css';
import OrderCard from '../components/OrderCard';

function Orders() {
  const { infoUser, requestOrders } = useContext(InfoContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = async () => {
      setOrders(await requestOrders(user.token));
    };
    response();
  }, [requestOrders]);

  console.log('--------', orders);

  console.log(orders);
  return (
    <div>
      <div>
        <NavBar
          user={ infoUser.name }
          ordersClasse="green"
          text="PRODUTOS"
        />
      </div>
      <div className="orders-container">

        {
          orders ? orders.map((item) => (
            <Link to={ `/customer/orders/${item.id}` } className="link" key={ item.id }>
              <OrderCard
                key={ item.id }
                status={ item.status }
                cardRole="customer"
                display="d-none"
                height="h-145"
                item={ item }
              />
            </Link>)) : null
        }
      </div>
    </div>
  );
}

export default Orders;
