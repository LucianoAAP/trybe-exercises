const connection = require('./connection');

const getByCEP = async (cep) => {
  const validCep = cep.replace(/-/ig, '');
  const [cepData] = await connection.execute(
    'SELECT * FROM cep_lookup.ceps WHERE cep = ?',
    [validCep]
  );
  if (cepData.length === 0) return null;
  return cepData[0];
};

const createCEP = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const validCep = cep.replace(/-/ig, '');
  return await connection.execute(
    'INSERT INTO cep_lookup.ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',
    [validCep, logradouro, bairro, localidade, uf]
  );
};

module.exports = {
  getByCEP,
  createCEP,
};
