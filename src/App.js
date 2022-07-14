import Nav from './components/navigation/Navigation';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';

import Login from './components/login/Login';
import CreateAccount from './components/createAccount/CreateAccount';
import Deposit from './components/deposit/Deposit';
import Home from './components/home/Home';
import Withdraw from './components/withdraw/Withdraw';
import Data from './components/data/Data';
import Missing from './components/missing/Missing';

import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  return (
    <><div className="App">
      <Header />
      <Nav />
      <Home />
      <Login />
      <CreateAccount />
      <Deposit />
      <Withdraw />
      <Data />
      <Missing />
      <Footer />
    </div>
    </>
  );
}

export default App;
