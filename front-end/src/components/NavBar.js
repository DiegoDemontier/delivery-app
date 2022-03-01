import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';
import './NavBar.css';

function NavBar({ user, productClasse, ordersClasse }) {
  const history = useHistory();

  const handleClick = () => {
    localStorage.removeItem('user');
    history.push('/login');
  };

  return (
    <nav className="navbar">
      <div>
        <Button
          buttonClasse={ `product-nav ${productClasse}` }
          text="PRODUTOS"
          buttonDatatestid="customer_products__element-navbar-link-products"
          handleClick={ () => history.push('/customer/products') }
        />
        <Button
          buttonClasse={ `product-nav ${ordersClasse}` }
          text="MEUS PEDIDOS"
          buttonDatatestid="customer_products__element-navbar-link-orders"
          handleClick={ () => history.push('/customer/ordes') }
        />
      </div>
      <div className="test">
        <div className="purple">
          <span
            data-testid="customer_products__element-navbar-user-full-name"
          >
            {user}
          </span>
        </div>
        <Button
          buttonClasse="btn-logout"
          text="SAIR"
          buttonDatatestid="customer_products__element-navbar-link-logout"
          handleClick={ handleClick }
        />
      </div>
    </nav>
  );
}

NavBar.propTypes = {
  user: PropTypes.string.isRequired,
};

export default NavBar;
