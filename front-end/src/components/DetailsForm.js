import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import InfoContext from '../context/infoContext';
import Button from './Button';
import './DetailsForm.css';
import Input from './Input';
import SelectOptions from './SelectOptions';

function DetailsForm() {
  const {
    requestAllSellers,
    requestNewSale,
    productsInCart,
    totalPrice,
  } = useContext(InfoContext);
  const history = useHistory();
  const [arraySellers, setArraySellers] = useState([]);
  const [formData, setFormData] = useState({
    sellerId: '',
    deliveryAddress: '',
    deliveryNumber: '',
  });

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      sellerId: arraySellers[0] && arraySellers[0].id,
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

  const handleClick = async () => {
    const { sellerId, deliveryAddress, deliveryNumber } = formData;
    const user = JSON.parse(localStorage.getItem('user'));

    const saleProduct = productsInCart
      .map(({ productId, quantity }) => ({ productId, quantity }));

    const data = {
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      saleProduct,
    };

    const newSale = await requestNewSale(user.token, data);
    history.replace(`orders/${newSale.id}`);
  };

  return (
    <form>
      <div className="details-form">
        <div className="form-input">
          <SelectOptions
            labelName="P. Vendedora Responsável:"
            name="sellerId"
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
            name="deliveryAddress"
            type="text"
            labelClass="details-label"
            inputClass="input-field"
            value={ FormData.deliveryAddress }
            datatestid="customer_checkout__input-address"
            handleChange={ handleChangeForm }
          />
        </div>
        <div className="form-input">
          <Input
            labelName="Número"
            inputPlaceholder="198"
            name="deliveryNumber"
            type="text"
            labelClass="details-label"
            inputClass="input-field"
            value={ FormData.deliveryNumber }
            datatestid="customer_checkout__input-addressNumber"
            handleChange={ handleChangeForm }
          />
        </div>
      </div>
      <Button
        text="FINALIZAR PEDIDO"
        buttonClasse="finalizar-pedido"
        buttonDatatestid="customer_checkout__button-submit-order"
        handleClick={ handleClick }
      />
      {/* <button
        data-testid="customer_checkout__button-submit-order"
        className="finalizar-pedido"
        type="button"
        onClick={ handleClick }
      >
        FINALIZAR PEDIDO
      </button> */}
    </form>
  );
}

export default DetailsForm;
