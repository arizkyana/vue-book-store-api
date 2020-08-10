const BookRepo = require('../repositories/book-repo');

function Browse() {

  const book = async (req, res, next) => {

    try {
      const data = await BookRepo.getAll();
      res.status(200).send(data);
    } catch (error) {
      next(error);
    }

  }

  const detail = async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = await BookRepo.getSingle(id);
      res.status(200).send(data);
    } catch (error) {
      next(error);
    }
  }

  const basic = (req, res) => {
    res.status(200).send('cek basic auth');
  }

  return {
    book,
    detail,
    basic
  }
}

module.exports = Browse();