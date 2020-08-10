const UserRepo = require('../repositories/user-repo');
const auth = require('../helpers/auth');

function Auth() {

  const login = async (req, res, next) => {
    const { username, password } = req.body;

    console.log('login :: ', { username, password });

    try {
      const user = await UserRepo.login({ username, password });
      const token = auth.sign({ username: user.username, id: user._id, email: user.email, fullName: user.fullName });
      return res.status(200).send({ token });
    } catch (error) {
      next(error);
    }
  };

  const register = async (req, res, next) => {
    const userData = req.body;

    try {
      const data = await UserRepo.register(userData);
      return res.status(201).send({
        message: 'register user success',
        data
      })
    } catch (error) {
      next(error);
    }
  };

  const me = async (req, res, next) => {
    try {
      res.status(201).send({ user: req.user });
    } catch (error) {
      next(error);
    }
  }

  return {
    login,
    register,
    me
  }
}

module.exports = Auth();