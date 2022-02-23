import React from 'react';
import './App.css';
// import rockGlass from './images/rockGlass.svg';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import InfoProvider from './context/infoProvider';
import Login from './pages/login';

function App() {
  return (
    <BrowserRouter>

      <InfoProvider>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/login" component={ Login } />
        </Switch>
      </InfoProvider>

    </BrowserRouter>
  );
}

export default App;
