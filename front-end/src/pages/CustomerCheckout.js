import React, { useContext } from 'react';
import NavBar from '../components/NavBar';
import InfoContext from '../context/infoContext';
import Tabele from '../components/Table';
import TotalValue from '../components/TotalValue';
import './CustomerCheckout.css';
import DetailsForm from '../components/DetailsForm';

function CustomerCheckout() {
  const { infoUser, totalPrice } = useContext(InfoContext);

  return (
    <div>
      <NavBar
        user={ infoUser.name }
        productClasse="green"
      />
      <h4
        className="title"
      >
        Finalizar Pedido
      </h4>
      <div className="table-container">
        <Tabele />
        <TotalValue value={ totalPrice } />
      </div>
      <h4 className="title">Detalhes e Endereço para Entrega</h4>
      <div className="table-container">
        <DetailsForm />
      </div>
    </div>
  );
}

export default CustomerCheckout;
