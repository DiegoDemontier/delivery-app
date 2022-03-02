import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InfoContext from '../context/infoContext';
import './DetailsForm.css';
import Input from './Input';
import SelectOptions from './SelectOptions';

function DetailsForm() {
  const history = useHistory();
  const { requestAllSellers } = useContext(InfoContext);
  const [arraySellers, setArraySellers] = useState([]);
  const [formData, setFormData] = useState({
    seller: '',
    adress: '',
    number: '',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      seller: arraySellers[0] && arraySellers[0].name,
    }));
  }, [arraySellers]);

  useEffect(() => {
    const response = async () => {
      setArraySellers(await requestAllSellers());
    };
    response();
  }, [requestAllSellers]);

  const handleChangeForm = ({ target: { value, name } }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form>
      <div className="details-form">
        <div className="form-input">
          <SelectOptions
            labelName="P. Vendedora Responsável:"
            name="seller"
            datatestid="customer_checkout__select-seller"
            handleChange={ handleChangeForm }
            selectClass="input-field"
            labelClass="details-label"
            options={ arraySellers }
          />
        </div>
        <div className="form-input big">
          <Input
            labelName="Endereço"
            inputPlaceholder="Travessa Terceira da Castanheira, Bairro Muruci"
            name="adress"
            type="text"
            labelClass="details-label"
            inputClass="input-field"
            value={ FormData.adress }
            datatestid="customer_checkout__input-address"
            handleChange={ handleChangeForm }
          />
        </div>
        <div className="form-input">
          <Input
            labelName="Número"
            inputPlaceholder="198"
            name="number"
            type="text"
            labelClass="details-label"
            inputClass="input-field"
            value={ FormData.number }
            datatestid="customer_checkout__input-addressNumber"
            handleChange={ handleChangeForm }
          />
        </div>
      </div>
      <button
        data-testid="customer_checkout__button-submit-order"
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
