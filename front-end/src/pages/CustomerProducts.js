import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import InfoContext from '../context/infoContext';
import Button from '../components/Button';
import './CustomerProducts.css';

function CustomerProducts() {
  const { requestAllProducts } = useContext(InfoContext);
  const [arrayProducts, setArrayProducts] = useState([]);
  const buttonState = false;

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
      <Link to="/customer/checkout">
        <Button
          text="Ver Carrinho: R$ 2.000"
          buttonClasse="btn-products"
          buttonDatatestid="customer_products__button-cart"
          spanDatatestid="customer_products__checkout-bottom-value"
          buttonState={ buttonState }
          handleClick={ () => console.log('Clik') }
        />
      </Link>
    </div>
  );
}

export default CustomerProducts;
