const bcrypt = require('bcrypt');

const User = require('../models/user');

function UserRepo() {

  const register = async (userData) => {
    return await User.create(userData);
  }

  const login = async ({ username, password }) => {
    const user = await User.findOne({ username });

    if (bcrypt.compareSync(password, user.password)) {
      return user;
    }

    return new Error('user not found');
  }

  const getUser = async (id) => {
    return await User.findById(id);
  }

  return {
    register,
    login,
    getUser
  }
}

module.exports = UserRepo();