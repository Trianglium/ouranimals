const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Integrate fox Schema
const Foxes = require('../models/foxes');

const foxRouter = express.Router();

foxRouter.use(bodyParser.json());

foxRouter.route('/')
.get((req,res,next) => {
    Foxes.find({})
    .then((foxes) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(foxes);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Foxes.create(req.body)
    .then((fox) => {
        console.log('fox Created ', fox);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(fox);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /foxes');
})
.delete((req, res, next) => {
    Foxes.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

foxRouter.route('/:foxId')
.get((req,res,next) => {
    Foxes.findById(req.params.foxId)
    .then((fox) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(fox);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /foxes/'+ req.params.foxId);
})
.put((req, res, next) => {
    Foxes.findByIdAndUpdate(req.params.foxId, {
        $set: req.body
    }, { new: true })
    .then((fox) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(fox);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Foxes.findByIdAndRemove(req.params.foxId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = foxRouter;
