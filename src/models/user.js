const bcyrpt = require('bcrypt');
const database = require('../helpers/database');

const { Schema, SchemaTypes } = database;

function User() {

  // console.log(database);

  const schema = new Schema({
    username: {
      type: SchemaTypes.String,
      unique: true
    },
    password: {
      type: SchemaTypes.String
    },
    email: {
      type: SchemaTypes.String,
      unique: true
    },
    fullName: {
      type: SchemaTypes.String
    }
  }, { collection: 'user' });

  schema.pre('save', function (next, doc) {
    this.password = bcyrpt.hashSync(this.password, 10);
    next();
  });

  return database.model('user', schema);
}


module.exports = User();