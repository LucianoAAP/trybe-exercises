const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Busca o filme pelo ID', () => {
  const ID_EXAMPLE = '604cb554311d68f491ba5781';

  describe('Quando há erro', () => {
    before(() => {
      sinon.stub(MoviesModel, 'deleteMovie')
        .resolves(null);
    });

    after(() => {
      MoviesModel.deleteMovie.restore();
    });

    it('Retorna erro Not Found', async () => {
      const response = await MoviesService.deleteMovie(ID_EXAMPLE);
      const error = { error: { status: 404, code: 'Not Found', message: 'Filme não encontrado' } };
      expect(response).to.be.deep.equal(error);
    });
  });

  describe('Quando o filme existe', () => {
    const expectedMovie = {
      id: ID_EXAMPLE,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      sinon.stub(MoviesModel, 'deleteMovie')
        .resolves(expectedMovie);
    });

    after(() => {
      MoviesModel.deleteMovie.restore();
    });

    it('Retorna o filme', async () => {
      const response = await MoviesService.deleteMovie(ID_EXAMPLE);
      expect(response).to.be.deep.equal(expectedMovie);
    });
  });
});