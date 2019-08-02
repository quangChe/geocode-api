const axios = require('axios');
axios.defaults.baseURL = 'https://maps.googleapis.com/maps/api/';
axios.defaults.params = { key: process.env.GOOGLE_API_KEY };

module.exports = {
  getGeocode: async (req, res) => {
    try {
      const response = await axios.get('/geocode/json', {
        params: { 
          address: req.query.address, 
          components: req.query.components
        }
      });
      const geocodeData = response.data.results.map(data => ({
        name: data.formatted_address,
        geometry: data.geometry.location
      }));

      res.status(200).send(geocodeData);
    } catch(err) {
      console.error(err);
    }   
  },

  reverseGeocode: (req, res, next) => {
    // const 
  },
  geocodesDistance: (req, res, next) => {
    res.status(200).send('DISTANCE');
  }
}