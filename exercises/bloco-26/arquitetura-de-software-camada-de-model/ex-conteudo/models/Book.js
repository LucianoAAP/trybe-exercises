const connection = require('./connection');
const { ObjectId } = require('mongodb');

// const getAll = async () => {
//     const [books] = await connection.execute(
//         'SELECT * FROM model_example.books;',
//     );
//     return books.map(({ id, title, author_id }) => ({ id, title, authorId: author_id }));
// };

// const getByAuthorId = async (author_id) => {
//     const [books] = await connection.execute(
//         'SELECT * FROM model_example.books WHERE author_id = ?;',
//         [author_id],
//     );
//     if (books.length === 0) return null;
//     return books.map(({ id, title, author_id }) => ({ id, title, authorId: author_id }));
// };

// const getById = async (id) => {
//     const [books] = await connection.execute(
//         'SELECT * FROM model_example.books WHERE id = ?;',
//         [id],
//     );
//     if (books.length === 0) return null;
//     return books.map(({ id, title, author_id }) => ({ id, title, authorId: author_id }))[0];
// };

// const create = (title, author_id) => {
//     return connection.execute(
//         'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
//         [title, author_id],
//     );
// };

const isValid = async (title, author_id) => {
    if (!title || typeof title !== 'string') return false;
    const [author] = await connection.execute(
             'SELECT * FROM model_example.authors WHERE id = ?',
             [author_id],
         );
    if (!author_id || author.length === 0) return false;
    return true;
};

const getAll = async () => {
    return connection()
        .then((db) => db.collection('books').find().toArray())
        .then((books) =>
            books.map(({ _id, title, author_id }) => ({ id: _id, title, authorId: author_id })));
};

const getByAuthorId = async (author_id) => {
    return connection()
        .then((db) => db.collection('books').find({ author_id: Number(author_id) }).toArray())
        .then((books) =>
            books.map(({ _id, title, author_id }) => ({ id: _id, title, authorId: author_id })));
};

const getById = async (id) => {
    if (!ObjectId.isValid(id)) {
        return null;
    }
    const book = await connection()
        .then((db) => db.collection('books').findOne(new ObjectId(id)));
        if (!book) return null;
        const { _id, title, author_id } = book;
    return { id: _id, title, authorId: author_id };
};

const create = (title, author_id) => {
    return connection.execute(
        'INSERT INTO model_example.books (title, author_id) VALUES (?,?)',
        [title, author_id],
    );
};

module.exports = {
    getAll,
    getByAuthorId,
    getById,
    isValid,
    create,
};