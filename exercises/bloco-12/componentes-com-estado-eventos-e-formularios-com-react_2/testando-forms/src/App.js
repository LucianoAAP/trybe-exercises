import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      Escreva: '',
      Selecione: '',
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <select name='Selecione' ></select>
        <input name='check' type='checkbox' />
        <input name='Escreva' onChange={this.handleChange} value={this.state.Escreva} />
      </form>
    );
  }
}

export default App;
