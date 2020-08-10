require('dotenv').config();

const PORT = process.env.PORT || 3030;
const HOST = process.env.HOST || 'localhost';

const express = require('express');
const bodyParser = require('body-parser');
const consola = require('consola');
const cors = require('cors');

const router = require('./src/router');

const app = express();

app.use(cors("*"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/v1', router(app));


const handleError404 = (req, res, next) => {
  return next({
    message: 'Not found',
    status: 404
  });
}

const handleAllError = (err, req, res, next) => {
  if (err.stack) {
    const errStack = err.stack.split("\n");
    return res.status(500).send({
      code: 500,
      message: {
        error: errStack[0],
        file: errStack[1].trim()
      }
    })
  } else {
    return res.status(err.status).send({
      code: err.status,
      message: err.message
    })
  }
}


app.use(handleError404);
app.use(handleAllError);

app.listen(PORT, HOST, () => {

  consola.info(`Server running on http://${HOST}:${PORT}`);
});

