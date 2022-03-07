import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';
import Table from '../components/Table';
import TotalValue from '../components/TotalValue';
import './CustomerCheckout.css';
import DetailsForm from '../components/DetailsForm';

function CustomerCheckout() {
  const history = useHistory();
  const { infoUser, totalPrice, productsInCart } = useContext(InfoContext);

  return (
    <div>
      <NavBar
        user={ infoUser.name }
        handleClickNav={ () => history.push('/customer/products') }
        suffix="products"
        productClasse="green"
        text="PRODUTOS"
      />
      <h4
        className="title"
      >
        Finalizar Pedido
      </h4>
      <div className="table-container">
        <Table
          products={ productsInCart }
          displayName="show"
          datatest="checkout"
        />
        <TotalValue
          dataTestid="customer_checkout__element-order-total-price"
          value={ Number(totalPrice).toFixed(2).replace('.', ',') }
        />
      </div>
      <h4 className="title">Detalhes e Endereço para Entrega</h4>
      <div className="table-container">
        <DetailsForm />
      </div>
    </div>
  );
}

export default CustomerCheckout;
