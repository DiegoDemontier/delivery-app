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
  const { productsInCart } = useContext(InfoContext);
  console.log(productsInCart);
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
          productsInCart.map(({ name, quantity, price, productId }, index) => (
            <TableRow
              key={ productId }
              productId={ productId }
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
