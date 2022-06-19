const express = require('express');
const dogRouter = express.Router();
const Animal = require('../model/animal');

// http://localhost:27017/api/image/dog
dogRouter.get('/image/dog', function (req, res, next) {
    Animal
        .find({
        type: 'dog'   // search query
        })
        .then(doc => {
        console.log(doc)
        })
        .catch(err => {
        console.error(err)
        })
});


module.exports = dogRouter;
