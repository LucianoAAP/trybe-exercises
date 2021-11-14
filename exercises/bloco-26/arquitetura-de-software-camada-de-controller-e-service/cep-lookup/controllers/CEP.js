const rescue = require('express-rescue');
const Joi = require('joi');
const CEP = require('../services/CEP');

const getByCEP = rescue(async (req, res, next) => {
  const { cep } = req.params;
  const cepData = await CEP.getByCEP(cep);
  if (cepData.error) return next(cepData.error);
  return res.status(200).json(cepData);
});

const createCEP = rescue(async (req, res, next) => {
  const { error } = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: Joi.string().not().empty().required(),
    bairro: Joi.string().not().empty().required(),
    localidade: Joi.string().not().empty().required(),
    uf: Joi.string().not().empty().required().length(2),
  }).validate(req.body);
  if (error) return next(error);
  const cepData = await CEP.createCEP(req.body);
  if (cepData.error) return next(cepData.error);
  return res.status(201).json(cepData);
});

module.exports = {
  getByCEP,
  createCEP,
};
