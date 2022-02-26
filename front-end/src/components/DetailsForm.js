import React, { useState } from 'react';
import './DetailsForm.css';

function DetailsForm() {
  const [formData, setFormData] = useState({
    seller: '',
    adress: '',
    number: '',
  });

  const handleChangeForm = ({ target: { value, name } }) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form>
      <div className='details-form'>
      <div className='form-input'>
        <label htmlFor="seller" className='details-label'>
          P. Vendedora Responsável:
        </label>
        <select name="seller" class='input-field'>
          <option value="Fulana Pereira" selected="selected">Fulana Pereira</option>
        </select>
      </div>
      <div className='form-input big'>
      <label htmlFor="adress" className='details-label'>
        Endereço
      </label>
      <input
        type="text"
        placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
        name="adress"
        value={ FormData.adress }
        className="input"
        data-testid="customer_checkout__input-address"
        onChange={ handleChangeForm }
        class='input-field'
      />
      </div>
      <div className='form-input'>
      <label htmlFor="number" className='details-label'>
        Número
      </label>
      <input
        type="text"
        placeholder="198"
        name="number"
        value={ FormData.number }
        className="input"
        data-testid="customer_checkout__input-addressNumber"
        onChange={ handleChangeForm }
        class='input-field'
      />
      </div>
      </div>
      <button className='finalizar-pedido'>FINALIZAR PEDIDO</button>
    </form>
  );
}

export default DetailsForm;