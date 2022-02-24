import React, { useState, useMemo } from 'react';
import Card from '../components/Card';
import './Login.css';
import Input from '../components/Input';
import GreenButton from '../components/GreenButton';

function Cadastro() {
  const [register, setRegister] = useState({
    name: '',
    email: '',
    password: '',
  });

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
            value={ register.name }
            datatestid="common_register__input-name"
            handleChange={ handleChangeRegister }
          />
          <Input
            labelName="Email"
            inputPlaceholder="seu-email@site.com.br"
            name="email"
            type="email"
            value={ register.email }
            datatestid="common_register__input-email"
            handleChange={ handleChangeRegister }
          />
          <Input
            labelName="Senha"
            inputPlaceholder="***************"
            name="password"
            type="password"
            value={ register.password }
            datatestid="common_register__input-password"
            handleChange={ handleChangeRegister }
          />
          <GreenButton
            text="CADASTRAR"
            datatestid="common_register__button-register"
            buttonState={ buttonStatusRegister }
          />
        </Card>
      </div>
    </div>
  );
}

export default Cadastro;
