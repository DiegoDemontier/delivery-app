import React from 'react';
import './TableRow.css';

function TableRow({index, name, quantity, price}) {
  return (
        <tr>
          <td className='green-row'>{index}</td>
          <td data-testid="customer_checkout__element-order-table-name-<index>" classNanme="light-blue-row">
            {name}
          </td>
          <td data-testid="customer_checkout__element-order-table-quantity-<index>" className='dark-green-row'>
            {quantity}
          </td>
          <td data-testid="customer_checkout__element-order-table-unit-price-<index>" className='purple-row'>
            {price}
          </td>
          <td data-testid="customer_checkout__element-order-table-sub-total-<index>"className='blue-row'>
            { quantity * price}
          </td>
          <td data-testid="customer_checkout__element-order-table-remove-<index>" className='green-row' >
            <button className='remover' >Remover</button>
          </td>
        </tr>
  );
}

export default TableRow;

// Input.propTypes = {
//   labelName: PropTypes.string.isRequired,
//   inputPlaceholder: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   datatestid: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };