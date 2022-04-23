import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import RegisteredClients from './pages/RegisteredClients';
import Register from './pages/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={ Login } />
        <Route path="/registeredclients" component={ RegisteredClients } />
        <Route path="/register" component={ Register } />
        <Route exact path="/" component={ Home } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
