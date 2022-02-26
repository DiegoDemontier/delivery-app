import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InfoContext from './infoContext';


function InfoProvider({ children }) {


const productList = [
  {
    name: 'Cerveja Stella 250mil',
    quantity: 3,
    price: 3.50
  },
  {
    name: 'Cerveja Skol Latão 450ml',
    quantity: 4,
    price: 4.10
  },
  {
    name: 'Salgadinho Torcida Churrasco',
    quantity: 1,
    price: 1.56
  },
];

const [infoUser, setInfoUser] = useState({name: 'Fulando'});
const [products, setProducts] = useState(productList);
const [totalValue, setTotalValue] = useState(0);

useEffect(()=> {
  const total = products.reduce((acc, curr) => {
    const subtotal = curr.price * curr.quantity;
    const total = acc + subtotal;
    return total;
  }, 0);

  console.log('--------total reduce', total);

  setTotalValue(total);
  
}, []);

  const requestLogin = async ({ email, password }) => {
    const getInfoLogin = await axios
      .post('http://localhost:3001/login', { email, password })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getInfoLogin) return 'Falha na requisiçao';

    setInfoUser({
      ...infoUser,
      getInfoLogin,
    });

    return getInfoLogin;
  };

  const requestRegister = async ({ name, email, password, role }) => {
    const getInfoLogin = await axios
      .post('http://localhost:3001/user', { name, email, password, role })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getInfoLogin) return 'Falha na requisiçao';
    return getInfoLogin;
  };

  const contextValues = {
    requestLogin,
    requestRegister,
    infoUser,
    products,
    totalValue,
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
