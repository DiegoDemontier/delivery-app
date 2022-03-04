import React from 'react';
import PropTypes from 'prop-types';
import TableRow from './TableRow';
import './Table.css';

const title = [
  'Item',
  'Descrição',
  'Quantidade',
  'ValorUnitário',
  'Sub-total',
  'Remover Item'];

const titleShort = [
  'Item',
  'Descrição',
  'Quantidade',
  'ValorUnitário',
  'Sub-total'];

function Table({ displayName, datatest, products }) {
  console.log(products);
  return (
    <table className="table">
      <thead>
        <tr>
          {
            displayName === 'no-display'
              ? titleShort.map((item, index) => <th key={ index }>{ item }</th>)
              : title.map((item, index) => <th key={ index }>{ item }</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          products.map(({ name, quantity, price, productId }, index) => (
            <TableRow
              key={ productId }
              productId={ productId }
              name={ name }
              quantity={ quantity }
              price={ price }
              index={ index }
              displayName={ displayName }
              datatest={ datatest }
            />
          ))
        }
      </tbody>
    </table>
  );
}

Table.propTypes = {
  displayName: PropTypes.string.isRequired,
  datatest: PropTypes.string.isRequired,
  products: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default Table;
