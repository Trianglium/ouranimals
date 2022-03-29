const express = require('express');
const bodyParser = require('body-parser');

const otterRouter = express.Router();

otterRouter.use(bodyParser.json());

// otters
otterRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the otters to you!');
})
.post((req, res, next) => {
    res.end('Will add the otter: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /otters');
})
.delete((req, res, next) => {
    res.end('Deleting all otters');
});


// otterId
otterRouter.route('/:otterId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send details of the otter: ' + req.params.otterId +' to you!');
})

.post((req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /otters/'+ req.params.otterId);
})

.put((req, res, next) => {
  res.write('Updating the otter: ' + req.params.otterId + '\n');
  res.end('Will update the otter: ' + req.body.name + ' with details: ' + req.body.description);
})

.delete((req, res, next) => {
    res.end('Deleting otter: ' + req.params.otterId);
});

module.exports = otterRouter;
