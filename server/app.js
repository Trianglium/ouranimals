var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


// Animal Endpoint Routers and Models
const Bears = require('./models/bears');
var bearRouter = require('./routes/bearRouter');

const Dogs = require('./models/dogs');
var dogRouter = require('./routes/dogRouter');

const Foxes = require('./models/foxes');
var foxRouter = require('./routes/foxRouter');

const Otters = require('./models/otters');
var otterRouter = require('./routes/otterRouter');


var app = express();

// Connect to MongoDB
const url = 'mongodb://localhost:27017/ourAnimals';
const connect = mongoose.connect(url);

connect.then((db) => {
    console.log("Connected correctly to server");
}, (err) => { console.log(err); });


// view engine setup 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Index and API Root
app.use('/', indexRouter);
app.use('/users', usersRouter);
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
