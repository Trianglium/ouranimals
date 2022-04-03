const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Foxes = require('../models/foxes');
const foxRouter = express.Router();

foxRouter.use(bodyParser.json());

// All Foxes
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
        console.log('Fox Created ', fox);
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


// Fox specified by ID
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

// All Acknowledgements
foxRouter.route('/:foxId/acknowledgements')
.get((req,res,next) => {
    Foxes.findById(req.params.foxId)
    .then((fox) => {
        if (fox != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(fox.acknowledgements);
        }
        else {
            err = new Error('Fox ' + req.params.foxId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Foxes.findById(req.params.foxId)
    .then((fox) => {
        if (fox != null) {
            fox.acknowledgements.push(req.body);
            fox.save()
            .then((fox) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(fox);
            }, (err) => next(err));
        }
        else {
            err = new Error('Fox ' + req.params.foxId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /foxes/'
        + req.params.foxId + '/acknowledgements');
})
.delete((req, res, next) => {
    Foxes.findById(req.params.foxId)
    .then((fox) => {
        if (fox != null) {
            for (var i = (fox.acknowledgements.length -1); i >= 0; i--) {
                fox.acknowledgements.id(fox.acknowledgements[i]._id).remove();
            }
            fox.save()
            .then((fox) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(fox);
            }, (err) => next(err));
        }
        else {
            err = new Error('Fox ' + req.params.foxId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});

// Acknowledgement specified by ID

foxRouter.route('/:foxId/acknowledgements/:acknowledgementId')
.get((req,res,next) => {
    Foxes.findById(req.params.foxId)
    .then((fox) => {
        if (fox != null && fox.acknowledgements.id(req.params.acknowledgementId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(fox.acknowledgements.id(req.params.acknowledgementId));
        }
        else if (fox == null) {
            err = new Error('Fox ' + req.params.foxId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Acknowledgement ' + req.params.acknowledgementId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /foxes/'+ req.params.foxId
        + '/acknowledgements/' + req.params.acknowledgementId);
})
.put((req, res, next) => {
    Foxes.findById(req.params.foxId)
    .then((fox) => {
        if (fox != null && fox.acknowledgements.id(req.params.acknowledgementId) != null) {
            if (req.body.rating) {
                fox.acknowledgements.id(req.params.acknowledgementId).rating = req.body.rating;
            }
            if (req.body.acknowledgement) {
                fox.acknowledgements.id(req.params.acknowledgementId).acknowledgement = req.body.acknowledgement;
            }
            fox.save()
            .then((fox) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(fox);
            }, (err) => next(err));
        }
        else if (fox == null) {
            err = new Error('Fox ' + req.params.foxId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Acknowledgement ' + req.params.acknowledgementId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Foxes.findById(req.params.foxId)
    .then((fox) => {
        if (fox != null && fox.acknowledgements.id(req.params.acknowledgementId) != null) {
            fox.acknowledgements.id(req.params.acknowledgementId).remove();
            fox.save()
            .then((fox) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(fox);
            }, (err) => next(err));
        }
        else if (fox == null) {
            err = new Error('Fox ' + req.params.foxId + ' not found');
            err.status = 404;
            return next(err);
        }
        else {
            err = new Error('Acknowledgement ' + req.params.acknowledgementId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});

module.exports = foxRouter;
