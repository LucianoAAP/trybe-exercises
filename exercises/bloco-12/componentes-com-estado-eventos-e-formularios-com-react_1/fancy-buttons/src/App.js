import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.testClick1.bind(this);
    this.testClick2.bind(this);
    this.testClick3.bind(this);
  }

  testClick1 = () => console.log('Teste 1');
  testClick2 = () => console.log('Teste 2');
  testClick3 = () => console.log('Teste 3');

  render() {
    return (
    <div>
      <button onClick={this.testClick1}>Teste 1</button>
      <button onClick={this.testClick2}>Teste 2</button>
      <button onClick={this.testClick3}>Teste 3</button>
    </div>
    );
  }
}

export default App;
