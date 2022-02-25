import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
  const requestLogin = async ({ email, password }) => {
    const getInfoLogin = await axios
      .post('http://localhost:3001/login', { email, password })
      .then((res) => res.data)
      .catch((err) => err.response);

    if (!getInfoLogin) return 'Falha na requisiçao';
    return getInfoLogin;
  };

  const contextValues = {
    requestLogin,
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
