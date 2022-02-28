import React, { useContext, useEffect, useReducer } from 'react';
import PropTypes from 'prop-types';
import InfoContext from '../context/infoContext';
import './ProductCard.css';
import remove from '../images/remove.svg';
import add from '../images/add.svg';

function ProductCard({ productId, name, price, urlImage }) {
  const { setProductsInCart } = useContext(InfoContext);
  const initialState = {
    productId,
    name,
    price,
    quantity: 0,
  };

  function reducer(state, action) {
    switch (action.type) {
    case 'increment':
      return { ...state, quantity: state.quantity + 1 };
    case 'decrement':
      return { ...state,
        quantity: state.quantity > 0 ? state.quantity - 1 : 0 };
    default:
      return state;
    }
  }
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.quantity > 0) {
      setProductsInCart((prev) => (
        [...prev.filter((product) => product.productId !== productId), state]
      ));
    } else {
      setProductsInCart((prev) => (
        [...prev.filter((product) => product.productId !== productId)]
      ));
    }
  }, [setProductsInCart, state, productId]);

  return (
    <div className="product-card">
      <span
        data-testid={ `customer_products__element-card-price-${productId}` }
      >
        {`R$ ${price}`}
      </span>
      <img
        data-testid={ `customer_products__img-card-bg-image-${productId}` }
        src={ urlImage }
        alt="Figura do produto"
      />
      <div className="footer-product-card">
        <span
          data-testid={ `customer_products__element-card-title-${productId}` }
        >
          { name }
        </span>
        <div>
          <button
            data-testid={ `customer_products__button-card-rm-item-${productId}` }
            onClick={ () => dispatch({ type: 'decrement' }) }
            type="button"
          >
            <img src={ remove } alt="" />
          </button>
          <div>
            <span
              data-testid={ `customer_products__input-card-quantity-${productId}` }
            >
              { state.quantity }
            </span>
          </div>
          <button
            data-testid={ `customer_products__button-card-add-item-${productId}` }
            onClick={ () => dispatch({ type: 'increment' }) }
            type="button"
          >
            <img src={ add } alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  productId: PropTypes.number.isRequired,
  urlImage: PropTypes.string.isRequired,
};
