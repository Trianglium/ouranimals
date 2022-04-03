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
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(dog);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.delete((req, res, next) => {
    Dogs.findByIdAndRemove(req.params.dogId)
    .then((resp) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(resp);
    }, (err) => next(err))
    .catch((err) => next(err));
});

// All Acknowledgements
dogRouter.route('/:dogId/acknowledgements')
.get((req,res,next) => {
    Dogs.findById(req.params.dogId)
    .then((dog) => {
        if (dog != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dog.acknowledgements);
        }
        else {
            err = new Error('Dog ' + req.params.dogId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    Dogs.findById(req.params.dogId)
    .then((dog) => {
        if (dog != null) {
            dog.acknowledgements.push(req.body);
            dog.save()
            .then((dog) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dog);
            }, (err) => next(err));
        }
        else {
            err = new Error('Dog ' + req.params.dogId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dogs/'
        + req.params.dogId + '/acknowledgements');
})
.delete((req, res, next) => {
    Dogs.findById(req.params.dogId)
    .then((dog) => {
        if (dog != null) {
            for (var i = (dog.acknowledgements.length -1); i >= 0; i--) {
                dog.acknowledgements.id(dog.acknowledgements[i]._id).remove();
            }
            dog.save()
            .then((dog) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dog);
            }, (err) => next(err));
        }
        else {
            err = new Error('Dog ' + req.params.dogId + ' not found');
            err.status = 404;
            return next(err);
        }
    }, (err) => next(err))
    .catch((err) => next(err));
});

// Acknowledgement specified by ID

dogRouter.route('/:dogId/acknowledgements/:acknowledgementId')
.get((req,res,next) => {
    Dogs.findById(req.params.dogId)
    .then((dog) => {
        if (dog != null && dog.acknowledgements.id(req.params.acknowledgementId) != null) {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(dog.acknowledgements.id(req.params.acknowledgementId));
        }
        else if (dog == null) {
            err = new Error('Dog ' + req.params.dogId + ' not found');
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
    res.end('POST operation not supported on /dogs/'+ req.params.dogId
        + '/acknowledgements/' + req.params.acknowledgementId);
})
.put((req, res, next) => {
    Dogs.findById(req.params.dogId)
    .then((dog) => {
        if (dog != null && dog.acknowledgements.id(req.params.acknowledgementId) != null) {
            if (req.body.rating) {
                dog.acknowledgements.id(req.params.acknowledgementId).rating = req.body.rating;
            }
            if (req.body.acknowledgement) {
                dog.acknowledgements.id(req.params.acknowledgementId).acknowledgement = req.body.acknowledgement;
            }
            dog.save()
            .then((dog) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dog);
            }, (err) => next(err));
        }
        else if (dog == null) {
            err = new Error('Dog ' + req.params.dogId + ' not found');
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
    Dogs.findById(req.params.dogId)
    .then((dog) => {
        if (dog != null && dog.acknowledgements.id(req.params.acknowledgementId) != null) {
            dog.acknowledgements.id(req.params.acknowledgementId).remove();
            dog.save()
            .then((dog) => {
                res.statusCode = 200;
                res.setHeader('Content-Type', 'application/json');
                res.json(dog);
            }, (err) => next(err));
        }
        else if (dog == null) {
            err = new Error('Dog ' + req.params.dogId + ' not found');
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

module.exports = dogRouter;
