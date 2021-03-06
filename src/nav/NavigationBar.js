import { Link } from 'react-router-dom';
import './navigationbar.css';

function NavigationBar() {
  
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-info">
      <Link className="navbar-brand" to="home">BadBank</Link>
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
        <li id="home" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Home page link" to="home">Home</Link>
          </li>
          <li id="createAccount" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Create your account here" to="createAccount">Create Account</Link>
          </li>
          <li id="logIn" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Log in here" to="login">Log In</Link>
          </li>
          <li id="deposit" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Make a deposit here" to="deposit">Deposit</Link>
          </li>
          <li id="withdraw" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="Withdraw money Here" to="withdraw">Withdraw</Link>
          </li>
          <li id="allData" className="nav-item">
            <Link data-toggle="pill" className="nav-link hovertext" data-hover="All user data is here"  to="data">All Data</Link>
          </li>          
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;