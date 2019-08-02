const router = require('express').Router();
const { 
  textQuery,
  geocodeQuery,
} = require('../controllers/parse-query');
const { 
  getGeocode, 
  reverseGeocode, 
  geocodesDistance,
} = require('../controllers/google-api');

router.get('/geocode/get', textQuery, getGeocode);
router.get('/geocode/reverse', geocodeQuery, reverseGeocode);
router.get('/geocode/distance', geocodesDistance);

module.exports = router;