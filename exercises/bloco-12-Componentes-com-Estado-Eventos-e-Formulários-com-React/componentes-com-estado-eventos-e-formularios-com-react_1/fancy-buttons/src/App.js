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
    const botao1 = document.querySelector('#teste_1');
    this.setState((previous, _prop) => ({ Teste1: previous.Teste1 + 1 }),
    () => {
      this.state.Teste1 % 2 === 0 ? botao1.style.backgroundColor = 'green' : botao1.style.backgroundColor = 'grey';
      console.log(botao1.style.backgroundColor);
    }
    );
  };
  testClick2 = () => {
    const botao2 = document.querySelector('#teste_2');
    this.setState((previous, _prop) => ({ Teste2: previous.Teste2 + 1 }),
    () => {
      this.state.Teste2 % 2 === 0 ? botao2.style.backgroundColor = 'green' : botao2.style.backgroundColor = 'grey';
      console.log(botao2.style.backgroundColor);
    }
    );
  };
  testClick3 = () => {
    const botao3 = document.querySelector('#teste_3');
    this.setState((previous, _prop) => ({ Teste3: previous.Teste3 + 1 }),
      () => {
        this.state.Teste3 % 2 === 0 ? botao3.style.backgroundColor = 'green' : botao3.style.backgroundColor = 'grey';
        console.log(botao3.style.backgroundColor);
      }
      );
  };

  render() {
    return (
    <div>
      <button id='teste_1' onClick={this.testClick1}>{this.state.Teste1}</button>
      <button id='teste_2' onClick={this.testClick2}>{this.state.Teste2}</button>
      <button id='teste_3' onClick={this.testClick3}>{this.state.Teste3}</button>
    </div>
    );
  }
}

export default App;
