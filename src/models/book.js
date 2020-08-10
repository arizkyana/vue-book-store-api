
const database = require('../helpers/database');

const { Schema } = database;

function Book() {

  // console.log(database);

  const model = database.model('book', new Schema({
    title: String,
    author: String,
    description: String,
    category: String,
    img: String
  }, { collection: 'book' }));

  return model;
}


module.exports = Book();