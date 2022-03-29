const express = require('express');
const bodyParser = require('body-parser');

const foxRouter = express.Router();

foxRouter.use(bodyParser.json());

// foxes
foxRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the foxes to you!');
})
.post((req, res, next) => {
    res.end('Will add the fox: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /foxes');
})
.delete((req, res, next) => {
    res.end('Deleting all foxes');
});


// foxId
foxRouter.route('/:foxId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the fox: ' + req.params.foxId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /foxes/'+ req.params.foxId);
})

.put((req, res, next) => {
  res.write('Updating the fox: ' + req.params.foxId + '\n');
  res.end('Will update the fox: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting fox: ' + req.params.foxId);
});

module.exports = foxRouter;
