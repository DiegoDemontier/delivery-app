import React from 'react';
import Card from '../components/Card';
import './Login.css';
import Input from '../components/Input';
import GreenButton from '../components/GreenButton';

function Cadastro() {
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
            datatestid="common_login__input-email"
          />
          <Input
            labelName="Email"
            inputPlaceholder="seu-email@site.com.br"
            name="email"
            type="email"
          />
          <Input
            labelName="Senha"
            inputPlaceholder="***************"
            name="password"
            type="password"
          />
          <GreenButton text="LOGIN" />
        </Card>
      </div>
    </div>
  );
}

export default Cadastro;
