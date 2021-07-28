import './App.css';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <Link to="/login">Login</Link>
      <Switch>
        <Route path="/login" />
        <Route exact path="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
