const Cart = require('../models/cart');

function Checkout() {
  const addToCart = async ({ book, user }) => {
    return await Cart.create({ book, user: user.id, qty: 1, });
  }
  const getCart = async (user) => {
    return await Cart.find({ user: user.id, ischeckout: false }).populate('book')
  }
  const removeItem = async (id) => {
    return await Cart.findByIdAndDelete({ _id: id });
  }
  const getCartSummary = async (user) => {
    const cart = await Cart.find({ user: user.id, ischeckout: false }).populate('book');

    let total = 0;
    cart.forEach(c => {
      total += c.book.price;
    });

    return total;
  }

  return {
    addToCart,
    getCart,
    removeItem,
    getCartSummary
  }
}

module.exports = Checkout();