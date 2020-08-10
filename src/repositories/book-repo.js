const Book = require('../models/book');

function BookRepo() {

  const getAll = async () => {
    return await Book.find({});
  }

  const getSingle = async (id) => {

    return await Book.findOne({ _id: id });
  }

  return {
    getAll,
    getSingle
  }
}

module.exports = BookRepo();