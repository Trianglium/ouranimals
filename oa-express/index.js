const express = require('express'),
     http = require('http'),
     morgan = require('morgan'),
     bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

// Serve Static Files
app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>OurAnimals Express Server</h1></body></html>');

});

// HTTP Methods

app.all('/otters', (req,res,next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/otters', (req,res,next) => {
    res.end('Will send all the otters to you!');
});

app.post('/otters', (req, res, next) => {
 res.end('Will add the otter: ' + req.body.name + ' with details: ' + req.body.description);
});

app.put('/otters', (req, res, next) => {
  res.statusCode = 403;
  res.end('PUT operation not supported on /otters');
});

app.delete('/otters', (req, res, next) => {
    res.end('Deleting all otters');
});

app.get('/otters/:otterId', (req,res,next) => {
    res.end('Will send details of the otter: ' + req.params.otterId +' to you!');
});

app.post('/otters/:otterId', (req, res, next) => {
  res.statusCode = 403;
  res.end('POST operation not supported on /otters/'+ req.params.otterId);
});

app.put('/otters/:otterId', (req, res, next) => {
  res.write('Updating the otter: ' + req.params.otterId + '\n');
  res.end('Will update the otter: ' + req.body.name +
        ' with details: ' + req.body.description);
});

app.delete('/otters/:otterId', (req, res, next) => {
    res.end('Deleting otter: ' + req.params.otterId);
});



const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
