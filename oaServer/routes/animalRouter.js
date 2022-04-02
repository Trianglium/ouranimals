const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Integrate animal Schema
const Animals = require('../models/animals');

const animalRouter = express.Router();

animalRouter.use(bodyParser.json());

animalRouter.route('/')
.get((req,res,next) => {
    Animals.find({})
    .then((animals) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(animals);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Animals.create(req.body)
    .then((animal) => {
        console.log('animal Created ', animal);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(animal);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /animals');
})
.delete((req, res, next) => {
    Animals.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

animalRouter.route('/:animalId')
.get((req,res,next) => {
    Animals.findById(req.params.animalId)
    .then((animal) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(animal);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /animals/'+ req.params.animalId);
})
.put((req, res, next) => {
    Animals.findByIdAndUpdate(req.params.animalId, {
        $set: req.body
    }, { new: true })
    .then((animal) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(animal);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Animals.findByIdAndRemove(req.params.animalId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = animalRouter;
