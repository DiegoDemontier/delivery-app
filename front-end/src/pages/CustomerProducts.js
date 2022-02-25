import React, { useContext, useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import InfoContext from '../context/infoContext';

function CustomerProducts() {
  const [arrayProducts, setArrayProducts] = useState([]);

  const { requestAllProducts } = useContext(InfoContext);

  useEffect(() => {
    const response = async () => {
      setArrayProducts(await requestAllProducts());
    };
    response();
  }, [requestAllProducts]);

  return (
    <>
      {arrayProducts.map((product) => (
        <div key={ product.id }>
          <ProductCard
            name={ product.name }
            price={ product.price }
            urlImage={ product.urlImage }
          />
        </div>
      ))}
    </>
  );
}

export default CustomerProducts;
