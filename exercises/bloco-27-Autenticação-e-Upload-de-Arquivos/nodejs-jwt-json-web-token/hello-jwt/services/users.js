const model = require('../models/users.js');

const create = async (username, password) => {
  const userExists = await model.findOne(username);

  if (userExists) {
    return {
      error: {
        statusCode: 409,
        message: 'Username already exists',
        code: 'usernameExists',
      },
    };
  }

  const admin = Math.floor(Math.random() * 100) > 50;

  await model.create(username, password, admin);

  return {
    username,
    admin,
  };
};

const login = async (username, password) => {
  const user = await model.findOne(username);
  if (!user) {
    return {
      error: {
        statusCode: 404,
        message: 'User not found',
        code: 'userNotFound',
      },
    };
  }
  if (password !== user.password) {
    return {
      error: {
        statusCode: 401,
        message: 'senha incorreta',
        code: 'wrongPassword',
      },
    };
  }
  return user;
};

module.exports = {
  create,
  login,
};