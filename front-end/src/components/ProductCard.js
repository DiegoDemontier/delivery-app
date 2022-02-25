import React from 'react';
import './ProductCard.css';

function ProductCard() {
  return (
    <div className="product-card">
      <span>$ 0,00</span>
      <img src="http://localhost:3001/images/skol_beats_senses_269ml.jpg" alt="Minha Figura" />
      <div className="footer-product-card">
        <span>Descrição</span>
        <div>
          <button type="button">-</button>
          <div>
            <span>00</span>
          </div>
          <button type="button">+</button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
