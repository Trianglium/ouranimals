const express = require('express');
const bodyParser = require('body-parser');

const bearRouter = express.Router();

bearRouter.use(bodyParser.json());

// bears
bearRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the bears to you!');
})
.post((req, res, next) => {
    res.end('Will add the bear: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /bears');
})
.delete((req, res, next) => {
    res.end('Deleting all bears');
});


// bearId
bearRouter.route('/:bearId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the bear: ' + req.params.bearId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /bears/'+ req.params.bearId);
})

.put((req, res, next) => {
  res.write('Updating the bear: ' + req.params.bearId + '\n');
  res.end('Will update the bear: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting bear: ' + req.params.bearId);
});

module.exports = bearRouter;
