const validate = require('validator');

const parse = {
  textQuery: (req, res, next) => {
    const { address, components } = req.query;

    if (!address && !components) {
      return res.status(400).send('Request needs a "address" or "components" query parameter');
    }

    return next();
  },
  geocodeQuery: (req, res, next) => {
    const { geocode } = req.query;

    if (!geocode) {
      return res.status(400).send('Request needs a "geocode" query parameter');
    } else if (!validate.isLatLong(geocode)) {
      return res.status(400).send('Geocode value must be "lat,long" or "long,lat"');
    }
    
    return next();
  },
  distanceQuery: (req, res, next) => {
    const { p1, p2 } = req.query;

    const validLatLng = (lat, lng) => validate.isLatLong(`${lat},${lng}`);

    if (!p1 || !p2) {
      return res.status(400).send('Request needs "p1" and "p2" query parameters');
    } else if (!p1.lat || !p1.lng || !p2.lat || !p2.lng) {
      console.log(p1.lat, p2.lat, p1.lng, p2.lng);
      return res.status(400).send('"p1" and "p2" must have format {lat: "", lng; ""}')
    } else if (p1.lat === p2.lat && p1.long === p2.long) {
      return res.status(400).send('"p1" and "p2" have the same latitude and longitude');
    } else if (!validLatLng(p1.lat, p1.lng) || !validLatLng(p2.lat, p2.lng)) {
      return res.status(400).send('Geocode are invalid');
    }

    return next();
  }
}

module.exports = parse;