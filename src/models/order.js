
const database = require('../helpers/database');
const OrderSchema = require('./schemas/order-schema');

function Order() {

  // console.log(database);

  const model = database.model('order', OrderSchema);

  return model;
}

module.exports = Order();