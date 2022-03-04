import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import InfoContext from '../context/infoContext';
import './ProductCard.css';
import remove from '../images/remove.svg';
import add from '../images/add.svg';
import Input from './Input';

function ProductCard({ productId, name, price, urlImage }) {
  const { setProductsInCart } = useContext(InfoContext);
  const [initialState, setInitialState] = useState({
    id: productId,
    name,
    price,
    salesProducts: {
      quantity: 0,
    },
  });

  useEffect(() => {
    if (initialState.salesProducts.quantity > 0) {
      setProductsInCart((prev) => (
        [...prev.filter((product) => product.id !== productId), initialState]
      ));
    } else {
      setProductsInCart((prev) => (
        [...prev.filter((product) => product.id !== productId)]
      ));
    }
  }, [productId, initialState, setProductsInCart]);

  const increment = () => {
    let newQuantity = Number(initialState.salesProducts.quantity);
    newQuantity += 1;
    setInitialState((prev) => ({ ...prev, salesProducts: { quantity: newQuantity } }));
  };

  const decrement = () => {
    if (initialState.salesProducts.quantity > 0) {
      let newQuantity = Number(initialState.salesProducts.quantity);
      newQuantity -= 1;
      setInitialState((prev) => ({ ...prev, salesProducts: { quantity: newQuantity } }));
    }
  };

  return (
    <div className="product-card">
      <div className="priceCard">
        <p>R$</p>
        <span
          data-testid={ `customer_products__element-card-price-${productId}` }
        >
          { price.replace('.', ',') }
        </span>
      </div>
      <img
        data-testid={ `customer_products__img-card-bg-image-${productId}` }
        src={ urlImage }
        alt="Figura do produto"
      />
      <div className="footer-product-card">
        <button
          data-testid={ `customer_products__button-card-rm-item-${productId}` }
          onClick={ decrement }
          type="button"
        >
          <img src={ remove } alt="" />
        </button>
        <div>
          <Input
            type="number"
            value={ initialState.salesProducts.quantity }
            name="quantity"
            datatestid={ `customer_products__input-card-quantity-${productId}` }
            datatestidLabel={ `customer_products__element-card-title-${productId}` }
            inputPlaceholder="0"
            labelName={ name }
            handleChange={
              ({ target }) => setInitialState((prev) => (
                { ...prev, salesProducts: { quantity: target.value } }))
            }
          />
        </div>
        <button
          data-testid={ `customer_products__button-card-add-item-${productId}` }
          onClick={ increment }
          type="button"
        >
          <img src={ add } alt="" />
        </button>
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
