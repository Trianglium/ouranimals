const express = require('express');
const bodyParser = require('body-parser');

const dogRouter = express.Router();

dogRouter.use(bodyParser.json());

// dogs
dogRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the dogs to you!');
})
.post((req, res, next) => {
    res.end('Will add the dog: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /dogs');
})
.delete((req, res, next) => {
    res.end('Deleting all dogs');
});


// dogId
dogRouter.route('/:dogId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the dog: ' + req.params.dogId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /dogs/'+ req.params.dogId);
})

.put((req, res, next) => {
  res.write('Updating the dog: ' + req.params.dogId + '\n');
  res.end('Will update the dog: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting dog: ' + req.params.dogId);
});

module.exports = dogRouter;
