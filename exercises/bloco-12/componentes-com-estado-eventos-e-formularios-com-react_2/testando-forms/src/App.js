import React from 'react';
import './App.css';

class Select extends React.Component {
  render() {
    const {name, onChange, value} = this.props;
    return (
      <select name={name} onChange={onChange} value={value} >
        <option value=''>Selecione</option>
        <option value='Opção 1'>Opção 1</option>
        <option value='Opção 2'>Opção 2</option>
      </select>
    );
  }
}

class Input extends React.Component {
  render() {
    const {name, type, onChange, value} = this.props;
    return (
      <input name={name} type={type} onChange={onChange} value={value} />
    );
  }
}

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
        <Select name='Selecione' onChange={this.handleChange} value={Selecione} />
        <fieldset>
          <legend>Inputs</legend>
          <Input name='check' type='checkbox' onChange={this.handleChange} value={check} />Check here
          <Input name='Escreva' onChange={this.handleChange} value={Escreva} />
          <Input name='subir' type="file" ref={this.fileInput} />
        </fieldset>
      </form>
    );
  }
}

export default App;
