const express = require('express');
const bearRouter = express.Router();
const Animal = require('../model/animal');

// http://localhost:27017/api/image/bear
bearRouter.get('/image/bear', function (req, res, next) {
  
  // https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
});


module.exports = bearRouter;
