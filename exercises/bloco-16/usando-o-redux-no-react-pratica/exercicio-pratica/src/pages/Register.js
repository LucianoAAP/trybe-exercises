import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerClient } from '../redux/actions';
import PropTypes from 'prop-types';

class Register extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: 0,
      email: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRegister = this.handleRegister.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleRegister() {
    const { register } = this.props;
    const { name, age, email } = this.state;
    register(name, age, email);
    this.setState({ name: '', age: 0, email: '' });
  }

  render() {
    const { loggedIn } = this.props;
    const { name, age, email } = this.state;
    if (!loggedIn) {
      return (
        <span>"Login não efetuado"</span>
      );
    }
    return (
      <div>
        <label htmlFor="name">
          Nome
          <input name="name" id="name" type="text" value={ name } onChange={ this.handleChange } />
        </label>
        <label htmlFor="age">
          Idade
          <input name="age" id="age" type="number" value={ age } onChange={ this.handleChange } />
        </label>
        <label htmlFor="email">
          E-mail
          <input name="email" id="email" type="text" value={ email } onChange={ this.handleChange } />
        </label>
        <button type="button" onClick={ this.handleRegister }>Cadastrar</button>
        <Link to="/registeredclients">Clientes cadastrados</Link>
      </div>
    );
  }
}

Register.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loggedIn: state.reducer.loggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  register: (name, age, email) => dispatch(registerClient(name, age, email)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Register);
