const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { ObjectId } = require('mongodb');

const mongoConnection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Exclui filme', () => {
  let connectionMock; 
  const DBServer = new MongoMemoryServer();
  const ID_EXAMPLE = '604cb554311d68f491ba5781';

  before(async () => {
    const URLMock = await DBServer.getUri();  
    connectionMock = await MongoClient.connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((conn) => conn.db('model_example'));
    
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });
  
  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('Quando o filme não é encontrado', () => {
    it('retorna null', async () => {
      const movie = await MoviesModel.deleteMovie(ID_EXAMPLE);
      expect(movie).to.be.equal(null);
    });
  });

  describe('Quando o filme é encontrado', () => {
    const expectedMovie = {
      _id: ObjectId(ID_EXAMPLE),
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(async () => {
      await connectionMock.collection('movies').insertOne({ ...expectedMovie });
    }); 
    
    after(async () => {
      await connectionMock.collection('movies').drop();
    });

    it('Retorna um objeto com todas as propriedades do filme', async () => {
      const movie = await MoviesModel.deleteMovie(ID_EXAMPLE);
      expect(movie).to.be.an('object');
      expect(movie).to.have.property('id');
      expect(movie).to.have.property('title');
      expect(movie).to.have.property('directedBy');
      expect(movie).to.have.property('releaseYear');
    });

    it('Não deve existir um filme com o título cadastrado!', async () => {
      await MoviesModel.deleteMovie(expectedMovie);
      const movieCreated = await connectionMock.collection('movies')
        .findOne({ title: expectedMovie.title });
      expect(movieCreated).to.be.null;
    });
  });
});
