const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Integrate Bear Schema
const Bears = require('../models/bears');

const bearRouter = express.Router();

bearRouter.use(bodyParser.json());

bearRouter.route('/')
.get((req,res,next) => {
    Bears.find({})
    .then((bears) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(bears);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Bears.create(req.body)
    .then((bear) => {
        console.log('bear Created ', bear);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(bear);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /bears');
})
.delete((req, res, next) => {
    Bears.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

bearRouter.route('/:bearId')
.get((req,res,next) => {
    Bears.findById(req.params.bearId)
    .then((bear) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(bear);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /bears/'+ req.params.bearId);
})
.put((req, res, next) => {
    Bears.findByIdAndUpdate(req.params.bearId, {
        $set: req.body
    }, { new: true })
    .then((bear) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(bear);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Bears.findByIdAndRemove(req.params.bearId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = bearRouter;
