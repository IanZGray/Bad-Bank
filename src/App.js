import './App.css';

import CreateAccount from './components/createAccount/CreateAccount';
import Deposit from './components/deposit/Deposit';
import Home from './components/home/Home';
import Navigation from './components/navigation/Navigation';
import Withdraw from './components/withdraw/Withdraw';
import Data from './components/data/Data';

function App() {
  return (
    <><div>
      <h1>hello</h1>
    <Withdraw></Withdraw> <Navigation></Navigation> <Home></Home> <Deposit></Deposit> <CreateAccount></CreateAccount> <Data></Data>
    </div>
    </>
  );
}

export default App;
