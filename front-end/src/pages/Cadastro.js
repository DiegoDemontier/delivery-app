import React, { useState, useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';
import './Login.css';
import Input from '../components/Input';
import GreenButton from '../components/GreenButton';
import InfoContext from '../context/infoContext';

function Cadastro() {
  const { requestRegister } = useContext(InfoContext);
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [messageErrorRegister, setMessageErrorRegister] = useState('none');

  const history = useHistory();

  const handleClickRegister = async () => {
    const { name, email, password } = register;

    const registerData = {
      name,
      email,
      password,
      role: 'customer',
    };
    const res = await requestRegister(registerData);
    console.log(res);
    if (res.message === 'User created successfully') history.push('customer/products');

    setMessageErrorRegister('block');
  };

  const handleChangeRegister = ({ target: { value, name } }) => {
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const NAME_LENGHT = 12;
  const nameValidation = (name) => name.length >= NAME_LENGHT;

  const emailValidation = (email) => {
    const regexValidation = /\S+@\S+\.\S+/;
    return regexValidation.test(email);
  };

  const PASSWORD_LENGHT = 6;
  const passwordValidation = (password) => password.length >= PASSWORD_LENGHT;

  const buttonStatusRegister = useMemo(() => !nameValidation(register.name)
    || !emailValidation(register.email)
    || !passwordValidation(register.password), [register]);

  return (
    <div className="card-container">
      <div>
        <h1>Logo</h1>
        <Card>
          <Input
            labelName="Name"
            inputPlaceholder="Seu nome"
            name="name"
            type="text"
            labeltClass="label"
            inputClass="input"
            value={ register.name }
            datatestid="common_register__input-name"
            handleChange={ handleChangeRegister }
          />
          <Input
            labelName="Email"
            inputPlaceholder="seu-email@site.com.br"
            name="email"
            type="email"
            labeltClass="label"
            inputClass="input"
            value={ register.email }
            datatestid="common_register__input-email"
            handleChange={ handleChangeRegister }
          />
          <Input
            labelName="Senha"
            inputPlaceholder="***************"
            name="password"
            type="password"
            labeltClass="label"
            inputClass="input"
            value={ register.password }
            datatestid="common_register__input-password"
            handleChange={ handleChangeRegister }
          />
          <GreenButton
            text="CADASTRAR"
            datatestid="common_register__button-register"
            buttonState={ buttonStatusRegister }
            handleClick={ handleClickRegister }
          />
          <p
            data-testid="common_register__element-invalid_register"
            style={ { display: messageErrorRegister, color: 'red' } }
          >
            Usuário já cadastrado
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Cadastro;
