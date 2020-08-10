const mongoose = require('mongoose');

const DATABASE_CONN = 'mongodb://localhost:27017/book-store';

function Database() {
  mongoose.connect(DATABASE_CONN, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection to database is failed!'));
  db.once('open', function () {
    console.log('connection to database is success');
  });

  return mongoose;
}

module.exports = Database();