const express = require('express');
const rescue = require('express-rescue');
const ProductService = require('../services/productService');

const router = express.Router();

router.get('/', rescue (async (_req, res) => {
  const products = await ProductService.getAll();

  return res.status(200).json(products);
}));

router.get('/:id', rescue (async (req, res, next) => {
  const product = await ProductService.getById(req.params.id);

  if (product.error) return next(product.error);

  return res.status(200).json(product);
}));

router.post('/', rescue (async (req, res) => {
  const { name, brand } = req.body;

  const newProduct = await ProductService.add(name, brand);

  return res.status(200).json(newProduct);
}));

router.delete('/:id', rescue (async (req, res, next) => {
  const products = await ProductService.exclude(req.params.id);

  if (products.error) return next(products.error);

  return res.status(200).json(products);
}));

router.put('/:id', rescue (async (req, res, next) => {
  const { name, brand } = req.body;

  const products = await ProductService.update(req.params.id, name, brand);

  if (products.error) return next(products.error);

  return res.status(200).json(products);
}));

module.exports = router;
