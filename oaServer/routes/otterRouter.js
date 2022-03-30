const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Integrate otter Schema
const Otters = require('../models/otters');

const otterRouter = express.Router();

otterRouter.use(bodyParser.json());

otterRouter.route('/')
.get((req,res,next) => {
    Otters.find({})
    .then((otters) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(otters);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Otters.create(req.body)
    .then((otter) => {
        console.log('otter Created ', otter);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(otter);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /otters');
})
.delete((req, res, next) => {
    Otters.remove({})
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

otterRouter.route('/:otterId')
.get((req,res,next) => {
    Otters.findById(req.params.otterId)
    .then((otter) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(otter);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /otters/'+ req.params.otterId);
})
.put((req, res, next) => {
    Otters.findByIdAndUpdate(req.params.otterId, {
        $set: req.body
    }, { new: true })
    .then((otter) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(otter);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    otters.findByIdAndRemove(req.params.otterId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = otterRouter;
