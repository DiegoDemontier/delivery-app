import React, { useContext } from 'react';
// import PropTypes from 'prop-types';
import InfoContext from '../context/infoContext';
import './Table.css';

const columns = [
  'Item',
  'Descrição',
  'Quantidade',
  'ValorUnitário',
  'Sub-total'];

function TableSellerOrderDetails() {
  const { productsInCart } = useContext(InfoContext);

  return (
    <table className="table">
      <thead>
        <tr>
          {
            columns.map((item, index) => <th key={ index }>{ item }</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          productsInCart.map(({ name, quantity, price }, index) => (
            <tr key={ index } className="items">
              <td
                className="green-row"
                data-testid={ `seller_order_details__element-order
                -table-item-number-${index}` }
              >
                {index + 1}
              </td>
              <td
                className="light-blue-row"
                data-testid={ `seller_order_details__element-order-table-name-${index}` }
              >
                {name}
              </td>
              <td
                className="dark-green-row center-white"
                data-testid={ `seller_order_details__element-order
                -table-quantity-${index}` }
              >
                {quantity}
              </td>
              <td
                className="purple-row center-white"
                data-testid={ `seller_order_details__element-order
                -table-unit-price-${index}` }
              >
                {Number(price).toFixed(2).replace('.', ',')}
              </td>
              <td
                className="blue-row center-white"
                data-testid={ `seller_order_details__element-order
                -table-sub-total-${index}` }
              >
                {(quantity * price).toFixed(2).replace('.', ',')}
              </td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

// TableSellerOrderDetails.propTypes = {
//   displayName: PropTypes.string.isRequired,
//   datatest: PropTypes.string.isRequired,
// };

export default TableSellerOrderDetails;
