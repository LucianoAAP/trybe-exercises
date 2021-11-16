// const ProductModel = require('../models/productModel');
const ProductModel = require('../models/productModelM');

const add = async (name, brand) => await ProductModel.add(name, brand);

const getAll = async () => await ProductModel.getAll();

const getById = async (id) => {
  const product = await ProductModel.getById(id);
  if (product === null) {
    return { error: { status: 404, code: 'notFound', message: 'Produto não encontrado' } };
  };
  return product;
};

const update = async (id, name, brand) => {
  const product = await ProductModel.getById(id);
  if (product === null) {
    return { error: { status: 404, code: 'notFound', message: 'Produto não encontrado' } };
  };
  await ProductModel.update(id, name, brand);
  return await ProductModel.getById(id);
};

const exclude = async (id) => {
  const product = await ProductModel.getById(id);
  if (product === null) {
    return { error: { status: 404, code: 'notFound', message: 'Produto não encontrado' } };
  };
  return await ProductModel.exclude(id);
};

module.exports = { add, getAll, getById, update, exclude };
