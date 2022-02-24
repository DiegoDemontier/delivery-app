import React from 'react';
import PropTypes from 'prop-types';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
  const contextValues = {

  };

  // const requestAllContracts = async () => {
  //   const headerAuth = {
  //     headers: {
  //       authorization: infoUserContext.token
  //     }
  //   }

  //   const getContracts = await axios
  //   .get('http://localhost:3001/contracts', headerAuth)
  //   .then((res) => res.data)
  //   .catch((err) => null)

  //   if (!getContracts) return "Falha na requisiçao"

  //   setAllContracts(getContracts)
  //   return console.log(allContracts)
  // };

  return (
  // diponibiliza os estados da funcao anterio para o context criado em outro arquivo
  // e adiciona o provider que ira englobar toda aplicaçao
    <InfoContext.Provider value={ contextValues }>
      { children }
    </InfoContext.Provider>
  );
}

export default InfoProvider;

InfoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
