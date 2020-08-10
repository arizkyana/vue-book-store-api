const { Schema, SchemaTypes } = require('../../helpers/database');

const CartSchema = require('./cart-schema');

function OrderSchema() {
  return new Schema({
    carts: [CartSchema],
    summary: {
      type: SchemaTypes.Number,
    },
    user: {
      type: SchemaTypes.ObjectId,
      ref: 'user'
    },
    ispaid: {
      type: SchemaTypes.Boolean,
      default: false
    }
  }, { collection: 'order' })
}

return OrderSchema();