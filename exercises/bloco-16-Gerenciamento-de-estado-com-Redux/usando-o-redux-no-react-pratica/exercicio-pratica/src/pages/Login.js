import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import { login } from '../redux/actions';
import PropTypes from 'prop-types';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      shouldRedirect: false,
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit() {
    const { loginChange } = this.props;
    const { email, password } = this.state;
    loginChange(email, password);
    this.setState({ shouldRedirect: true });
  }

  render() {
    const { shouldRedirect, email, password } = this.state;
    if (shouldRedirect) {
      return <Redirect to="/registeredclients" />
    }

    return (<div>
      <label htmlFor="email">
        E-mail
        <input name="email" id="email" type="text" value={ email } onChange={ this.handleChange } />
      </label>
      <label htmlFor="password">
        Senha
        <input name="password" id="password" type="text" value={ password } onChange={ this.handleChange } />
      </label>
      <button type="button" onClick={ this.handleSubmit }>Logar</button>
    </div>);
  }
}

Login.propTypes = {
  loginChange: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  loginChange: (email, password) => dispatch(login(email, password)),
});

export default connect(null, mapDispatchToProps)(Login);
