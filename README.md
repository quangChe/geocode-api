# Google Maps API

A microservice using Google Maps API to provide geolocation and map data to a front-end application.


## Getting Started

1. Install all dependencies.
 
```
npm install
```
 
2. Get a Google API Key and set up a .env file. In your .env file, add the following variables:

```
GOOGLE_API_KEY= // Your API key
HOSTNAME=localhost // when running locally
```

3. Start up the app.

```
npm start 
```

Next release:
```
docker build -t USERNAME/happy-hour .
docker run -p 9000:9000 --name=happy-hour USERNAME/hap
```