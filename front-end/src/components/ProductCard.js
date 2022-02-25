import React, { useState } from 'react';
import './ProductCard.css';

function ProductCard({ name, price, urlImage }) {
  const [quantity, setQuantity] = useState(0);

  const addQuantity = () => {
    setQuantity((prev) => (
      prev + 1
    ));
  };

  const removeQuantity = () => {
    if (quantity > 0) {
      setQuantity((prev) => (
        prev - 1
      ));
    }
  };

  return (
    <div className="product-card">
      <span>{`R$ ${price}`}</span>
      <img src={ urlImage } alt="Figura do produto" />
      <div className="footer-product-card">
        <span>{ name }</span>
        <div>
          <button onClick={ removeQuantity } type="button">-</button>
          <div>
            <span>{ quantity }</span>
          </div>
          <button onClick={ addQuantity } type="button">+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
