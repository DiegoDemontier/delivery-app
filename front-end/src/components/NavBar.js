import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
// import PropTypes from 'prop-types';

function NavBar({user}) {
  return (
    <nav class='navbar'>
      <span class='green'><Link to='/'>PRODUTOS</Link></span>
      <span class='dark-green'><Link to='/'>MEUS PEDIDOS</Link></span>
      <span class='purple'>{user}</span>
      <span class='blue'><Link to='/'>Sair</Link></span>
    </nav>
  );
}

export default NavBar;

// Input.propTypes = {
//   labelName: PropTypes.string.isRequired,
//   inputPlaceholder: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   datatestid: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };