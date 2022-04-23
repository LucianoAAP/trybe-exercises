import React from 'react';
import './App.css';

class Select extends React.Component {
  render() {
    const {name, onChange, value} = this.props;
    return (
      <label>
        {value.length ? '' : 'Escolha algo!'}
        <select name={name} onChange={onChange} value={value} >
          <option value=''>Selecione</option>
          <option value='Opção 1'>Opção 1</option>
          <option value='Opção 2'>Opção 2</option>
        </select>
      </label>
    );
  }
}

class Fieldset extends React.Component {
  render() {
    const {escrevaValue, checkValue, handleChange} = this.props;
    return (
      <fieldset>
        <legend>Inputs</legend>
        <input name='check' type='checkbox' onChange={handleChange} value={checkValue} />{checkValue === false ? 'Check here' : ''}
        <input name='Escreva' onChange={handleChange} value={escrevaValue} />{escrevaValue.length ? '' : 'Escreva algo!'}
        <input name='subir' type="file" ref={this.fileInput} />
      </fieldset>
    );
  }
}

class App extends React.Component {
  constructor () {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.fileInput = React.createRef();
    this.state = {
      Escreva: '',
      Selecione: '',
      check: false,
      errors: true,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
  
    this.setState({
      [name]: value,
    },
    () => this.handleErrors());
  }

  handleErrors() {
    const {Escreva, check, Selecione} = this.state;
    Escreva === '' || check === false || Selecione === ''
    ? this.setState({errors: true})
    : this.setState({errors: false})
  }

  render() {
    const {Escreva, Selecione, check, errors} = this.state;
    return (
      <form>
        <Select name='Selecione' onChange={this.handleChange} value={Selecione} />
        <Fieldset handleChange={this.handleChange} escrevaValue={Escreva} checkValue={check} />
        <span>{errors === true ? 'Faça o que está sendo mandado!' : ''}</span>
      </form>
    );
  }
}

export default App;
