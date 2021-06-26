import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      Escreva: '',
      Selecione: '',
      check: false,
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
    const {Escreva, Selecione, check} = this.state;
    return (
      <form>
        <select name='Selecione' onChange={this.handleChange} value={Selecione} >
          <option value=''>Selecione</option>
          <option value='Opção 1'>Opção 1</option>
          <option value='Opção 2'>Opção 2</option>
        </select>
        <fieldset>
          <legend>Inputs</legend>
          <input name='check' type='checkbox' onChange={this.handleChange} value={check} />Check here
          <input name='Escreva' onChange={this.handleChange} value={Escreva} />
          <input name='subir' type="file" ref={this.fileInput} />
        </fieldset>
      </form>
    );
  }
}

export default App;
