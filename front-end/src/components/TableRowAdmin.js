import React from 'react';
import PropTypes from 'prop-types';
import './TableRowAdmin.css';

function TableRowAdmin({ index }) {
  return (
    <tr className="admin-items">
      <td
        className="admin-green-row w-05 border-radius-left center-text"
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        1
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-name-${index}` }
        className="admin-light-blue-row w-30"
      >
        Fulana Pereira
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-email-${index}` }
        className="admin-dark-green-row center-white w-30"
      >
        fulana@deliveryapp.com
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-role-${index}` }
        className="admin-purple-row center-white w-25"
      >
        P. Vendedora
      </td>
      <td
        className="admin-blue-row w-10 border-radius-right"
      >
        <button
          className="admin-remover admin-center-white"
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
          type="button"
          // onClick={ () => setProductsInCart((prev) => (
          //   [...prev.filter((product) => product.id !== productId)]
          // )) }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

TableRowAdmin.propTypes = {
  index: PropTypes.number.isRequired,
};

export default TableRowAdmin;
