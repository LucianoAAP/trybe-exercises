const sinon = require('sinon');
const { expect } = require('chai')

const MoviesController = require('../../controllers/movieController');
const MoviesServices = require('../../services/movieService');

describe('Ao chamar o controller de getById', () => {
  const ID_EXAMPLE = '604cb554311d68f491ba5781';

  describe('Quando o filme não existe', () => {
    const request = {};
    const response = {};
    const error = { error: { status: 404, code: 'Not Found', message: 'Filme não encontrado' } };
    
    before(async () => {
      request.params = { id: ID_EXAMPLE };    
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getById').resolves(error);
    });
    
    after(() => {
      MoviesServices.getById.restore();
    });

    it('É chamado o método "status" passando o código 404', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.status.calledWith(404)).to.be.equal(true);
    });

    it('É chamado o método "json" passando um objeto', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });

    it('é chamado o método "json" passando um objeto com mensagem de erro', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.json.calledWith({ message: error.error.message })).to.be.equal(true);
    });
  });

  describe('Quando o filme existe', () => {
    const request = {};
    const response = {};
    const expectedMovie = {
      id: ID_EXAMPLE,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };
    
    before(async () => {
      request.params = { id: ID_EXAMPLE };    
      
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns();
      
      sinon.stub(MoviesServices, 'getById').resolves(expectedMovie);
    });
    
    after(() => {
      MoviesServices.getById.restore();
    });

    it('é chamado o método "status" passando o código 200', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.status.calledWith(200)).to.be.equal(true);
    });
    
    it('é chamado o método "json" passando um objeto', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.json.calledWith(sinon.match.object)).to.be.equal(true);
    });
    
    it('é chamado o método "json" com o filme', async () => {
      await MoviesController.getById(request, response);
      
      expect(response.json.calledWith(expectedMovie)).to.be.equal(true);
    });
  });
});
