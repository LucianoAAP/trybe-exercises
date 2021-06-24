import React from 'react';
import './App.css';

const testClick1 = () => console.log('Teste 1');
const testClick2 = () => console.log('Teste 2');
const testClick3 = () => console.log('Teste 3');

class App extends React.Component {
  render() {
    return (
    <div>
      <button onClick={testClick1}>Teste 1</button>
      <button onClick={testClick2}>Teste 2</button>
      <button onClick={testClick3}>Teste 3</button>
    </div>
    );
  }
}

export default App;
