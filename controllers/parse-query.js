const validate = require('validator');

const parse = {
  textQuery: (req, res, next) => {
    const { address, components } = req.query;
    if (!address && !components) {
      return next(new Error(`Query must contain 'address' or 'components' parameters`));
    }
    return next();
  },
}

module.exports = parse;