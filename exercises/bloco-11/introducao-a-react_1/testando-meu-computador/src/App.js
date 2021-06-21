import './App.css';
// import CriaEu from './component';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    // CriaEu()
    Task('Olá')
  );
}

export default App;
