var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// Animal Image Routers
var bearRouter = require('./routes/bearRouter');
var dogRouter = require('./routes/dogRouter');
var foxRouter = require('./routes/foxRouter');
var otterRouter = require('./routes/otterRouter');
var animalRouter = require('./routes/animalRouter');

// Connect to MongoDB Server
const mongoose = require('mongoose');

const Bears = require('./models/bears');
const Dogs = require('./models/dogs');
const Foxes = require('./models/foxes');
const Otters = require('./models/otters');
const Animals = require('./models/animals')

const url = 'mongodb://localhost:27017/ourAnimals';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Animal Image Routers
app.use('/bears', bearRouter);
app.use('/dogs', dogRouter);
app.use('/foxes', foxRouter);
app.use('/otters', otterRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
