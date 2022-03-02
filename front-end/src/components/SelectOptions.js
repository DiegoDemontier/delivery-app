import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

function SelectOptions({ labelName,
  name,
  options,
  datatestid,
  handleChange,
  selectClass,
  labelClass }) {
  return (
    <label htmlFor={ name } className={ labelClass }>
      { labelName }
      <select
        name={ name }
        id={ name }
        className={ selectClass }
        data-testid={ datatestid }
        onChange={ handleChange }
      >
        {
          options.map((seller) => (
            <option key={ seller.id } value={ seller.id }>{ seller.name }</option>
          ))
        }
      </select>
    </label>
  );
}

export default SelectOptions;

SelectOptions.propTypes = {
  labelName: PropTypes.string.isRequired,
  labelClass: PropTypes.string.isRequired,
  selectClass: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  datatestid: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
