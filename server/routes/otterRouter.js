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
    Otters.findByIdAndRemove(req.params.otterId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

// All Acknowledgements
otterRouter.route('/:otterId/acknowledgements')
.get((req,res,next) => {
    Otters.findById(req.params.otterId)
    .then((otter) => {
        if (otter != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(otter.acknowledgements);
        }
        else {
            err = new Error('Otter ' + req.params.otterId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Otters.findById(req.params.otterId)
    .then((otter) => {
        if (otter != null) {
            otter.acknowledgements.push(req.body);
            otter.save()
            .then((otter) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(otter);
            }, (err) => next(err));
        }
        else {
            err = new Error('Otter ' + req.params.otterId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /otters/'
        + req.params.otterId + '/acknowledgements');
})
.delete((req, res, next) => {
    Otters.findById(req.params.otterId)
    .then((otter) => {
        if (otter != null) {
            for (var i = (otter.acknowledgements.length -1); i >= 0; i--) {
                otter.acknowledgements.id(otter.acknowledgements[i]._id).remove();
            }
            otter.save()
            .then((otter) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(otter);
            }, (err) => next(err));
        }
        else {
            err = new Error('Otter ' + req.params.otterId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});

// Acknowledgement specified by ID

otterRouter.route('/:otterId/acknowledgements/:acknowledgementId')
.get((req,res,next) => {
    Otters.findById(req.params.otterId)
    .then((otter) => {
        if (otter != null && otter.acknowledgements.id(req.params.acknowledgementId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(otter.acknowledgements.id(req.params.acknowledgementId));
        }
        else if (otter == null) {
            err = new Error('Otter ' + req.params.otterId + ' not found');
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
    res.end('POST operation not supported on /otters/'+ req.params.otterId
        + '/acknowledgements/' + req.params.acknowledgementId);
})
.put((req, res, next) => {
    Otters.findById(req.params.otterId)
    .then((otter) => {
        if (otter != null && otter.acknowledgements.id(req.params.acknowledgementId) != null) {
            if (req.body.rating) {
                otter.acknowledgements.id(req.params.acknowledgementId).rating = req.body.rating;
            }
            if (req.body.acknowledgement) {
                otter.acknowledgements.id(req.params.acknowledgementId).acknowledgement = req.body.acknowledgement;
            }
            otter.save()
            .then((otter) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(otter);
            }, (err) => next(err));
        }
        else if (otter == null) {
            err = new Error('Otter ' + req.params.otterId + ' not found');
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
    Otters.findById(req.params.otterId)
    .then((otter) => {
        if (otter != null && otter.acknowledgements.id(req.params.acknowledgementId) != null) {
            otter.acknowledgements.id(req.params.acknowledgementId).remove();
            otter.save()
            .then((otter) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(otter);
            }, (err) => next(err));
        }
        else if (otter == null) {
            err = new Error('Otter ' + req.params.otterId + ' not found');
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

module.exports = otterRouter;
