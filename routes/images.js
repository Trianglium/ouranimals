const express = require('express');
const animalImageRouter = express.Router();
const Animal = require('../model/animal');

// http://localhost:27017/api/images
animalImageRouter.get('/images', function (req, res, next) {
  Animal.aggregate([{
    $sample: { size: 1 }
  }]).then(function (animal) {
    console.log(animal);
    res.send(animal);
  }).catch(next);
});


module.exports = animalImageRouter;
