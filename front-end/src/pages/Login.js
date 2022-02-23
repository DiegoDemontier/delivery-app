import React from 'react';
import Card from '../components/Card';
import './Login.css';
import Input from '../components/Input';
import GreenButton from '../components/GreenButton';
import InnerGreenButton from '../components/InnerGreenButton';

function Login() {
  return (
    <div className="card-container">
      <div>
        <h1>Logo</h1>
        <Card>
          <Input
            labelName="Login"
            inputPlaceholder="email@trybeer.com.br"
            name="login"
            type="text"
            datatestid="common_login__input-email"
          />
          <Input
            labelName="Senha"
            inputPlaceholder="***************"
            name="login"
            type="password"
            datatestid="common_login__input-password"
          />
          <GreenButton text="LOGIN" datatestid="common_login__button-login" />
          <InnerGreenButton text="Ainda não tenho conta" datatestid="common_login__button-register" />
        </Card>
      </div>
    </div>
  );
}

export default Login;
