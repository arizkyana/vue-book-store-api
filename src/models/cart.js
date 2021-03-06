
const database = require('../helpers/database');

const { Schema, SchemaTypes } = database;

function Cart() {

  // console.log(database);

  const model = database.model('cart', new Schema({
    book: {
      type: SchemaTypes.ObjectId,
      ref: 'book'
    },
    qty: {
      type: SchemaTypes.Number,
      default: 1
    },
    user: {
      type: SchemaTypes.ObjectId,
      ref: 'user'
    },
    ischeckout: {
      type: SchemaTypes.Boolean,
      default: false
    }
  }, { collection: 'cart' }));

  return model;
}

module.exports = Cart();