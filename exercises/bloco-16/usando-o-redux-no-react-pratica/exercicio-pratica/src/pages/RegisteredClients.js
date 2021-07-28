import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { sort } from '../redux/actions';
import { remove } from '../redux/actions';
import PropTypes from 'prop-types';

class RegisteredClients extends React.Component {
  render() {
    const { loggedIn, clientsToRender, sortClients, removeClient } = this.props;
    if (!loggedIn) {
      return (
        <div>
          <span>"Login não efetuado"</span>
          <Link to="/">Página principal</Link>
        </div>
      );
    }
    if (clientsToRender.length === 0) {
      return (<div>
        <p>Nenhum cliente cadastrado</p>
        <Link to="/register">Página de cadastro</Link>
      </div>);
    }
    return (<div>
      { clientsToRender.map((client) => <div key={ client.name }>
        <ul>
          <li>
            { `Nome: ${client.name}` }
          </li>
          <li>
            { `Idade: ${client.age}` }
          </li>
          <li>
            { `E-mail: ${client.email}` }
          </li>
        </ul>
        <button type="button" onClick={ () => removeClient(client) }>X</button>
      </div>) }
      <button type="button" onClick={ () => sortClients(clientsToRender) }>Ordenar</button>
      <Link to="/register">Página de cadastro</Link>
    </div>);
  }
}

RegisteredClients.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  clientsToRender: PropTypes.arrayOf(PropTypes.object).isRequired,
  sortClients: PropTypes.func.isRequired,
  removeClient: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  loggedIn: state.reducer.loggedIn,
  clientsToRender: state.reducer.clientsToRender,
});

const mapDispatchToProps = (dispatch) => ({
  sortClients: (clients) => dispatch(sort(clients)),
  removeClient: (client) => dispatch(remove(client)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisteredClients);
