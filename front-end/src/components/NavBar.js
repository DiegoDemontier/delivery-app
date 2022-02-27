import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import PropTypes from 'prop-types';

function NavBar({ user }) {
  return (
    <nav className="navbar">
      <span
        className="green"
        data-testid="customer_products__element-navbar-link-products"
      >
        <Link to="/customer/products">PRODUTOS</Link>
      </span>
      <span
        className="dark-green"
        datat-testid="customer_products__element-navbar-link-orders"
      >
        <Link to="/customer/orders">MEUS PEDIDOS</Link>
      </span>
      <span
        className="purple"
        data-testid="customer_products__element-navbar-user-full-name"
      >
        {user}
      </span>
      <span
        className="blue"
        data-testid="customer_products__element-navbar-link-logout"
      >
        <Link to="/">Sair</Link>
      </span>
    </nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NavBar;
