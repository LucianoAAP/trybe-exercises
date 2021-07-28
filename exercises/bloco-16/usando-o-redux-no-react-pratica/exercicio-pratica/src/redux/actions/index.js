export const login = (email, password) => ({
  type: 'LOG_IN',
  email,
  password,
});

export const registerClient = (name, age, email) => ({
  type: 'REGISTER_CLIENT',
  name,
  age,
  email,
});

export const sort = (clients) => ({
  type: 'SORT_CLIENTS',
  clients,
});

export const remove = (client) => ({
  type: 'REMOVE_CLIENT',
  client,
});
