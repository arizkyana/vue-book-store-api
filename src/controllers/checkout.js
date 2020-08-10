const CheckoutRepo = require('../repositories/checkout-repo');

function Checkout() {
  const addToCart = async (req, res, next) => {
    try {
      const { book, qty = 1 } = req.body;
      const user = req.user;

      const data = await CheckoutRepo.addToCart({ book, qty, user });

      res.status(201).send({
        message: 'add to cart success',
        data
      })
    } catch (error) {
      next(error);
    }
  }

  const getCart = async (req, res, next) => {
    try {
      const user = req.user;
      const data = await CheckoutRepo.getCart(user);
      return res.status(200).send(data);
    } catch (error) {
      next(error);
    }
  }

  return {
    addToCart,
    getCart
  }
}

module.exports = Checkout();