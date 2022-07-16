import NavigationBar from './NavigationBar';
import Footer from './Footer';
import Header from './Header';
import UserContext from './userContext';

import Login from './Login';
import CreateAccount from './CreateAccount';
import Deposit from './Deposit';
import Home from './Home';
import Withdraw from './Withdraw';
import Data from './Data';
import Missing from './Missing';

import './app.css'

// import { Route, Switch, useHistory, HashRouter } from 'react-router-dom';
import { Outlet, Link, } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  return (
    <div className="App">
      <NavigationBar>
      </NavigationBar>
      <Outlet />
    </div>
  );
}

export default App;
