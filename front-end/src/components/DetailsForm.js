import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './DetailsForm.css';

function DetailsForm() {
  const history = useHistory();
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
      <div className="details-form">
        <div className="form-input">
          <label htmlFor="seller" className="details-label">
            P. Vendedora Responsável:
          </label>
          <select
            name="seller"
            id="seller"
            className="input-field"
            defaultValue="Fulana Pereira"
            onChange={ handleChangeForm }
          >
            <option value="Fulana Pereira">Fulana Pereira</option>
          </select>
        </div>
        <div className="form-input big">
          <label htmlFor="adress" className="details-label">
            Endereço
          </label>
          <input
            type="text"
            placeholder="Travessa Terceira da Castanheira, Bairro Muruci"
            name="adress"
            id="adress"
            value={ FormData.adress }
            data-testid="customer_checkout__input-address"
            onChange={ handleChangeForm }
            className="input-field"
          />
        </div>
        <div className="form-input">
          <label htmlFor="number" className="details-label">
            Número
          </label>
          <input
            type="text"
            placeholder="198"
            name="number"
            id="number"
            value={ FormData.number }
            data-testid="customer_checkout__input-addressNumber"
            onChange={ handleChangeForm }
            className="input-field"
          />
        </div>
      </div>
      <button
        className="finalizar-pedido"
        type="button"
        onClick={ () => history.push('/customer/orders') }
      >
        FINALIZAR PEDIDO
      </button>
    </form>
  );
}

export default DetailsForm;
