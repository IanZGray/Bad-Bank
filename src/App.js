import NavigationBar from './NavigationBar';
// import Footer from './Footer';
// import Header from './Header';

import './app.css'

// import { Route, Switch, useHistory, HashRouter } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { BankProvider } from './Context';



function App() {
  return (
    <BankProvider>
      <div className="App">
        <NavigationBar>
        </NavigationBar>
        <Outlet />
      </div>
    </BankProvider>

  );
}

export default App;
