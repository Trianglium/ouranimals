var express = require('express');
var router = express.Router();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const express = require('express'), http = require('http');

const hostname = 'localhost';
const port = 3000;
const app = express();

app.use(()) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body></body></html>')
}

// Serve static files
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

module.exports = router;
