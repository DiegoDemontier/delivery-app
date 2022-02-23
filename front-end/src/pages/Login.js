import React, { useState } from 'react';
import Card from '../components/Card';
import './Login.css';
import Input from '../components/Input';
import GreenButton from '../components/GreenButton';
import InnerGreenButton from '../components/InnerGreenButton';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });

  const handleChangeLogin = ({ target: value, name }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };
  console.log(login);

  return (
    <div className="card-container">
      <div>
        <h1>Logo</h1>
        <Card>
          <Input
            labelName="Login"
            inputPlaceholder="email@trybeer.com.br"
            name="email"
            type="text"
            value={ login.email }
            datatestid="common_login__input-email"
            handleChangeLogin={ handleChangeLogin }
          />
          <Input
            labelName="Senha"
            inputPlaceholder="***************"
            name="password"
            type="password"
            value={ login.password }
            datatestid="common_login__input-password"
            handleChangeLogin={ handleChangeLogin }
          />
          <GreenButton text="LOGIN" datatestid="common_login__button-login" />
          <InnerGreenButton
            text="Ainda não tenho conta"
            datatestid="common_login__button-register"
          />
        </Card>
      </div>
    </div>
  );
}

export default Login;
