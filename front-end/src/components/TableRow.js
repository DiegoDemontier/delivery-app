import React from 'react';
import './TableRow.css';
import PropTypes from 'prop-types';

function TableRow({ index, name, quantity, price }) {
  return (
    <tr className="items">
      <td
        className="green-row"
        data-testid="customer_checkout__element-order-table-item-number"
      >
        {index}
      </td>
      <td
        data-testid="customer_checkout__element-order-table-name-<index>"
        className="light-blue-row"
      >
        {name}
      </td>
      <td
        data-testid="customer_checkout__element-order-table-quantity-<index>"
        className="dark-green-row center-white"
      >
        {quantity}
      </td>
      <td
        data-testid="customer_checkout__element-order-table-unit-price-<index>"
        className="purple-row center-white"
      >
        {price}
      </td>
      <td
        data-testid="customer_checkout__element-order-table-sub-total-<index>"
        className="blue-row center-white"
      >
        { quantity * price}
      </td>
      <td
        data-testid="customer_checkout__element-order-table-remove-<index>"
        className="green-row"
      >
        <button className="remover center-white" type="button">Remover</button>
      </td>
    </tr>
  );
}

TableRow.propTypes = {
  index: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default TableRow;
