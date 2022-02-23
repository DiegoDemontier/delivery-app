import React from 'react';
import PropTypes from 'prop-types';
import InfoContext from './infoContext';

function InfoProvider({ children }) {
  const contextValues = {

  };

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
