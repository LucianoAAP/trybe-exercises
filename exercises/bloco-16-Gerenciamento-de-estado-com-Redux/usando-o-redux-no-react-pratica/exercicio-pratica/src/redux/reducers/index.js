const INITIAL_STATE = {
  loggedIn: false,
  email: '',
  password: '',
  registeredClients: [],
  clientsToRender: [],
  sorted: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOG_IN':
      return {
        ...state,
        loggedIn: true,
        email: action.email,
        password: action.password,
      };
    case 'REGISTER_CLIENT':
      const newClient = { name: action.name, age: action.age, email: action.email };
      return {
        ...state,
        registeredClients: [...state.registeredClients, newClient],
        clientsToRender: [...state.clientsToRender, newClient],
        sorted: false,
      };
    case 'SORT_CLIENTS':
      if (state.sorted) {
        return {
          ...state,
          clientsToRender: state.registeredClients, sorted: false,
        };
      }
      const sortedClients = [...state.registeredClients].sort((a, b) => (a.name > b.name) ? 1 : -1);
      return {
        ...state,
        clientsToRender: sortedClients, sorted: true,
      };
    case 'REMOVE_CLIENT':
      const filteredClients = state.registeredClients.filter((client) => client !== action.client);
      const filteredClientsToRender = state.clientsToRender.filter((client) => client !== action.client);
      return {
        ...state,
        registeredClients: filteredClients,
        clientsToRender: filteredClientsToRender,
      };
    default:
      return state;
  }
}

export default reducer;
