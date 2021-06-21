import './App.css';
// import CriaEu from './component';

const compromissos = ['acordar', 'escovar os dentes', 'ir ao banco', 'almoçar', 'estudar', 'dormir'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return (
    // CriaEu()
    <ul>
      {compromissos.map((compromisso) => Task(compromisso))}
    </ul>
  );
}

export default App;
