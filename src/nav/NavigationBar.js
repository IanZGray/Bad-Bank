import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navigationbar.css';

function NavigationBar() {

  // useState to adjust this? useEffect?
  // const currentLocation = window.location.href;
  // const menuItem = document.querySelectorAll('nav-link');
  // const menuLength = menuItem.length
  // for (let i = 0; i<menuLength; i++){
  //   if(menuItem[i].href === currentLocation){
  //     menuItem[i].className = "active"
  //   }
  // }
  
  
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
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
              <Link className="nav-link hovertext active" data-hover="Home page link" to="home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hovertext" data-hover="Create your account here" to="createAccount">Create Account</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hovertext" data-hover="Log in here" to="login">Log In</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hovertext" data-hover="Make a deposit here" to="deposit">Deposit</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hovertext" data-hover="Withdraw money Here" to="withdraw">Withdraw</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link hovertext" data-hover="All user data is here"  to="data">All Data</Link>
            </li>          
          </ul>
        </div>
      </nav>
    );
}

export default NavigationBar;