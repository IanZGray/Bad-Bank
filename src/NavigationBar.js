import React from 'react';
import { Nav } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-dom';
import './navigationbar.css'

function NavigationBar() {

  // useState to adjust this? useEffect?
  // const currentLocation = window.location.href;
  // const menuItem = document.querySelectorAll('nav-item');
  // const menuLength = menuItem.length
  // for (let i = 0; i<menuLength; i++){
  //   if(menuItem[i].href === currentLocation){
  //     menuItem[i].className = "active"
  //   }
  // }
    return (
      <Nav className="navbar navbar-expand-lg navbar-light bg-info">
        <a className="navbar-brand" href="Home">BadBank</a>
        <button 
            className="navbar-toggler" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
            >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
          <li className="nav-item">
              <a className="nav-link hovertext" data-hover="Home page link" href="home">Home</a>
              
            </li>
            <li className="nav-item">
              <a className="nav-link hovertext" data-hover="Create your account here" href="createAccount">Create Account</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hovertext" data-hover="Log in here" href="login">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hovertext" data-hover="Make a deposit here" href="deposit">Deposit</a>
            </li>
            <li className="nav-item">
              <a className="nav-link hovertext" data-hover="Withdraw money Here" href="withdraw">Withdraw</a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link hovertext" data-hover="View your balance here" href="balance">Balance</a>
            </li> */}
            <li className="nav-item">
              <a className="nav-link hovertext" data-hover="All user data is here"  href="data">AllData</a>
            </li>          
          </ul>
        </div>
      </Nav>
    );
}

export default NavigationBar;