const errorResponse = {
  ADDRESS_COMPONENTS_QUERY: (res) => 
    res.status(400).send('Request must contain an "address" or "components" query parameter'),
  GEOCODE_QUERY: (res) =>
    res.status(400).send('Query must contain a "geocode" query parameter'),
  INVALID_GEOCODE_VALUE: (res) =>
    res.status(400).send('Invalid latitude and longitude value. Use "lat,long" or "long,lat"')
};

const errorHandler = (error, req, res, next) => {
  if (!errorResponse[error.message]) {
    return res.status(500).send(error.message || 'Unexpected error!');
  }
  return errorResponse[error.message](res);
}

module.exports = errorHandler;