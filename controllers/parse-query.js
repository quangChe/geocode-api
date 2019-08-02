const validate = require('validator');

const parse = {
  textQuery: (req, res, next) => {
    const { address, components } = req.query;

    if (!address && !components) {
      return next(new Error('ADDRESS_COMPONENTS_QUERY'));
    }

    return next();
  },
  geocodeQuery: (req, res, next) => {
    const { geocode } = req.query;
    let err = null;

    if (!geocode) {
      err = new Error('GEOCODE_QUERY');
    } else if (!validate.isLatLong(geocode)) {
      err = new Error('INVALID_GEOCODE_VALUE');
    }
    
    return err ? next(err) : next();
  },
  
}

module.exports = parse;