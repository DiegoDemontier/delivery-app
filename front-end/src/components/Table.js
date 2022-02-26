import React, { useContext } from 'react';
import TableRow from './TableRow';
import InfoContext from '../context/infoContext';
import './Table.css'
// import PropTypes from 'prop-types';

const title = ['Item', 'Descrição', 'Quantidade', 'ValorUnitário', 'Sub-total', 'Remover Item'];

function Table() {
  const { products } = useContext(InfoContext);

  return (
    <table className='table-base'>
      <thead>
        <tr> {
            title.map(item => <th>{ item }</th>)
          }
        </tr>
      </thead>
      <tbody>
            {
              products.map(({name, quantity, price}, index) => 
                <TableRow
                name={name}
                quantity={quantity}
                price={price}
                index={index}
                />
              )
            }
      </tbody>
      
    </table>
  );
}

export default Table;

// Input.propTypes = {
//   labelName: PropTypes.string.isRequired,
//   inputPlaceholder: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   type: PropTypes.string.isRequired,
//   datatestid: PropTypes.string.isRequired,
//   handleChange: PropTypes.func.isRequired,
//   value: PropTypes.string.isRequired,
// };