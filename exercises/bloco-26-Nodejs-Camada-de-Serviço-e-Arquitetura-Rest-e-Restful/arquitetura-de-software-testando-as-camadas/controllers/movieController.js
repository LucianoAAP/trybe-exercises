const MovieService = require('../services/movieService');

const getAll = async (_req, res) => {
  const movies = await MovieService
    .getAll();

  res.status(200).json(movies);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const movie = await MovieService.getById(id);
  if (movie.error) return res.status(movie.error.status).json({ message: movie.error.message });
  return res.status(200).json(movie);
};

const create = async (req, res) => {
  const { title, directedBy, releaseYear } = req.body;

  const movie = await MovieService
    .create({ title, directedBy, releaseYear });

  if (!movie) {
    return res.status(400)
      .json({ message: 'Dados inválidos' });
  }

  res.status(201)
    .json({ message: 'Filme criado com sucesso!' });
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  const movie = await MovieService.deleteMovie(id);
  if (movie.error) return res.status(movie.error.status).json({ message: movie.error.message });
  return res.status(200).json(movie);
};

module.exports = {
  getAll,
  create,
  getById,
  deleteMovie,
};