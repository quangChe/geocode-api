module.exports = {
  getGeoCode: (req, res, next) => {
    res.status(200).send('GET CODE');
  },

  reverseGeoCode: (req, res, next) => {
    res.status(200).send('REVERSE');
  },
  getDistance: (req, res, next) => {
    res.status(200).send('DISTANCE');
  }
}