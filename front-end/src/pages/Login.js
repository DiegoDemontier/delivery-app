import React, { useState, useMemo, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../components/Card';
import './Login.css';
import Input from '../components/Input';
import GreenButton from '../components/GreenButton';
import InnerGreenButton from '../components/InnerGreenButton';
import InfoContext from '../context/infoContext';

function Login() {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [messageErrorLogin, setMessageErrorLogin] = useState('none');
  const { requestLogin, setInfoUser } = useContext(InfoContext);

  const history = useHistory();

  const handleChangeLogin = ({ target: { value, name } }) => {
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const handleClickLogin = async () => {
    const getUser = await requestLogin(login);

    if (getUser.token) {
      localStorage.setItem('user', JSON.stringify(getUser));
      setInfoUser(getUser);
      history.replace('customer/products');
    }

    setMessageErrorLogin('block');
  };

  const emailValidation = (email) => {
    const regexValidation = /\S+@\S+\.\S+/;
    return regexValidation.test(email);
  };

  const PASSWORD_LENGHT = 6;
  const passwordValidation = (password) => password.length >= PASSWORD_LENGHT;

  const buttonStatus = useMemo(() => !emailValidation(login.email)
    || !passwordValidation(login.password), [login]);

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
            inputClass="input"
            labelClass="label"
            value={ login.email }
            datatestid="common_login__input-email"
            handleChange={ handleChangeLogin }
          />
          <Input
            labelName="Senha"
            inputPlaceholder="***************"
            name="password"
            type="password"
            inputClass="input"
            labelClass="label"
            value={ login.password }
            datatestid="common_login__input-password"
            handleChange={ handleChangeLogin }
          />
          <GreenButton
            text="LOGIN"
            datatestid="common_login__button-login"
            buttonState={ buttonStatus }
            handleClick={ handleClickLogin }
          />
          <InnerGreenButton
            text="Ainda não tenho conta"
            datatestid="common_login__button-register"
            gotoRegister={ () => history.push('/register') }
          />
          <p
            data-testid="common_login__element-invalid-email"
            style={ { display: messageErrorLogin, color: 'red' } }
          >
            Email ou senha invalida
          </p>
        </Card>
      </div>
    </div>
  );
}

export default Login;
