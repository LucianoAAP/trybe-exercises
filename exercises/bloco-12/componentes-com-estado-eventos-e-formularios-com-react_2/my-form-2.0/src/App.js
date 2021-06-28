import React from 'react';
import './App.css';
import DadosPessoais from './componentes/DadosPessoais';
import UltimoEmprego from './componentes/UltimoEmprego';
import Dados from './componentes/Dados';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      nome: '',
      email: '',
      cpf: '',
      endereço: '',
      cidade: '',
      estado: '',
      residencia: '',
      resumo: '',
      descriçao: '',
      submitted: false,
    }
  }

  handleChange({ target }) {
    const { name } = target;
    if (name === 'nome') target.value = target.value.toUpperCase();
    if (name === 'endereço') target.value = target.value.replace(/[^\w\s]/gi, '');
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    })
  }

  handleBlur(event) {
    let { name, value } = event.target;
    if (name === 'cidade' && !isNaN(parseInt(value))) value = '';
    this.setState({ [name]: value });
  }

  handleReset(event) {
    event.preventDefault()
    Object.keys(this.state).forEach((key) => {
      if (key === 'submitted') {
        this.setState({ [key]: false });
      } else {
        this.setState({ [key]: '' });
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true })
  }

  render() {
    const { nome, email, cpf, endereço, cidade, estado, residencia, resumo, descriçao, submitted } = this.state;
    return (
      <form>
        <DadosPessoais nameValue={ nome } emailValue={ email } cpfValue={ cpf } endereçoValue={ endereço } cidadeValue={ cidade } estadoValue={ estado } handleChange={ this.handleChange } handleBlur={ this.handleBlur } />
        <UltimoEmprego resumoValue={ resumo } descriçaoValue={ descriçao } handleChange={ this.handleChange } />
        <button name='submit' onClick={ this.handleSubmit }>Enviar</button>
        <button name='reset' onClick={ this.handleReset }>Limpar</button>
        <div>
          {submitted === true ? <Dados nameValue={ nome } emailValue={ email } cpfValue={ cpf } endereçoValue={ endereço } cidadeValue={ cidade } estadoValue={ estado } residenciaValue={ residencia } resumoValue={ resumo } descriçaoValue={ descriçao } /> : ''}
        </div>
      </form>
    );
  }
}

export default App;
