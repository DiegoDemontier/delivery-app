import React, { useContext } from 'react';
import './TableRow.css';
import PropTypes from 'prop-types';
import InfoContext from '../context/infoContext';

function TableRow({ index, name, quantity, price, productId }) {
  const { setProductsInCart } = useContext(InfoContext);

  return (
    <tr className="items">
      <td
        className="green-row"
        data-testid={ `customer_checkout__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-name-${index}` }
        className="light-blue-row"
      >
        {name}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
        className="dark-green-row center-white"
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-unit-price-${index}` }
        className="purple-row center-white"
      >
        {Number(price).toFixed(2).replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-sub-total-${index}` }
        className="blue-row center-white"
      >
        {(quantity * price).toFixed(2).replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_checkout__element-order-table-remove-${index}` }
        className="green-row"
      >
        <button
          className="remover center-white"
          data-testid={ `customer_checkout__element-order-table-remove-${index}` }
          type="button"
          onClick={ () => setProductsInCart((prev) => (
            [...prev.filter((product) => product.productId !== productId)]
          )) }
        >
          Remover
        </button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  productId: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.string.isRequired,
};

export default TableRow;
