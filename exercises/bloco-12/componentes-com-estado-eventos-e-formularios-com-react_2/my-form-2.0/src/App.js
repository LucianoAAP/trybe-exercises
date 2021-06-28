import React from 'react';
import './App.css';
import DadosPessoais from './componentes/DadosPessoais';
import UltimoEmprego from './componentes/UltimoEmprego';

class App extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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

  render() {
    const { nome, email, cpf, endereço, cidade, estado, resumo, descriçao } = this.state;
    return (
      <form>
        <DadosPessoais nameValue={ nome } emailValue={ email } cpfValue={ cpf } endereçoValue={ endereço } cidadeValue={ cidade } estadoValue={ estado } handleChange={ this.handleChange } handleBlur={ this.handleBlur } />
        <UltimoEmprego resumoValue={ resumo } descriçaoValue={ descriçao } handleChange={ this.handleChange } />
      </form>
    );
  }
}

export default App;
