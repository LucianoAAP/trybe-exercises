const { describe, test, it } = require('@jest/globals');
const fetch = require('node-fetch');

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

describe('Testa uppercase', () => {
  test('should be upper case', (done) => {
    const callback = (param) => {
      setTimeout(() => {
        expect(param).toBe('TESTE');
        done();
      }, 1500);;
    };
    uppercase('teste', callback);
  });
});

const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    };

    return reject({
      error: 'User with ' + id + ' not found.'
    });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
};

describe('Testa getUserName', () => {
  it('should work', () => getUserName(4).then((name) => expect(name).toBe('Mark')));
  it('should not work', () => getUserName(3).catch((name) => expect(name).toEqual({
    error: 'User with 3 not found.'
  })));
  it('should work with async/await', async () => {
    const name = await getUserName(4);
    expect(name).toBe('Mark');
  });
  it('should not work with async/await', async () => {
    try {
      await getUserName(3)
    } catch (error) {
      expect(error).toEqual({
        error: 'User with 3 not found.'
      });
    }
  });
});

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name);
    });
};

describe('Testa getRepos', () => {
  it('should contain these repos', async() => {
    const repos = await getRepos('https://api.github.com/orgs/tryber/repos');
    expect(repos).toContain('sd-01-week4-5-project-todo-list');
    expect(repos).toContain('sd-01-week4-5-project-meme-generator');
  });
});
