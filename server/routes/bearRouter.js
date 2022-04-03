const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Bears = require('../models/bears');
const bearRouter = express.Router();

bearRouter.use(bodyParser.json());


// All Bears
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
        console.log('Bear Created ', bear);
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


// Bear specified by ID
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

// All Acknowledgements
bearRouter.route('/:bearId/acknowledgements')
.get((req,res,next) => {
    Bears.findById(req.params.bearId)
    .then((bear) => {
        if (bear != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(bear.acknowledgements);
        }
        else {
            err = new Error('Bear ' + req.params.bearId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Bears.findById(req.params.bearId)
    .then((bear) => {
        if (bear != null) {
            bear.acknowledgements.push(req.body);
            bear.save()
            .then((bear) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bear);
            }, (err) => next(err));
        }
        else {
            err = new Error('Bear ' + req.params.bearId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /bears/'
        + req.params.bearId + '/acknowledgements');
})
.delete((req, res, next) => {
    Bears.findById(req.params.bearId)
    .then((bear) => {
        if (bear != null) {
            for (var i = (bear.acknowledgements.length -1); i >= 0; i--) {
                bear.acknowledgements.id(bear.acknowledgements[i]._id).remove();
            }
            bear.save()
            .then((bear) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bear);
            }, (err) => next(err));
        }
        else {
            err = new Error('Bear ' + req.params.bearId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});

// Acknowledgement specified by ID

bearRouter.route('/:bearId/acknowledgements/:acknowledgementId')
.get((req,res,next) => {
    Bears.findById(req.params.bearId)
    .then((bear) => {
        if (bear != null && bear.acknowledgements.id(req.params.acknowledgementId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(bear.acknowledgements.id(req.params.acknowledgementId));
        }
        else if (bear == null) {
            err = new Error('Bear ' + req.params.bearId + ' not found');
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
    res.end('POST operation not supported on /bears/'+ req.params.bearId
        + '/acknowledgements/' + req.params.acknowledgementId);
})
.put((req, res, next) => {
    Bears.findById(req.params.bearId)
    .then((bear) => {
        if (bear != null && bear.acknowledgements.id(req.params.acknowledgementId) != null) {
            if (req.body.rating) {
                bear.acknowledgements.id(req.params.acknowledgementId).rating = req.body.rating;
            }
            if (req.body.acknowledgement) {
                bear.acknowledgements.id(req.params.acknowledgementId).acknowledgement = req.body.acknowledgement;
            }
            bear.save()
            .then((bear) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bear);
            }, (err) => next(err));
        }
        else if (bear == null) {
            err = new Error('Bear ' + req.params.bearId + ' not found');
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
    Bears.findById(req.params.bearId)
    .then((bear) => {
        if (bear != null && bear.acknowledgements.id(req.params.acknowledgementId) != null) {
            bear.acknowledgements.id(req.params.acknowledgementId).remove();
            bear.save()
            .then((bear) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(bear);
            }, (err) => next(err));
        }
        else if (bear == null) {
            err = new Error('Bear ' + req.params.bearId + ' not found');
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

module.exports = bearRouter;
