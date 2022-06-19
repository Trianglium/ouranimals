const express = require('express');
const otterRouter = express.Router();
const Animal = require('../model/animal');

// http://localhost:27017/api/image/otter
otterRouter.get('/image/otter', function (req, res, next) {
    Animal
        .find({
        type: 'otter'   // search query
        })
        .then(doc => {
        console.log(doc)
        })
        .catch(err => {
        console.error(err)
        });
});


module.exports = otterRouter;
