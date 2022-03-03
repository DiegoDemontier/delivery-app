import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import InfoProvider from './context/infoProvider';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import OrderDetails from './pages/OrderDetails';
import Orders from './pages/Orders';
import SellerOrders from './pages/SellerOders';
import SellerOrdersDetails from './pages/SellerOrdersDetails';

function App() {
  return (
    <BrowserRouter>

      <InfoProvider>
        <Switch>
          <Route path="/login" component={ Login } />
          <Route exact path="/"><Redirect to="/login" /></Route>
          <Route path="/register" component={ Cadastro } />
          <Route path="/customer/products" component={ CustomerProducts } />
          <Route path="/customer/checkout" component={ CustomerCheckout } />
          <Route exact path="/customer/orders" component={ Orders } />
          <Route exact path="/customer/orders/:id" component={ OrderDetails } />
          <Route exact path="/seller/orders" component={ SellerOrders } />
          <Route exact path="/seller/orders/details" component={ SellerOrdersDetails } />
        </Switch>
      </InfoProvider>

    </BrowserRouter>
  );
}

export default App;
