const express = require('express');
const foxRouter = express.Router();
const Animal = require('../model/animal');

// http://localhost:27017/api/image/fox
foxRouter.get('/image/fox', function (req, res, next) {
  
  // https://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
});


module.exports = foxRouter;
