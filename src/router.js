const router = require('express').Router();

// helpers
const auth = require('./helpers/auth');

const HomeController = require('./controllers/home');
const AuthController = require('./controllers/auth');
const BrowseController = require('./controllers/browse');
const CheckoutController = require('./controllers/checkout');

module.exports = (app) => {

  router.get('/', HomeController.index);

  // auth
  router.post('/auth/login', auth.basic, AuthController.login);
  router.post('/auth/register', auth.basic, AuthController.register);
  router.get('/auth/me', auth.authorization, AuthController.me);

  // browse
  router.get('/browse/book', auth.basic, BrowseController.book);
  router.get('/browse/book/:id/detail', auth.basic, BrowseController.detail);
  router.get('/browse/book/basic', auth.basic, BrowseController.basic);

  // checkout
  router.post('/checkout/cart', auth.authorization, CheckoutController.addToCart);
  router.get('/checkout/cart', auth.authorization, CheckoutController.getCart);

  return router;
}