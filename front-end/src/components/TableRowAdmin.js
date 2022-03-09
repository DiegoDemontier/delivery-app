import React from 'react';
import PropTypes from 'prop-types';
import './TableRowAdmin.css';

function TableRowAdmin({ index, user, handleClickDelete }) {
  return (
    <tr className="admin-items">
      <td
        className="admin-green-row w-05 border-radius-left center-text"
        data-testid={ `admin_manage__element-user-table-item-number-${index}` }
      >
        { index + 1}
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-name-${index}` }
        className="admin-light-blue-row w-30"
      >
        { user.name }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-email-${index}` }
        className="admin-dark-green-row center-white w-30"
      >
        { user.email }
      </td>
      <td
        data-testid={ `admin_manage__element-user-table-role-${index}` }
        className="admin-purple-row center-white w-25"
      >
        { user.role[0].toUpperCase() + user.role.slice(1) }
      </td>
      <td
        className="admin-blue-row w-10 border-radius-right"
      >
        <button
          className="admin-remover admin-center-white"
          data-testid={ `admin_manage__element-user-table-remove-${index}` }
          type="button"
          onClick={ () => handleClickDelete(user.id) }
        >
          Excluir
        </button>
      </td>
    </tr>
  );
}

TableRowAdmin.propTypes = {
  index: PropTypes.number.isRequired,
  handleClickDelete: PropTypes.func.isRequired,
  user: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default TableRowAdmin;
