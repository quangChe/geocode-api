const router = require('express').Router();
const google = require('../controllers/google-api');

router.get('/geocode/get', google.getGeoCode);
router.get('/geocode/reverse', google.reverseGeoCode);
router.get('/geocode/distance', google.getDistance);

module.exports = router;