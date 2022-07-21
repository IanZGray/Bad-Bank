import NavigationBar from './nav/NavigationBar';
import './app.css'
import { Outlet } from 'react-router-dom';
import { BankProvider } from './context/Context';

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
