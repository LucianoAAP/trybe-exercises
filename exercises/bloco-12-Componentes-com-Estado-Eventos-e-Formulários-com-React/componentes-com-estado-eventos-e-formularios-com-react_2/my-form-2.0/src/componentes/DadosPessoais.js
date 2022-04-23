import React from 'react';
import PropTypes from 'prop-types';

const states = ['Rio de Janeiro', 'Minas Gerais', 'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];


class DadosPessoais extends React.Component {
  render() {
    const { nameValue, emailValue, cpfValue, endereçoValue, cidadeValue, estadoValue, handleChange, handleBlur } = this.props;
    return (
      <fieldset>
        <label>
          Nome:
          <input name='nome' type='name' maxLength='40' value={ nameValue } required onChange={ handleChange } />
        </label>
        <label>
          Email:
          <input name='email' type='email' maxLength='50' value={ emailValue } required onChange={ handleChange } />
        </label>
        <label>
          CPF;
          <input name='cpf' maxLength='11' value={ cpfValue } required onChange={ handleChange } />
        </label>
        <label>
          Endereço:
          <input name='endereço' maxLength='200' value={ endereçoValue } required onChange={ handleChange } />
        </label>
        <label>
          Cidade:
          <input name='cidade' maxLength='28' value={ cidadeValue } required onChange={ handleChange } onBlur={ handleBlur } />
        </label>
        <label>
          Estado:
          <select name='estado' value={ estadoValue } required onChange={ handleChange }>
            <option value=''>Selecione o estado</option>
            {states.map((estado) => <option key={ estado } value={ estado }>{ estado }</option>)}
          </select>
        </label>
        <label>
          Tipo de residência:
          <input name='residencia' type='radio' value='casa' onChange={ handleChange } required />Casa
          <input name='residencia' type='radio' value='apartamento' onChange={ handleChange } />Apartamento
        </label>
      </fieldset>
    );
  } 
}

DadosPessoais.propTypes = {
  nameValue: PropTypes.string.isRequired,
  emailValue: PropTypes.string.isRequired,
  cpfValue: PropTypes.string.isRequired,
  endereçoValue : PropTypes.string.isRequired,
  cidadeValue: PropTypes.string.isRequired,
  estadoValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
}

export default DadosPessoais;
