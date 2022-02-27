import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';

function NavBar({ user }) {
  return (
    <nav className="navbar">
      <span className="green"><Link to="/">PRODUTOS</Link></span>
      <span className="dark-green"><Link to="/">MEUS PEDIDOS</Link></span>
      <span className="purple">{user}</span>
      <span className="blue"><Link to="/">Sair</Link></span>
    </nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NavBar;
