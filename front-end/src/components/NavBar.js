import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from './Button';
import './NavBar.css';

function NavBar({ user,
  productClasse,
  ordersClasse,
  display,
  suffix,
  handleClickNav,
  text }) {
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
          text={ text }
          buttonDatatestid={ `customer_products__element-navbar-link-${suffix}` }
          handleClick={ handleClickNav }
        />
        <Button
          buttonClasse={ `product-nav ${ordersClasse} ${display}` }
          text="MEUS PEDIDOS"
          buttonDatatestid="customer_products__element-navbar-link-orders"
          handleClick={ () => history.push('/customer/orders') }
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

NavBar.defaultProps = {
  productClasse: '',
  ordersClasse: '',
  display: '',
  user: '',
  handleClickNav: PropTypes.func,
};

NavBar.propTypes = {
  user: PropTypes.string,
  productClasse: PropTypes.string,
  ordersClasse: PropTypes.string,
  display: PropTypes.string,
  text: PropTypes.string.isRequired,
  suffix: PropTypes.string.isRequired,
  handleClickNav: PropTypes.func,
};

export default NavBar;
