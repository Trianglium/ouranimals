const express = require('express');
const otterRouter = express.Router();
const Animal = require('../model/animal');

// http://localhost:27017/api/image/otter
otterRouter.get('/image/otter', function (req, res, next) {
  
  // https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
});


module.exports = otterRouter;
