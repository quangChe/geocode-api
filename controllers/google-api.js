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
      next(err);
    }   
  },

  reverseGeocode: async (req, res, next) => {
    try {
      const response = await axios.get('/geocode/json', {
        params: { 
          latlng: req.query.geocode, 
        }
      });
      res.status(200).send(response.data.results[0]);
    } catch (err) {
      next(err);
    }
  },
  geocodesDistance: (req, res, next) => {
    try {
      const { p1, p2 } = req.query;
      const rad = (x) => x * Math.PI / 180;
      const R = 6378137;
      const dLat = rad(p2.lat - p1.lat);
      const dLng = rad(p2.lng - p2.lng);
      const a = Math.sin(dLat/2) * Math.sin(dLat/2) + Math.sin(dLng/2)
        * Math.sin(dLng/2) * Math.cos(p1.lat) * Math.cos(p2.lat);
      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
      const d = R * c;
      const data = {
        "meters": d,
      }
      res.status(200).send(data);
    } catch (err) {
      next(err);
    }
  }
}