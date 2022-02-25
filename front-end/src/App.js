import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import InfoProvider from './context/infoProvider';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CustomerProducts from './pages/CustomerProducts';

function App() {
  return (
    <BrowserRouter>

      <InfoProvider>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route path="/register" component={ Cadastro } />
          <Route path="/customer/products" component={ CustomerProducts } />
        </Switch>
      </InfoProvider>

    </BrowserRouter>
  );
}

export default App;
