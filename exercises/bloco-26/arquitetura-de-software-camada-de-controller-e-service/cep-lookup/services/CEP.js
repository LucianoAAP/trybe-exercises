const CEP = require('../models/CEP');
const Joi = require('joi');

const getByCEP = async (cep) => {
  const cepRegex = /\d{5}-?\d{3}/;
  const isValid = cepRegex.test(cep);
  if (!isValid) return { error: { code: 'invalidData', message: 'CEP inválido', status: 400 } };
  const cepData = await CEP.getByCEP(cep);
  if (!cepData) return { error: { code: 'notFound', message: 'CEP não encontrado', status: 404 } };
  return cepData;
};

const createCEP = async ({ cep, logradouro, bairro, localidade, uf }) => {
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required().length(2),
  }).validate({ cep, logradouro, bairro, localidade, uf });
  if (error) return error;
  const oldCEPData = await CEP.getByCEP(cep);
  if (oldCEPData) return { error: { code: 'alreadyExists', message: 'CEP já existente', status: 409 } };
  await CEP.createCEP({ cep, logradouro, bairro, localidade, uf });
  return getByCEP(cep);
};

module.exports = {
  getByCEP,
  createCEP,
};
