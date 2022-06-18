const express = require('express');
const dogRouter = express.Router();
const Animal = require('../model/animal');

// http://localhost:27017/api/image/dog
dogRouter.get('/image/dog', function (req, res, next) {
  
  // https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
});


module.exports = dogRouter;
