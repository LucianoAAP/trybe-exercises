import React from 'react';
import PropTypes from 'prop-types';

class Dados extends React.Component {
  render() {
    const { nameValue, emailValue, cpfValue, endereçoValue, cidadeValue, estadoValue, residenciaValue, resumoValue, descriçaoValue } = this.props;
    return (
      <div>
        <h2>Dados</h2>
        <h3>Dados Pessoais</h3>
        <p>Nome: { nameValue }</p>
        <p>Email: { emailValue }</p>
        <p>CPF: { cpfValue }</p>
        <p>Endereço: { endereçoValue }</p>
        <p>Cidade: { cidadeValue }</p>
        <p>Estado: { estadoValue }</p>
        <p>Tipo de residência: { residenciaValue }</p>
        <h3>Dados Profissionais</h3>
        <p>Resumo sobre o último emprego: { resumoValue }</p>
        <p>Descrição do cargo: { descriçaoValue }</p>
      </div>
    )
  }
}

Dados.propTypes = {
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  cpfValue: PropTypes.string.isRequired,
  endereçoValue : PropTypes.string.isRequired,
  cidadeValue: PropTypes.string.isRequired,
  estadoValue: PropTypes.string.isRequired,
  residenciaValue: PropTypes.string.isRequired,
  resumoValue: PropTypes.string.isRequired,
  descriçaoValue: PropTypes.string.isRequired,
}

export default Dados;
