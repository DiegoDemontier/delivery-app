import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import InfoContext from '../context/infoContext';
import './CustomerProducts.css';

function CustomerProducts() {
  const { requestAllProducts } = useContext(InfoContext);
  const [arrayProducts, setArrayProducts] = useState([]);

  useEffect(() => {
    const response = async () => {
      setArrayProducts(await requestAllProducts());
    };
    response();
  }, [requestAllProducts]);

  return (
    <div>
      <header>header</header>
      <div className="products-container">
        {arrayProducts.map((product) => (
          <div key={ product.id }>
            <ProductCard
              productId={ product.id }
              name={ product.name }
              price={ product.price }
              urlImage={ product.urlImage }
            />
          </div>
        ))}
      </div>
      <Link to="/">
        <div className="btn-products">
          <span>Ver Carrinho: R$ 2.000</span>
        </div>
      </Link>
    </div>
  );
}

export default CustomerProducts;
