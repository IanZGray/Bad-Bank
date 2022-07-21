import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { 
  BrowserRouter, 
  Routes, 
  Route 
} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App';
import Login from './login/Login';
import CreateAccount from './createAccount/CreateAccount';
import Deposit from './deposit/Deposit';
import Withdraw from './withdraw/Withdraw';
import Data from './data/Data';
import Home from './home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(
  document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<App/>} >
        <Route index element ={<Home/>} />
        <Route path="home" element ={<Home/>} />
        <Route path="login" element={<Login/>} />
        <Route path="createAccount" element ={<CreateAccount/>} />
        <Route path="deposit" element ={<Deposit/>} />
        <Route path="withdraw" element ={<Withdraw/>} />
        <Route path="data" element ={<Data/>} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>There's nothing here!</h1>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);