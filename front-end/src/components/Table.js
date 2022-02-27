import React, { useContext } from 'react';
import TableRow from './TableRow';
import InfoContext from '../context/infoContext';
import './Table.css';

const title = [
  'Item',
  'Descrição',
  'Quantidade',
  'ValorUnitário',
  'Sub-total',
  'Remover Item'];

function Table() {
  const { products } = useContext(InfoContext);

  return (
    <table className="table">
      <thead>
        <tr>
          {
            title.map((item, index) => <th key={ index }>{ item }</th>)
          }
        </tr>
      </thead>
      <tbody>
        {
          products.map(({ name, quantity, price }, index) => (<TableRow
            key={ `element-order-table-name-${index}` }
            name={ name }
            quantity={ quantity }
            price={ price }
            index={ index }
          />
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
