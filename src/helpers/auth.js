const jwt = require('jsonwebtoken');
const moment = require('moment');

const APP_KEY = process.env.APP_KEY || '12341234'

function Authentication() {

  const sign = (data) => jwt.sign(data, APP_KEY, { expiresIn: '4h' });
  const verify = (token) => jwt.verify(token, APP_KEY);
  const isExpired = (exp) => {
    const now = moment();
    const tokenExp = moment.unix(exp);
    return 20 < now.diff(tokenExp, 'minute'); // more than 1 hour / 60 minutes
    // return moment.unix(exp).format('MMM:dd:ss');
  };

  const authorization = (req, res, next) => {

    const { authorization } = req.headers;

    if (!authorization) return next({ status: 403, message: 'Not Authorized' });

    const authorizationType = authorization.split(" ")[0];
    const token = authorization.split(" ")[1];

    if (!token || authorizationType !== 'Bearer') return next({ status: 403, message: 'Not Authorized' });

    const verifyToken = verify(token);

    req.user = verifyToken;

    next();

  }

  const basic = (req, res, next) => {
    return next();
    const { authorization } = req.headers;

    if (!authorization) return next({ status: 403, message: 'Not Authorized' });

    const authorizationType = authorization.split(" ")[0];
    const token = authorization.split(" ")[1];

    if (!token || authorizationType !== 'Basic') return next({ status: 403, message: 'Not Authorized' });

    const buff = Buffer.from(token, 'base64');
    const content = buff.toString('ascii');
    const [username, password] = content.split(":");

    console.log({ username, password });

    // cek user here
    if (username === 'client-web-id' && password === 'client-web-secret') {
      return next();
    } else {
      return next({ status: 403, message: 'Not Authorized' });
    }
  }

  return {
    sign,
    verify,
    authorization,
    basic
  }
}

module.exports = Authentication();