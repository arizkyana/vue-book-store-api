const Cart = require('../models/cart');

function Checkout() {
  const addToCart = async ({ book, user }) => {
    return await Cart.create({ book, user: user.id, qty: 1, });
  }
  const getCart = async (user) => {
    return await Cart.find({ user: user.id });
  }

  return {
    addToCart,
    getCart
  }
}

module.exports = Checkout();