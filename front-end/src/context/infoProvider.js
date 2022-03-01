import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const REQUEST_FAILED = 'Falha na requisiçao';

  useEffect(() => {
    const total = productsInCart.reduce((acc, curr) => {
      const subtotal = curr.price * curr.quantity;
      const totalSum = acc + subtotal;
      return totalSum;
    }, 0);

    setTotalValue(total);
  }, [productsInCart]);

  const requestLogin = async ({ email, password }) => {
    const getInfoLogin = await axios
      .post('http://localhost:3001/login', { email, password })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getInfoLogin) return REQUEST_FAILED;

    return getInfoLogin;
  };

  const requestRegister = async ({ name, email, password, role }) => {
    const getInfoLogin = await axios
      .post('http://localhost:3001/user', { name, email, password, role })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getInfoLogin) return REQUEST_FAILED;
    return getInfoLogin;
  };

  const requestAllProducts = async () => {
    const getInProducts = await axios
      .get('http://localhost:3001/product')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getInProducts) return REQUEST_FAILED;
    return getInProducts;
  };

  const contextValues = {
    requestLogin,
    requestRegister,
    infoUser,
    totalValue,
    requestAllProducts,
    productsInCart,
    setProductsInCart,
  };

  return (
  // diponibiliza os estados e funcoes para o context
  //  ira englobar toda aplicaçao e fornecer esses estados e funcoes
    <InfoContext.Provider value={ contextValues }>
      { children }
    </InfoContext.Provider>
  );
}

export default InfoProvider;

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
