
const database = require('../helpers/database');

const { Schema, SchemaTypes } = database;

function Cart() {

  // console.log(database);

  const model = database.model('cart', new Schema({
    book: {
      type: SchemaTypes.ObjectId,
      ref: 'book'
    },
    qty: SchemaTypes.Number,
    user: {
      type: SchemaTypes.ObjectId,
      ref: 'user'
    }
  }, { collection: 'cart' }));

  return model;
}

module.exports = Cart();