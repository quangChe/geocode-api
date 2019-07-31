const env = require('dotenv').config();
const morgan = require('morgan');
const express = require('express');

const app = express();

const headers = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Authorization');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
}

app.use(headers);
app.use(morgan(':method :url :status :response-time ms - :res[content-length]'));


app.get('/', (req, res) => {res.status(200).send('Hello World!')});
app.use('*', (req, res) => res.status(400).send('Bad Request'));

app.listen(9000, process.env.HOSTNAME, () => {
  console.log('Server is listening on port 9000')
})