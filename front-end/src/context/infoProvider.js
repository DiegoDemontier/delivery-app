import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState([]);
  const [infoUser, setInfoUser] = useState({});
  const [totalPrice, setTotalPrice] = useState(0);

  const REQUEST_FAILED = 'Falha na requisiçao';

  useEffect(() => {
    const total = productsInCart.reduce((acc, curr) => {
      const subtotal = curr.price * curr.salesProducts.quantity;
      const totalSum = acc + subtotal;
      return totalSum;
    }, 0);

    setTotalPrice(total);
  }, [productsInCart]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    setInfoUser(user);
  }, [setInfoUser]);

  const contentType = '\'Content-Type\': \'application/json\',';

  const requestLogin = async ({ email, password }) => {
    const request = await axios
      .post('http://localhost:3001/login', { email, password })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;

    return request;
  };

  const requestRegister = async ({ name, email, password, role }) => {
    const request = await axios
      .post('http://localhost:3001/user', { name, email, password, role })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  const requestAllProducts = async () => {
    const request = await axios
      .get('http://localhost:3001/product')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  const requestAllSellers = async () => {
    const request = await axios
      .get('http://localhost:3001/user/seller')
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  const requestNewSale = async (token, data) => {
    const headers = {
      // 'Content-Type': 'application/json',
      contentType,
      Authorization: token,
    };
    const request = await axios
      .post('http://localhost:3001/sale', data, { headers })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  const requestOrderDetails = async (token, id) => {
    const headers = {
      // 'Content-Type': 'application/json',
      contentType,
      Authorization: token,
    };
    const request = await axios
      .get(`http://localhost:3001/sale/${id}`, { headers })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  const requestOrders = async (token) => {
    const headers = {
      // 'Content-Type': 'application/json',
      contentType,
      Authorization: token,
    };
    const request = await axios
      .get('http://localhost:3001/sale', { headers })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  const requestRegisterUser = async (token, data) => {
    const headers = {
      // 'Content-Type': 'application/json',
      contentType,
      Authorization: token,
    };
    const request = await axios
      .post('http://localhost:3001/admin', data, { headers })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  const requestAllUsers = async (token) => {
    const headers = {
      // 'Content-Type': 'application/json',
      contentType,
      Authorization: token,
    };
    const request = await axios
      .get('http://localhost:3001/admin', { headers })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  const requestdeleteUser = async (token, id) => {
    const headers = {
      // 'Content-Type': 'application/json',
      contentType,
      Authorization: token,
    };
    const request = await axios
      .delete(`http://localhost:3001/admin/${id}`, { headers })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!request) return REQUEST_FAILED;
    return request;
  };

  const contextValues = {
    requestLogin,
    requestRegister,
    totalPrice,
    requestAllProducts,
    infoUser,
    setInfoUser,
    productsInCart,
    setProductsInCart,
    requestAllSellers,
    requestNewSale,
    requestOrderDetails,
    requestOrders,
    requestRegisterUser,
    requestAllUsers,
    requestdeleteUser,
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
