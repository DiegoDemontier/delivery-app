import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import InfoContext from '../context/infoContext';
import Button from '../components/Button';
import NavBar from '../components/NavBar';
import './CustomerProducts.css';

function CustomerProducts() {
  const { requestAllProducts } = useContext(InfoContext);
  const [arrayProducts, setArrayProducts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const response = async () => {
      setArrayProducts(await requestAllProducts());
    };
    response();
  }, [requestAllProducts]);

  return (
    <div>
      <NavBar
        user="Diego"
        productClasse="green"
      />
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
      <Button
        text="Ver Carrinho: R$ 2.000"
        buttonClasse="btn-products"
        buttonDatatestid="customer_products__button-cart"
        spanDatatestid="customer_products__checkout-bottom-value"
        handleClick={ () => history.push('/customer/checkout') }
      />
    </div>
  );
}

export default CustomerProducts;
