function Home() {

  const index = (req, res) => {
    res.send('Ok');
  }

  return {
    index
  }

}

module.exports = Home();