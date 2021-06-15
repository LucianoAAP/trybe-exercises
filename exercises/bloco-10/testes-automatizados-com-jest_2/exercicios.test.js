const { describe, test, it } = require('@jest/globals');

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
  
        return reject({ error: 'User with ' + id + ' not found.' });
    });
  };
  
  const getUserName = (userID) => {
    return findUserById(userID).then(user => user.name);
  };

  describe('Testa getUserName', () => {
    it('should work', () => getUserName(4).then((name) => expect(name).toBe('Mark')));
    it('should not work', () => getUserName(3).catch((name) => expect(name).toEqual({ error: 'User with 3 not found.'})));
  });
