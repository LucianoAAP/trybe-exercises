import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.testClick1.bind(this);
    this.testClick2.bind(this);
    this.testClick3.bind(this);
    this.state = {
      Teste1: 0,
      Teste2: 0,
      Teste3: 0,
    }
  }

  testClick1 = () => {
    this.setState((previous, _prop) => ({
      Teste1: previous.Teste1 + 1
    }));
    console.log(this.state.Teste1);
  };
  testClick2 = () => {
    this.setState((previous, _prop) => ({
      Teste2: previous.Teste2 + 1
    }));
    console.log(this.state.Teste2);
  };
  testClick3 = () => {
    this.setState((previous, _prop) => ({
      Teste3: previous.Teste3 + 1
    }));
    console.log(this.state.Teste3);
  };

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
