const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Dogs = require('../models/dogs');
const dogRouter = express.Router();

dogRouter.use(bodyParser.json());

// All Dogs
dogRouter.route('/')
.get((req,res,next) => {
    Dogs.find({})
    .then((dogs) => {
        console.log('Dogs:', dogs);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dogs);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Dogs.create(req.body)
    .then((dog) => {
        console.log('Dog Created ', dog);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dogs');
})
.delete((req, res, next) => {
    Dogs.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});


// Dog specified by ID
dogRouter.route('/:dogId')
.get((req,res,next) => {
    Dogs.findById(req.params.dogId)
    .then((dog) => {
      console.log('GET Dog by ID:', dog);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /dogs/'+ req.params.dogId);
})
.put((req, res, next) => {
    Dogs.findByIdAndUpdate(req.params.dogId, {
        $set: req.body
    }, { new: true })
    .then((dog) => {
      console.log('PUT Dog:', dog);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Dogs.findByIdAndRemove(req.params.dogId)
    .then((resp) => {
      console.log('Delete Dog');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = dogRouter;
