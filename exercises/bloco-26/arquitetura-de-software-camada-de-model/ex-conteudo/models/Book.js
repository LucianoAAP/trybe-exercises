const connection = require('./connection');

const getAll = async () => {
    const [books] = await connection.execute(
        'SELECT * FROM model_example.books;',
    );
    return books.map(({ id, title, author_id }) => ({ id, title, authorId: author_id }));
};

const getByAuthorId = async (author_id) => {
    const [books] = await connection.execute(
        'SELECT * FROM model_example.books WHERE author_id = ?;',
        [author_id],
    );
    if (books.length === 0) return null;
    return books.map(({ id, title, author_id }) => ({ id, title, authorId: author_id }));
};

const getById = async (id) => {
    const [books] = await connection.execute(
        'SELECT * FROM model_example.books WHERE id = ?;',
        [id],
    );
    if (books.length === 0) return null;
    return books.map(({ id, title, author_id }) => ({ id, title, authorId: author_id }))[0];
};

module.exports = {
    getAll,
    getByAuthorId,
    getById,
};