const { Schema, SchemaTypes } = require('../../helpers/database');

function CartSchema() {
  return new Schema({
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
  }, { collection: 'cart' })
}

return CartSchema();