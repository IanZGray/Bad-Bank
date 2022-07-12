import logo from './logo.svg';
import './App.css';
// import AllData from './components/alldata/AllData'
import CreateAccount from './components/createAccount/CreateAccount';
import Deposit from './components/deposit/Deposit';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Withdraw from './components/withdraw/Withdraw';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
