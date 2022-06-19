const express = require('express');
const bearRouter = express.Router();
const Animal = require('../model/animal');

// http://localhost:27017/api/image/bear
bearRouter.get('/image/bear', function (req, res, next) {
    Animal
        .find({
        type: 'bear'   // search query
        })
        .then(doc => {
        console.log(doc)
        })
        .catch(err => {
        console.error(err)
        })
});


module.exports = bearRouter;
