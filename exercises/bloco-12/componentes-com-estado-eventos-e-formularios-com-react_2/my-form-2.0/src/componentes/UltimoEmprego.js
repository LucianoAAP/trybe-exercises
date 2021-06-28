import React from 'react';
import PropTypes from 'prop-types';

class UltimoEmprego extends React.Component {
  render() {
    const { resumoValue, descriçaoValue, handleChange } = this.props;
    return (
      <fieldset>
        <label>
          Resumo do último emprego:
          <textarea name='resumo' maxLength='1000' value={ resumoValue } required onChange={ handleChange } />
        </label>
        <label>
          Descrição do cargo:
          <textarea name='descriçao' maxLength='500' value={ descriçaoValue } required onChange={ handleChange } />
        </label>
      </fieldset>
    );
  }
}

UltimoEmprego.propTypes = {
  resumoValue: PropTypes.string.isRequired,
  descriçaoValue: PropTypes.string.isRequired,
}

export default UltimoEmprego;
