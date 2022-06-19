const express = require('express');
const foxRouter = express.Router();
const Animal = require('../model/animal');

// http://localhost:27017/api/image/fox
foxRouter.get('/image/fox', function (req, res, next) {
    Animal
        .find({
        type: 'fox'   // search query
        })
        .then(doc => {
        console.log(doc)
        })
        .catch(err => {
        console.error(err)
        })
});


module.exports = foxRouter;
