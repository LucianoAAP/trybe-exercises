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
          <input name='nome' type='name' maxLength='40' value={ nameValue } onChange={ handleChange } />
        </label>
        <label>
          Email:
          <input name='email' type='email' maxLength='50' value={ emailValue } onChange={ handleChange } />
        </label>
        <label>
          CPF;
          <input name='cpf' maxLength='11' value={ cpfValue } onChange={ handleChange } />
        </label>
        <label>
          Endereço:
          <input name='endereço' maxLength='200' value={ endereçoValue } onChange={ handleChange } />
        </label>
        <label>
          Cidade:
          <input name='cidade' maxLength='28' value={ cidadeValue } onChange={ handleChange } onBlur={ handleBlur } />
        </label>
        <label>
          Estado:
          <select name='estado' value={ estadoValue } onChange={ handleChange }>
            <option value=''>Selecione o estado</option>
            {states.map((estado) => <option value={ estado }>{ estado }</option>)}
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
  cpfValue: PropTypes.number.isRequired,
  endereçoValue : PropTypes.string.isRequired,
  cidadeValue: PropTypes.string.isRequired,
  estadoValue: PropTypes.string.isRequired,
}

export default DadosPessoais;
