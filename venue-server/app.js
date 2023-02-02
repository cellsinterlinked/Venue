const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
const monthRoutes = require('./routes/month-routes');
const userRoutes = require('./routes/user-routes');
const photoRoutes = require('./routes/photo-routes');
require('dotenv').config()


const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS')
    next();
  })

  app.use(bodyParser.json())

  app.use('/api/months', monthRoutes)
  app.use('/api/user', userRoutes)
  app.use('/api/photos', photoRoutes)




  app.use((res, req, next) => {   // this is a catch all for unsupported routes if they send a request to a route that isn't listed above ^
    const error = new HttpError('Could not find this route.', 404);
    throw error;
  })
  
  app.use((error, req, res, next) => {
    if (res.headerSent) {
      return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error occurred!'})
  
  })


mongoose
.connect(`mongodb+srv://${process.env.DB_USER}${process.env.DB_PASSWORD}@venue.ofzkjho.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
  app.listen(5000);
})
.catch(err => {
  console.log(err)
})
