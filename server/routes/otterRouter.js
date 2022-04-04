const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Otters = require('../models/otters');
const otterRouter = express.Router();

otterRouter.use(bodyParser.json());

// All Otters
otterRouter.route('/')
.get((req,res,next) => {
    Otters.find({})
    .then((otters) => {
        console.log('Otters:', otters);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(otters);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Otters.create(req.body)
    .then((otter) => {
        console.log('Otter Created ', otter);
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


// Otter specified by ID
otterRouter.route('/:otterId')
.get((req,res,next) => {
    Otters.findById(req.params.otterId)
    .then((otter) => {
      console.log('GET Otter by ID:', otter);
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
      console.log('PUT Otter:', otter);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(otter);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Otters.findByIdAndRemove(req.params.otterId)
    .then((resp) => {
      console.log('Delete Otter');
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = otterRouter;
