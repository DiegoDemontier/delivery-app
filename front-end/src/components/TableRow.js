import React, { useContext } from 'react';
import './TableRow.css';
import PropTypes from 'prop-types';
import InfoContext from '../context/infoContext';

function TableRow({ index, name, quantity, price, productId, displayName, datatest }) {
  const { setProductsInCart } = useContext(InfoContext);

  return (
    <tr className="items">
      <td
        className="green-row center-text border-radius-left"
        data-testid={ `customer_${datatest}__element-order-table-item-number-${index}` }
      >
        {index + 1}
      </td>
      <td
        data-testid={ `customer_${datatest}__element-order-table-name-${index}` }
        className="light-blue-row"
      >
        {name}
      </td>
      <td
        data-testid={ `customer_${datatest}__element-order-table-quantity-${index}` }
        className="dark-green-row center-white"
      >
        {quantity}
      </td>
      <td
        data-testid={ `customer_${datatest}__element-order-table-unit-price-${index}` }
        className="purple-row center-white"
      >
        {Number(price).toFixed(2).replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_${datatest}__element-order-table-sub-total-${index}` }
        className={ displayName === 'no-display'
          ? 'blue-row center-white border-radius-right' : 'blue-row center-white' }
      >
        {(quantity * price).toFixed(2).replace('.', ',')}
      </td>
      <td
        data-testid={ `customer_${datatest}__element-order-table-remove-${index}` }
        className={ `green-row ${displayName} border-radius-right` }
      >
        <button
          className="remover center-white"
          data-testid={ `customer_${datatest}__element-order-table-remove-${index}` }
          type="button"
          onClick={ () => setProductsInCart((prev) => (
            [...prev.filter((product) => product.id !== productId)]
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
  displayName: PropTypes.string.isRequired,
  datatest: PropTypes.string.isRequired,
};

export default TableRow;
